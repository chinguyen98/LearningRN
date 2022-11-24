import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type ProductItemProps = {
  title: string;
};

const ProductItem = ({ title }: ProductItemProps) => {
  return (
    <View className="my-2 bg-pink-400 p-5">
      <TouchableOpacity>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
