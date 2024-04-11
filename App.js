import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import AppInfoPage from './src/pages/AppInfoPage';
import ProductDetailPage from './src/pages/ProductDetailPage';
import ProductsListPage from './src/pages/ProductsListPage';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={Routes.ProductListPage} component={ProductsListPage} />
        <Drawer.Screen name={Routes.AppInfoPage} component={AppInfoPage} />
        <Drawer.Screen 
          name={Routes.ProductDetailPage} 
          component={ProductDetailPage} 
          options={{
            drawerItemStyle: {
              display: 'none'
            },
            drawerLabel: () => null
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}