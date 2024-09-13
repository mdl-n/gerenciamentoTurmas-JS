import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();

  return (
    <View style={{flex:1, padding:15,justifyContent:'center', alignContent:'center'}}>
      <Image source={require('../src/assets/brasaoEstadual.png')} style={{width:110, height:110, resizeMode:'contain', alignSelf:'center'}}/>
      <Text style={{alignSelf:'center', fontSize:20, fontWeight:'bold', marginTop:20, color:'gray'}}>Tela de Login</Text>

      <Text style={{marginTop:'15%', marginBottom:'-3%', color:'gray', fontWeight:'bold'}} >E-Mail</Text>
      
      <TextInput 
  placeholder="Informe o E-Mail"
  style={{
    marginTop: '5%', 
    padding: 7,
    height:'5%',
    backgroundColor: '#f2f2f2', // Remova um "#" extra
    borderRadius: 7, 
    borderColor: '#ccc',
    borderWidth: 1,
    
    // Propriedades de sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    // Propriedade de elevação para Android
    elevation: 5
  }}
  placeholderTextColor={'gray'}
/>

      <TextInput placeholder="Informe a senha" 
      style={{marginTop:'5%', 
      padding:7,
      height:'5%',
      backgroundColor:'#f2f2f2', 
      borderWidth:1,
      borderColor:'#ccc',
      borderRadius:7, elevation:5}} placeholderTextColor={'gray'}
      />
      
      <TouchableOpacity style={{ marginTop: 30, backgroundColor: 'blue', padding: 10, borderRadius: 9 }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{marginTop:20, alignItems:'center'}}> 
        <Text style={{ color: 'black', textDecorationLine: 'underline', fontSize:15 }}>
          Esqueceu sua senha?
        </Text>
      </TouchableOpacity>

      <View style={{flexDirection:'row', marginTop:5, alignSelf:'center'}}>
        <Text style={{fontSize:16}}>Ainda não tem conta? </Text>
        
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text style={{color:'blue', fontWeight:'bold', fontSize:16}}>Clique aqui</Text>
        </TouchableOpacity>
      </View>
      
      
    </View>
  );
}
