import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';

const ProductScreen = () => {
  useEffect(() => {
    console.log('Product Screen mounted!');
  }, []);

  return (
    <SafeAreaView className="bg-black h-full">
      <Text>List product!</Text>
    </SafeAreaView>
  );
};

export default ProductScreen;
