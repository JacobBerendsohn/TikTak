import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import PostDetails from "../screens/postDetails";

const Stack = createStackNavigator();

const HomeNav = () => {

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen 
                name="Home"
                component={ Home }
            />
            <Stack.Screen 
                name="PostDetails"
                component={ PostDetails }
            />
        </Stack.Navigator>
    );
}

export {HomeNav};