import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from './src/screens/Home';
import NovaPesquisa from './src/screens/NovaPesquisa';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import Coleta from './src/screens/Coleta';
import AgradecimentoPartic from './src/screens/AgradecimentoPartic';
import ModificarPesquisa from './src/screens/ModificarPesquisa';


const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name="Home" component={Home} />
            <DrawerNavigator.Screen name="NovaPesquisa" component={NovaPesquisa} />
            <DrawerNavigator.Screen name="AcoesPesquisa" component={AcoesPesquisa} />
            <DrawerNavigator.Screen name="Coleta" component={Coleta} />
            <DrawerNavigator.Screen name="AgradecimentoPartic" component={AgradecimentoPartic} />
            <DrawerNavigator.Screen name="ModificarPesquisa" component={ModificarPesquisa} />
        </DrawerNavigator.Navigator>
    );
}

export default Drawer;