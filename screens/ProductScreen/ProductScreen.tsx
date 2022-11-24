import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ListProductScreen from './screens/ListProductScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

export type ProductScreenStackParamList = {
  ListProduct: undefined;
  ProductDetail: { id: string };
};

const ProductScreenStack = createNativeStackNavigator<ProductScreenStackParamList>();

const ProductScreen = () => {
  return (
    <ProductScreenStack.Navigator
      initialRouteName="ListProduct"
      screenOptions={{ headerShown: false }}
    >
      <ProductScreenStack.Screen name="ListProduct" component={ListProductScreen} />
      <ProductScreenStack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </ProductScreenStack.Navigator>
  );
};

export default ProductScreen;
