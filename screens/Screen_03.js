import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Screen_03({ navigation, route }) {
  const { product } = route.params || {}; // Lấy dữ liệu sản phẩm từ Screen_02
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (product) {
      // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
      const existingProduct = cart.find(item => item.key === product.key);
      if (existingProduct) {
        // Nếu sản phẩm đã có, chỉ tăng số lượng
        setCart(cart.map(item => item.key === product.key
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
        ));
      } else {
        // Nếu sản phẩm chưa có, thêm vào giỏ hàng
        setCart([...cart, product]);
      }
    }
  }, [product]);

  // Hàm để tăng số lượng sản phẩm
  const increaseQuantity = (key) => {
    setCart(cart.map(item => item.key === key
      ? { ...item, quantity: item.quantity + 1 }
      : item
    ));
  };

  // Hàm để giảm số lượng sản phẩm
  const decreaseQuantity = (key) => {
    setCart(cart.map(item => item.key === key && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
    ));
  };

  // Tính tổng tiền
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0).toFixed(2);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Screen_02")}>
          <Image source={require('../assets/Data/Image_183.png')} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, color: 'green', fontWeight: 'bold', marginVertical: 20 }}>My Basket</Text>

        {/* Hiển thị giỏ hàng */}
        <FlatList
          data={cart}
          keyExtractor={(item) => item.key.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.cartItemImage} resizeMode='contain' />
              <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>Price: ${item.price}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item.key)}>
                    <Image source={require('../assets/Data/Image_176.png')} style={styles.quantityIcon} />
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(item.key)}>
                    <Image source={require('../assets/Data/Image_175.png')} style={styles.quantityIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />

        {/* Tổng tiền */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>${calculateTotal()}</Text>
        </View>

        {/* Nút thanh toán */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Screen_01")}>
          <Text style={{ fontSize: 20, color: 'white' }}>Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  cartItemImage: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  itemPrice: {
    fontSize: 16,
    color: 'gray',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 18,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
  },
  totalText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 40,
    width: 240,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  }
});
