import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View ,Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';

let names=[];
let mails=[];
let passwords=[];


export default function App() {
  const[result,setResult]=useState(' ');
  const[name,setName]=useState('');
  const[mail,setMail]=useState('');
  const[password,setPassword]=useState('');

  const userInfo=(name:String,mail:String,password:String)=>{

    names.push(name);
    mails.push(mail);
    passwords.push(password);
    
    setResult('Başarılı');
  
    return 0;
  }


  return (

    <View style={styles.container}>
      <View style={{flex:1,alignItems:'center',marginTop:50}}>
        <Image source={require('./assets/Images/Logo.png')} style={{height:'25%',width:'25%'}} />
      </View>
      <View style={{flex:2,alignItems:'center'}}>
          <Image source={require('./assets/Images/Main.png')} style={{height:'100%',width:'100%'}} resizeMode='contain' />
      </View>
      <View style={{flex:1,alignItems:'center'}}>
        <Text style={styles.yazi}>Create Account</Text>
      </View>
      <View style={{flex:5}}>
        <Text style={styles.yazi}>Full Name</Text>
        <TextInput value={name} onChangeText={setName} placeholder='Enter Full Name' style={styles.giris}/>

        <Text style={styles.yazi}>Email</Text>
        <TextInput value={mail} onChangeText={setMail} placeholder='Enter Your Name' style={styles.giris}/>

        <Text style={styles.yazi}>Password</Text>
        <TextInput value={password} onChangeText={setPassword} placeholder='Enter Your Password' style={styles.giris}/>

        <TouchableOpacity style={styles.buton} onPress={()=>{userInfo(name,mail,password)}}>
          <Text style={styles.butonYazi}>Sign-Up</Text>
        </TouchableOpacity>

        <Text style={styles.yazi}>{result}</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  giris:{
    height:50,
    width:'90%',
    margin:15,
    padding:15,
    borderWidth:2,
    borderRadius:25,
    borderColor:'gray',
    borderBlockColor:'hsl(90,19%,45%)'
  },
  yazi:{
    fontSize:20,
    fontWeight:'600',
    marginLeft:20,
  },
  buton:{
    height:50,
    width:'90%',
    borderRadius:25,
    backgroundColor:'hsl(90,19%,45%)',
    alignItems:'center',
    justifyContent:'center',
    margin:15,
  },
  butonYazi:{
    fontSize:20,
    fontWeight:'800',
    color:'#fff'
  }
});
