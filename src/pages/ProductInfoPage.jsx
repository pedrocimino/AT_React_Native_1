import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export default function ProductInfoPage({ product }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image style={styles.cardImage} source={{uri: product.image}} />
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>R$ {product.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  containerDescription: {
    maxWidth: '80%',
    paddingHorizontal: 20,
  },
  cardImage: {
    width: 300,
    height: 250,
    marginBottom: 8,
    borderRadius: 8,
  },
  containerImg: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});