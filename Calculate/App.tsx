
import { useState } from 'react';
import { SafeAreaView, View ,Text, Image,Button,Alert, TextInput,StyleSheet, TouchableOpacity} from 'react-native';

export default function App() {
  let randomSayi=Math.floor(Math.random()*100);
  const[sayiBir,setSayiBir]=useState();
  const[sayiIki,setSayiIki]=useState();
  return (
    <SafeAreaView style={styles.container}>
      <TextInput value={sayiBir} onChangeText={setSayiBir} placeholder='Sayi Gir...' style={styles.giris}/> 
      <TextInput value={sayiIki} onChangeText={setSayiIki} placeholder='Sayi Gir...' style={styles.giris}/>
     
      <TouchableOpacity onPress={()=>console.log(Number(sayiBir)+Number(sayiIki))} style={styles.buton}>
        <Text style={styles.karakter}>+</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>console.log(Number(sayiBir)-Number(sayiIki))} style={styles.buton}>
        <Text style={styles.karakter}>-</Text>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={()=>console.log(Number(sayiBir)*Number(sayiIki))} style={styles.buton}>
        <Text style={styles.karakter}>*</Text>
      </TouchableOpacity>
    
      <TouchableOpacity onPress={()=>console.log(Number(sayiBir)/Number(sayiIki))} style={styles.buton}>
        <Text style={styles.karakter}>/</Text>
      </TouchableOpacity>
      <Text>Rastgele Sayi:{randomSayi}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(20, 100%, 90%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  giris:{
    width:'75%',
    height:50,
    borderRadius:45,
    borderWidth:1,
    borderColor:"hsl(20, 100%, 62%)",
    margin:15,
    padding:15,
  },
  buton:{
    width:'75%',
    height:50,
    borderRadius:45,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"hsl(20, 100%, 62%)",
    margin:15,
  },
  karakter:{
    fontSize:18,
    fontWeight:'bold',
    color:'hsl(20, 100%, 90%)',
  }
});
