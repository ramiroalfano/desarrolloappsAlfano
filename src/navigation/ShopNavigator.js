import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryClothesScreen from "../screens/CategoryClothesScreen";
import ClothesDetailScreen from "../screens/ClothesDetailScreen";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Clothes" component={CategoryClothesScreen} />
        <Stack.Screen name="Details" component={ClothesDetailScreen} />
    </Stack.Navigator>
    </NavigationContainer>
);
};