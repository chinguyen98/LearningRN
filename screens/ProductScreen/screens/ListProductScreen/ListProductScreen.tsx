import React from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import useFetchAllPost from '../../../../hooks/services/useFetchAllPost';
import ProductItem from './components/ProductItem';

const ListProductScreen = () => {
  const { isSuccess, data } = useFetchAllPost();

  return (
    <SafeAreaView className="bg-black h-full">
      {!isSuccess ? (
        <Text>Loading.........</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductItem title={item.title} />}
        />
      )}
    </SafeAreaView>
  );
};

export default ListProductScreen;
