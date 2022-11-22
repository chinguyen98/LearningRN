import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { RootStackParamList } from '../../App';

type ProductScreenProps = NativeStackScreenProps<RootStackParamList, 'Product'>;

const ProductScreen = ({ route }: ProductScreenProps) => {
  return (
    <SafeAreaView className="bg-black h-full">
      <Text>{route.params.product_id}</Text>
    </SafeAreaView>
  );
};

export default ProductScreen;
