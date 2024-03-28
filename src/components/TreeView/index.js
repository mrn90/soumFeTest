import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {vh, vw} from '../../utils/units';

const TreeView = ({data, selectedItems, setSelectedItems}) => {
  const [expanded, setExpanded] = useState({});
  const [selectedVariants, setSelectedVariants] = useState(new Set());

  
  const handlePress = id => {
    setExpanded({
      ...expanded,
      [id]: !expanded[id],
    });
  };

  const toggleVariantSelection = (variantId) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = new Set(prevSelectedItems);
      if (newSelectedItems.has(variantId)) {
        newSelectedItems.delete(variantId);
      } else {
        newSelectedItems.add(variantId);
      }
      return newSelectedItems;
    });
  };

  
  const renderVariants = (variants, modelId) => {
    if (!expanded[modelId]) return null;
    return variants.map((variant, index) => {
      const variantId = `${modelId}-${variant}`;
      const isSelected = selectedItems.has(variantId); 

      return (
        <TouchableOpacity
          key={index}
          style={styles.variant}
          onPress={() => toggleVariantSelection(variantId)}>
          <View style={styles.checkbox}>
            {isSelected && <Text style={styles.checkboxTick}>✓</Text>} 
          </View>
          <Text style={styles.variantText}>{variant}</Text>
        </TouchableOpacity>
      );
    });
  };

  
  const renderModels = (models, brandId) => {
    if (!expanded[brandId]) return null;
    return models.map(model => (
      <View key={model.name} style={styles.model}>
        <TouchableOpacity onPress={() => handlePress(model.name)}>
          <Text style={styles.modelText}>{model.name}</Text>
        </TouchableOpacity>
        {renderVariants(model.variants, model.name)}
      </View>
    ));
  };

  
  const renderBrands = (brands, categoryId) => {
    if (!expanded[categoryId]) return null;
    return brands.map(brand => (
      <View key={brand.name} style={styles.brand}>
        <TouchableOpacity onPress={() => handlePress(brand.name)}>
          <Text style={styles.brandText}>{brand.name}</Text>
        </TouchableOpacity>
        {renderModels(brand.models, brand.name)}
      </View>
    ));
  };

  
  const renderCategories = categories => {
    return categories.map(category => (
      <View key={category.category} style={styles.category}>
        <TouchableOpacity onPress={() => handlePress(category.category)}>
          <Text style={styles.categoryText}>{category.category}</Text>
        </TouchableOpacity>
        {renderBrands(category.brands, category.category)}
      </View>
    ));
  };

  
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 5 * vh}}
      style={styles.container}>
      {renderCategories(data)}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  category: {
    borderTopWidth: 1,
    borderTopColor: '#D6D6D6',
  },
  categoryText: {
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  brand: {
    paddingLeft: 20,
    borderLeftWidth: 2,
    borderColor: '#D6D6D6',
  },
  brandText: {
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  model: {
    paddingLeft: 40,
    borderLeftWidth: 2,
    borderColor: '#D6D6D6',
  },
  modelText: {
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  variant: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 60,
    paddingVertical: 2,
    backgroundColor: '#EFEFEF',
    borderBottomWidth: 1,
    borderBottomColor: '#D6D6D6',
  },
  variantText: {
    padding: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  checkboxTick: {
    fontSize: 18,
    color: '#000',
  },
});
export default TreeView;
