import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import NovaPesquisa from "./NovaPesquisa";
import AcoesPesquisa from "./AcoesPesquisa";
import Coleta from "./Coleta";
import AgradecimentoPartic from "./AgradecimentoPartic";
import ModificarPesquisa from "./ModificarPesquisa";


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