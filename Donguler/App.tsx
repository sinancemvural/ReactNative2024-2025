import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const  DegerDon = ()=>{
  let sayilar=[];
  console.log("For Döngüsü");
  for(let i=0;i<10;i++)
  {
    sayilar.push(Math.floor(Math.random()*100))
    console.log(sayilar[i]);
  }

  console.log("Map Döngüsü")
  sayilar.map((sayi,index)=>{console.log(sayi)});

  return null;
}
const Degerler=()=>{
  let sayilar=[];
  for(let a=0;a<25;a++)
  {
    sayilar.push(Math.floor(Math.random()*100));
  }

  return (
    <View style={{flexWrap:'wrap'}}>
      {
        sayilar.map((sayi,index)=>(
          <TouchableOpacity key={index} style={styles.kutucuklar} onPress={()=>console.log({sayi})}>
            <Text key={index}>{sayi}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )

}
export default function App() {
  let isimler=["Ali","Ahmet","Ayşe","Fatma","Veli","Mahmut"];
  return (
    <View style={styles.container}>
      <View> 
        <Text>{isimler[0]}</Text>
        <Text>{isimler}</Text>
        <Text>{DegerDon()}</Text>
      </View>
      <View>
        {Degerler()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kutucuklar:{
    height:25,
    width:75,
    margin:10,
    padding:2,
    borderWidth:2,
    borderColor:'#000',
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
  }
});
