import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type ProductItemProps = {
  title: string;
  id: number;
};

const ProductItem = ({ title, id }: ProductItemProps) => {
  const handlePress = () => {
    console.log({ id });
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
