import { StyleSheet, Text, View } from 'react-native';

export default function VendorInfoPage({ product }) {
  const { vendorData } = product

  return (
    <View style={styles.container}>
      <View style={styles.containerDescription}>
        <Text style={styles.title}>{vendorData.name}</Text>
        <Text>Email: {vendorData.email}</Text>
        <Text>Telefone: {vendorData.phone}</Text>
        <Text>Nota: {vendorData.rating}/5</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});