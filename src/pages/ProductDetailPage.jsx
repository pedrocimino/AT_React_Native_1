import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Routes from "../routes";
import ProductCommentsPage from "./ProductCommentsPage";
import ProductInfoPage from "./ProductInfoPage";
import ProductSpecificationsPage from "./ProductSpecificationsPage";
import VendorInfoPage from "./VendorInfoPage";
import ProductQuestionsPage from "./ProductQuestionsPage";

const Tab = createBottomTabNavigator();

export default function ProductDetailPage(props) {
  const { product } = props.route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={Routes.ProductInfoPage}>
        {() => <ProductInfoPage product={product} />}
      </Tab.Screen>
      <Tab.Screen name={Routes.ProductSpecificationsPage}>
        {() => <ProductSpecificationsPage product={product} />}
      </Tab.Screen>
      <Tab.Screen name={Routes.VendorInfoPage}>
        {() => <VendorInfoPage product={product} />}
      </Tab.Screen>
      <Tab.Screen name={Routes.ProductCommentsPage}>
        {() => <ProductCommentsPage product={product} />}
      </Tab.Screen>
      <Tab.Screen name={Routes.ProductQuestionsPage}>
        {() => <ProductQuestionsPage product={product} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
