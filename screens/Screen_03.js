import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function Screen_03() {
  const [data, setData] = useState([
    { key: '1', type: 'Vegetable', name: 'Apple', price: "28.00", image: require('../assets/Data/Image_101.png'), sl: 1 },
    { key: '1', type: 'Vegetable', name: 'Pear', price: "28.00", image: require('../assets/Data/Image_102.png'), sl: 2 },
    { key: '1', type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/Data/Image_103.png'), sl: 3 },
    { key: '1', type: 'Vegetable', name: 'Pear', price: "28.00", image: require('../assets/Data/Image_105.png'), sl: 1 },
    { key: '1', type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/Data/Image_106.png'), sl: 1 },
    { key: '1', type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/Data/Image_107.png'), sl: 4 },
    { key: '1', type: 'Vegetable', name: 'Pear', price: "28.00", image: require('../assets/Data/Image_105.png'), sl: 1 },
    { key: '1', type: 'Seafood', name: 'Seafood 1', price: '28.00', image: require('../assets/Data/Image_95.png') },
    { key: '1', type: 'Seafood', name: 'Seafood 2', price: '28.00', image: require('../assets/Data/Image_95.png') },
    { key: '1', type: 'Seafood', name: 'Seafood 3', price: '28.00', image: require('../assets/Data/Image_95.png') },
    { key: '1', type: 'Seafood', name: 'Seafood 4', price: '28.00', image: require('../assets/Data/Image_95.png') },
    { key: '1', type: 'Seafood', name: 'Seafood 5', price: '28.00', image: require('../assets/Data/Image_95.png') },
    { key: '1', type: 'Drink', name: 'Drink 1', price: '28.00', image: require('../assets/Data/Image_96.png') },
    { key: '1', type: 'Drink', name: 'Drink 2', price: '28.00', image: require('../assets/Data/Image_96.png') },
    { key: '1', type: 'Drink', name: 'Drink 3', price: '28.00', image: require('../assets/Data/Image_96.png') },
    { key: '1', type: 'Drink', name: 'Drink 4', price: '28.00', image: require('../assets/Data/Image_96.png') },
    { key: '1', type: 'Drink', name: 'Drink 5', price: '28.00', image: require('../assets/Data/Image_96.png') },
    { key: '1', type: 'Drink', name: 'Drink 6', price: '28.00', image: require('../assets/Data/Image_96.png') }
  ]);

  const [type, setType] = useState('Vegetable');
  const [selectedBtn, setSelectedBtn] = useState("Vegetable");
  const [soluong, setSoluong] = useState(1);

  return (
    <ScrollView stickyHeaderIndices={[0, -1]}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => { navigation.navigate("Screen_02") }}>
          <Image source={require('../assets/Data/Image_183.png')} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, color: 'green', fontWeight: 'bold' }}>My Basket</Text>
        <FlatList
          data={data.filter((item) => item.type == type)}
          renderItem={({ item }) => (
            <View style={{ width: '100%', marginHorizontal: '2.5%', padding: 15, borderWidth: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Image source={item.image} style={{ width: 70, height: 70, marginRight: 10 }} resizeMode='contain' />
              <View>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'green' }}>{item.price}</Text>
                <Text style={{ fontSize: 18, color: 'silver' }}>{item.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../assets/Data/Image_180.png')} style={{ width: 15, height: 15, marginTop: 10 }} />
                  <Image source={require('../assets/Data/Image_180.png')} style={{ width: 15, height: 15, marginTop: 10 }} />
                  <Image source={require('../assets/Data/Image_180.png')} style={{ width: 15, height: 15, marginTop: 10 }} />
                  <Image source={require('../assets/Data/Image_180.png')} style={{ width: 15, height: 15, marginTop: 10 }} />
                  <Image source={require('../assets/Data/Image_180.png')} style={{ width: 15, height: 15, marginTop: 10 }} />
                </View>
              </View>
              <View style={{ marginLeft: 140, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/Data/Image_176.png')} style={{ width: 15, height: 15, marginRight: 10 }} />
                <Text style={{ fontSize: 15 }}>{item.sl}</Text>
                <Image source={require('../assets/Data/Image_175.png')} style={{ width: 15, height: 15, marginLeft: 10 }} />
              </View>
            </View>
          )}
        />
        <View style={{ justifyContent: 'center', width: '100%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 18 }}>
            <Text style={{ fontSize: 30 }}>Total</Text>
            <Text style={{ fontSize: 30 }}>$ 320.00</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Screen_02") }}>
            <Text style={{ fontSize: 20, color: 'white' }}>Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 40,
    width: 240,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 90,
    marginVertical: 20,
  }
});