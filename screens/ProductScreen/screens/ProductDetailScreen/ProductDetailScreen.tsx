import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ProductScreenStackParamList } from '../../ProductScreen';

export type ProductDetailScreenProps = NativeStackScreenProps<
  ProductScreenStackParamList,
  'ProductDetail'
>;

const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {
  return (
    <SafeAreaView>
      <Text>{route.params.id}</Text>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
