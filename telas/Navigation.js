
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./Login";
import Cadastro from "./Cadastro";
import OpcoesMenu from "./OpcoesMenu";
import VisualizarTurmas from "./VisualizarTurmas";
import GerenciamentoTurmas from "./GerenciamentoTurmas";
import AddTurma from "./AddTurma";

export default function Navigation(){

    const Stack =createNativeStackNavigator();

    return (
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name ="AddTurma" component = {AddTurma} />
            <Stack.Screen name ="GerenciamentoTurmas" component ={GerenciamentoTurmas} />
            <Stack.Screen name ="VisualizarTurmas" component ={VisualizarTurmas} />
            <Stack.Screen name ="OpcoesMenu" component ={OpcoesMenu} />
            <Stack.Screen name ="Login" component ={Login} />
            <Stack.Screen name = "Cadastro" component={Cadastro}/>
          </Stack.Navigator>
      );
}