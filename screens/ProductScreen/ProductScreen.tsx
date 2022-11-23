import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import useFetchAllPost from '../../hooks/services/useFetchAllPost';

const Item = ({ title = '' }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const ProductScreen = () => {
  const { isSuccess, data } = useFetchAllPost();

  console.log({ data });

  return (
    <SafeAreaView className="bg-black h-full">
      {!isSuccess ? (
        <Text>Loading.........</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Item title={item.title} />}
        />
      )}
    </SafeAreaView>
  );
};

export default ProductScreen;
