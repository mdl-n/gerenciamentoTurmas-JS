import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

export default function AddTurma(){
    return (
        <View style={{flex:1, justifyContent:'center', padding:20}}>
            <Image source={require('../src/assets/brasaoEstadual.png')} style={{width:110, height:110, resizeMode:'contain', alignSelf:'center'}}/>
            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, color:'gray', marginTop:'3%'}}
            >Adicionar Turmas</Text>
            <View style={{padding:10, backgroundColor:'#f2f2f2',elevation:5, marginTop:"10%", borderRadius:9,
                shadowRadius:3,
                borderWidth:1,
                borderColor:'#ccc'
            }}>
                     
                    <Text style={{alignSelf:'center', color:'blue', fontWeight:'bold', fontSize:18}}>
                        Informe o turno da turma:</Text>

                    <View style={{flexDirection:'row', justifyContent:"center", marginTop:'3%', padding:3}}>
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

                <Text 
            style={{
                fontSize:16,
                color:'gray',
                fontWeight:'bold',
                marginTop:'9%'
            }}
            >Digite o numero da turma:</Text>

            <TextInput
            style={{
                borderWidth:1,
                padding:3,
                height:30,
                borderColor:'#ccc',
                borderRadius:9,
                elevation:1,
                marginTop:'1%',
                backgroundColor:'white',

            }}
            placeholder='Ex. 3000' placeholderTextColor={'gray'}
            />
            </View>
            
        </View>   
    )
}         