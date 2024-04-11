import { StyleSheet, Text, View } from 'react-native';

export default function ProductSpecificationsPage({ product }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerDescription}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>R$ {product.price}</Text>
        <View style={styles.specificationsContainer}>
          {Object.entries(product.technicalSpecifications).map(([key, value]) => (
            <View key={key} style={styles.specificationItem}>
              <Text style={styles.specificationTitle}>{key}:</Text>
              <Text>{value}</Text>
            </View>
          ))}
        </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  specificationsContainer: {
    marginTop: 10,
  },
  specificationItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  specificationTitle: {
    fontWeight: 'bold',
    marginRight: 5,
  },
});