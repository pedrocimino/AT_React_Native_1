import { Scrollview, Text, StyleSheet } from 'react-native';

export default function AppInfoPage() {
  return (
    <Scrollview style={styles.container}>
      <Text style={styles.appInfo}>Sobre o App</Text>
      <Text style={styles.version}>Version: 1.0.0</Text>
      <Text style={styles.developer}>Developer: Pedro Cimino</Text>
      <Text style={styles.contact}>Contato: dev@contato.com</Text>
    </Scrollview>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    appInfo: {
      fontSize: 24, fontWeight: 'bold'
    },
    version: {
      marginVertical: 10 
    },
    developer: {
      marginVertical: 10 
    },
    contact: {
      marginVertical: 10 
    },
  }
);