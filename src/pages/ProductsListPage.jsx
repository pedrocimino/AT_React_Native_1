import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import ListContainer from "../containers/ListContainer";


export default function ProductListPage() {
  const url = 'https://projeto-react-native-1-default-rtdb.firebaseio.com/products.json'
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const convertedProducts = converter(data);
        setProducts(convertedProducts);
      })
      .catch((error) => console.error("Erro ao carregar produtos:", error))
      .finally(() => setIsLoading(false));
  }, []);

  function converter(data) {
    const ids = Object.keys(data);
    const objs = Object.values(data);
    return objs.map((obj, i) => {
      return { id: ids[i], ...obj };
    });
  }

  return (
    <>
      {isLoading ? (
          <View style={styles.loadingContainer}>
              <ActivityIndicator/>
          </View>
      ) : (
        <>
          <View style={styles.container}>
            <ListContainer products={products}/>
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});