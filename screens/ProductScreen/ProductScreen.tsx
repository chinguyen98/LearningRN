import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ListProductScreen from './screens/ListProductScreen';

type ProductScreenParamList = {
  ListProduct: undefined;
  ProductDetail: { id: string };
};

const ProductScreenStack = createNativeStackNavigator<ProductScreenParamList>();

const ProductScreen = () => {
  return (
    <ProductScreenStack.Navigator>
      <ProductScreenStack.Screen name="ListProduct" component={ListProductScreen} />
    </ProductScreenStack.Navigator>
  );
};

export default ProductScreen;
