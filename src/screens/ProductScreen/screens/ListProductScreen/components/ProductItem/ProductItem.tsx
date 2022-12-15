import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ProductScreenStackParamList } from '../../../../ProductScreen';

type ProductItemProps = {
  title: string;
  id: number;
};

const ProductItem = ({ title, id }: ProductItemProps) => {
  const navigator = useNavigation<NativeStackNavigationProp<ProductScreenStackParamList>>();

  const handlePress = () => {
    navigator.navigate('ProductDetail', { id: id.toString() });
  };

  return (
    <View className="my-2 bg-pink-400 p-5">
      <TouchableOpacity onPress={handlePress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
