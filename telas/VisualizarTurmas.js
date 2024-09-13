import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";

export default function VisualizarTurmas(){
    return(
        <View style={{flex:1, padding:20, justifyContent:'center'}}>
        <Image source={require('../src/assets/brasaoEstadual.png')} style={{width:110, height:110, resizeMode:'contain', alignSelf:'center'}}/>
        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, color:'gray', marginTop:'3%'}}
        >Visualização das Turmas</Text>
        
            <View style={{backgroundColor:'#f2f2f2', 
                elevation:5, 
                justifyContent:'center', 
                marginTop:'10%', 
                padding:10, 
                borderRadius:9
                
                }}>
                    <Text style={{alignSelf:'center', color:'blue', fontWeight:'bold', fontSize:18}}>
                        Buscar turmas gerais</Text>

                    <Text style={{fontSize:15, color:'black', marginTop:'3%'}}>Escolha uma opção:</Text>
                <View style={{flexDirection:'row', justifyContent:"center", marginTop:'3%'}}>
                    <TouchableOpacity style={{backgroundColor:'blue', borderRadius:7, padding:5, width:'22%'}}>
                        <Text style={{color:'white', fontSize:16}}>1° Turno</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:'5%', backgroundColor:'blue', borderRadius:7, padding:5, width:'22%'}}>
                        <Text style={{color:'white', fontSize:16}}>2° Turno</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:'5%', backgroundColor:'blue', borderRadius:7, padding:5, width:'22%'}}>
                        <Text style={{color:'white', fontSize:16}}>3° Turno</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, color:'gray', marginTop:'12%'}}
        >Ou</Text>

<View style={{backgroundColor:'#f2f2f2', 
                elevation:5, 
                justifyContent:'center', 
                marginTop:'10%', 
                padding:10, 
                borderRadius:9
                
                }}>
                    <Text style={{alignSelf:'center', color:'blue', fontWeight:'bold', fontSize:18}}>
                        Buscar turmas com mais detalhes</Text>

                        <Text style={{fontSize:15, color:'black', marginTop:'3%'}}>Informe o numero da turma:</Text>
                        
                        <View style={{flexDirection:'row', padding:4}}>
                            <TextInput placeholder="Ex. 3000"
                            style={{marginTop:'2%',
                                backgroundColor:'white', 
                                borderWidth:1, 
                                borderColor:'#ccc', 
                                borderRadius:9,
                                elevation:2,
                                padding:1,
                                textAlign:'center',
                                width:'60%',
                                marginRight:'6%',
                                marginLeft:'2%'
                            }}
                            />
                            <TouchableOpacity style={{marginTop:'2%',
                                backgroundColor:'blue', 
                                borderRadius:9,
                                padding:4,
                                width:'30%',
                                alignItems:'center',
                                justifyContent:'center'
                                }}>
                                <Text style={{color:'white'}}>Buscar</Text>
                            </TouchableOpacity>
                        </View>
                </View>
                <TouchableOpacity style={{ marginTop: '9%', backgroundColor: 'gray', padding: 10, borderRadius: 9 }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Voltar</Text>
      </TouchableOpacity>
        </View>
    )
}