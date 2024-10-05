import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import React, { useState } from 'react';

export default function Screen_02({ navigation }) {
  const [data, setData] = useState([
    { key: '1', type: 'Vegetable', name: 'Apple', price: "28.00", image: require('../assets/Data/Image_101.png') },
    { key: '1', type: 'Vegetable', name: 'Pear', price: '28.00', image: require('../assets/Data/Image_102.png') },
    { key: '1', type: 'Vegetable', name: 'Coconut', price: "28.00", image: require('../assets/Data/Image_103.png') },
    { key: '1', type: 'Vegetable', name: 'Pear', price: '28.00', image: require('../assets/Data/Image_105.png') },
    { key: '1', type: 'Vegetable', name: 'Coconut', price: "28.00", image: require('../assets/Data/Image_106.png') },
    { key: '1', type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/Data/Image_105.png') },
    { key: '1', type: 'Vegetable', name: 'Pear', price: '28.00', image: require('../assets/Data/Image_105.png') },
    { key: '1', type: 'Seafood', name: 'Seafood 1', price: "28.00", image: require('../assets/Data/Image_95.png') },
    { key: '1', type: 'Seafood', name: 'Seafood 2', price: "28.00", image: require('../assets/Data/Image_95.png') },
    { key: '1', type: 'Seafood', name: 'Seafood 3', price: '28.00', image: require('../assets/Data/Image_95.png') },
    { key: '1', type: 'Seafood', name: 'Seafood 4', price: '28.00', image: require('../assets/Data/Image_95.png') },
    { key: '1', type: 'Seafood', name: 'Seafood 5', price: '28.00', image: require('../assets/Data/Image_95.png') },
    { key: '1', type: 'Drink', name: 'Drink 1', price: "28.00", image: require('../assets/Data/Image_96.png') },
    { key: '1', type: 'Drink', name: 'Drink 2', price: "28.00", image: require('../assets/Data/Image_96.png') },
    { key: '1', type: 'Drink', name: 'Drink 3', price: "28.00", image: require('../assets/Data/Image_96.png') },
    { key: '1', type: 'Drink', name: 'Drink 4', price: "28.00", image: require('../assets/Data/Image_96.png') },
    { key: '1', type: 'Drink', name: 'Drink 5', price: "28.00", image: require('../assets/Data/Image_96.png') },
    { key: '1', type: 'Drink', name: 'Drink 6', price: "28.00", image: require('../assets/Data/Image_96.png') }
  ]);

  const [type, setType] = useState("Vegetable");
  const [initialItemCount, setInitialItemCount] = useState(6);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Sản phẩm được chọn
  const [quantity, setQuantity] = useState(1); // Số lượng mặc định
  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };
  const confirmPurchase = () => {
    setModalVisible(false);
    if (selectedItem) {
      const productWithQuantity = { ...selectedItem, quantity }; // Thêm số lượng vào sản phẩm
      navigation.navigate("Screen_03", { product: productWithQuantity }); // Điều hướng với sản phẩm
    }
  };
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <View style={{
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
      }}>
        <TouchableOpacity onPress={() => { navigation.navigate("Screen_01") }}>
          <Image source={require('../assets/Data/Image_183.png')} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Screen_03") }}>
          <Image source={require('../assets/Data/Image_182.png')} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%' }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
            width: '90%',
            height: 50,
            alignSelf: 'center',
            marginTop: 20,
            paddingLeft: 20,
            fontSize: 28,
          }}
          placeholder="Search"
        />
      </View>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
      }}>
        <TouchableOpacity style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 40,
          backgroundColor: type == 'Vegetable' ? 'green' : 'white',
        }}
          onPress={() => { setType('Vegetable'); setInitialItemCount(6); }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'blue', }}>Vegetable</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 40,
          backgroundColor: type == 'Seafood' ? 'green' : 'white',
        }}
          onPress={() => { setType('Seafood'); setInitialItemCount(6); }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'blue', }}>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 40,
          backgroundColor: type == 'Drinks' ? 'green' : 'white',
        }}
          onPress={() => { setType('Drink'); setInitialItemCount(6); }}>
          <Text style={{ fontSize: 29, fontWeight: 'bold', color: 'blue', }}>Drinks</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
      }}>
        <Text style={{ fontSize: 25, color: 'green' }}>Order your favorite</Text>
        <TouchableOpacity onPress={() => { setInitialItemCount(data.length) }}>
          <Text style={{ fontSize: 25, color: 'pink' }}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data.filter((item) => item.type == type).slice(0, initialItemCount)}
        renderItem={({ item }) => (
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '45%',
            marginHorizontal: '2.5%',
            marginVertical: 10,
            padding: 15,
          }}>
            <TouchableOpacity onPress={() => openModal(item)}>
              <Image source={item.image} style={{ width: 150, height: 150 }} resizeMode='contain' />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>{item.name}</Text>
          </View>
        )}
        numColumns={2}
      />
      {selectedItem && (
        <Modal visible={modalVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{selectedItem.name}</Text>
              <Image source={selectedItem.image} style={{ width: 150, height: 150 }} resizeMode='contain' />
              <Text style={{ fontSize: 20 }}>Price: {selectedItem.price}</Text>

              {/* Chọn số lượng */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity onPress={() => setQuantity(prev => Math.max(1, prev - 1))}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, marginHorizontal: 20 }}>{quantity}</Text>
                <TouchableOpacity onPress={() => setQuantity(prev => prev + 1)}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>

              {/* Xác nhận mua */}
              <TouchableOpacity style={styles.confirmButton} onPress={confirmPurchase}>
                <Text style={{ fontSize: 20, color: 'white' }}>Add to Cart</Text>
              </TouchableOpacity>

              {/* Đóng modal */}
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  }, modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 30,
    paddingHorizontal: 10,
  },
  confirmButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  closeButton: {
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
});