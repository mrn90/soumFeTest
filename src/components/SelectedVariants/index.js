import React from 'react';
import {View, StyleSheet, Text} from 'react-native';



const SelectedVariants = ({ selectedItems }) => {
    console.log('selectedItems in component: ', selectedItems)
    const selectedArray = Array.from(selectedItems);
    return (
      <View style={selectedStyles.container}>
        {Array.from(selectedItems).map((itemId) => (
          <View key={itemId} style={selectedStyles.variantBox}>
            <Text style={selectedStyles.variantText}>{itemId.replace(/-/g, ' ')}</Text>
          </View>
        ))}
      </View>
    );
  };

  const selectedStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 10,
      backgroundColor: '#F0F0F0',
    },
    variantBox: {
      backgroundColor: '#E0E0E0',
      borderRadius: 2,
      padding: 8,
      marginRight: 8,
      marginBottom: 8,
    },
    variantText: {
      fontSize: 12,
      color: '#000',
    },
  });
export default SelectedVariants;
