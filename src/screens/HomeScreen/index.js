import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import TreeView from '../../components/TreeView';
import {vh} from '../../utils/units';
import SelectedVariants from '../../components/SelectedVariants';

const Home = () => {
  const [selectedItems, setSelectedItems] = useState(new Set());
  console.log('Selected items app.js:', selectedItems);
  const products = [
    {
      category: 'Phones',
      brands: [
        {
          name: 'Apple',
          models: [
            {
              name: 'iPhone 6',
              variants: ['128GB', '256GB', '512GB'],
            },
            {
              name: 'iPhone 7',
              variants: ['32GB', '128GB'],
            },
            {
              name: 'iPhone X',
              variants: ['64GB', '256GB'],
            },
          ],
        },
        {
          name: 'Samsung',
          models: [
            {
              name: 'Galaxy S10',
              variants: ['128GB', '512GB'],
            },
            {
              name: 'Galaxy Note 10',
              variants: ['256GB', '512GB'],
            },
          ],
        },
        {
          name: 'Google',
          models: [
            {
              name: 'Pixel 4',
              variants: ['64GB', '128GB'],
            },
          ],
        },
      ],
    },
    {
      category: 'Watches',
      brands: [
        {
          name: 'Apple',
          models: [
            {
              name: 'Apple Watch Series 4',
              variants: ['40mm', '44mm'],
            },
          ],
        },
        {
          name: 'Samsung',
          models: [
            {
              name: 'Galaxy Watch',
              variants: ['42mm', '46mm'],
            },
          ],
        },
      ],
    },
    {
      category: 'Computers',
      brands: [
        {
          name: 'Apple',
          models: [
            {
              name: 'MacBook Pro 16"',
              variants: ['i7', 'i9'],
            },
          ],
        },
        {
          name: 'Dell',
          models: [
            {
              name: 'XPS 13',
              variants: ['1080p', '4K'],
            },
          ],
        },
      ],
    },
    {
      category: 'TVs',
      brands: [
        {
          name: 'Samsung',
          models: [
            {
              name: 'QLED 8K',
              variants: ['65"', '75"'],
            },
          ],
        },
        {
          name: 'LG',
          models: [
            {
              name: 'OLED 4K',
              variants: ['55"', '65"'],
            },
          ],
        },
      ],
    },
  ];

  return (
    <View style={styles.mainView}>
      <Text style={styles.headingText}>Browse Products</Text>

      <TreeView
        data={products}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <SelectedVariants selectedItems={selectedItems} />
    </View>
  );
};

export default Home;
