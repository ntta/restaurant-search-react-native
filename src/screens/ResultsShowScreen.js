import React, { useState, useEffect } from 'react';
import { Image, View, Text, FlatList, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;
  const address = route.params.address.length > 0 ? route.params.address.join(', ') : null;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      {address ? <Text>{address}</Text> : null}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return (
            <Image
              source={{ uri: item }}
              style={styles.image}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    height: 200,
    width: 300,
    marginVertical: 10,
    borderRadius: 4
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
});

export default ResultsShowScreen;
