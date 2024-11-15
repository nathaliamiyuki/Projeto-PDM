import { createDrawerNavigator } from "@react-navigation/drawer";
import AcoesPesquisa from './AcoesPesquisa';

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name="AcoesPesquisa" component={AcoesPesquisa} />
        </DrawerNavigator.Navigator>
    );
}

export default Drawer;