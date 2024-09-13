import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function OpcoesMenu(){
    return(
        <View style={{flex:1, padding:20, justifyContent:'center'}}>
            
        <Image source={require('../src/assets/brasaoEstadual.png')} style={{width:110, height:110, resizeMode:'contain', alignSelf:'center'}}/>
        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, color:'gray', marginTop:'3%'}}>Opções do Menu</Text>
        
        <Text style={{fontSize:16, color:'white', textAlign:'center', padding:4, color:'blue', fontWeight:'bold', marginTop:'15%'}}>
                    Escolha uma das opções:
                </Text>
        <View style={{flexDirection:'row', marginTop:'7%', maxWidth:'50%', alignSelf:'center', justifyContent:'center'}}>
            <TouchableOpacity style={{backgroundColor:'blue', 
                justifyContent:'center', 
                height:90, 
                borderRadius:9,
                elevation:5,
                shadowOpacity:5
                }}>
                <Text style={{fontSize:16, color:'white', textAlign:'center', padding:4}}>
                    Visualizar turmas liberadas
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:'blue', 
            justifyContent:'center', 
            marginLeft:'12%', 
            height:90, 
            borderRadius:9,
            elevation:5,
            shadowOpacity:50
            }}>
                <Text style={{fontSize:16, color:'white', textAlign:'center', padding:4}}>
                    Gerenciamento de Turmas
                </Text>
            </TouchableOpacity>

        </View>

        <TouchableOpacity style={{ marginTop: '25%', backgroundColor: 'gray', padding: 10, borderRadius: 9 }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Voltar</Text>
      </TouchableOpacity>
        </View>
    )
}