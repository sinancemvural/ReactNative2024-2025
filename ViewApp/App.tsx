
import { SafeAreaView, View ,Text, Image,Button,Alert} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#FAF7F0',flexDirection:'row'}}>
      <View style={{flex:1,backgroundColor:'#F5EFFF',alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{backgroundColor:'white'}}>Oyuncu Kadrosu</Text>
        <Text>Gizem Örge</Text>
        <Text>Cansu Özbay</Text>
        <Text>Melisa Vargas</Text>
        <Text>Hande Baladın</Text>
        <Text>Aslı Kalaç</Text>
        <Text>İlkin Aydın</Text>
        <Text>Zehra Güneş</Text>
        <Text>Meliha Diken</Text>
        <Text>Elif Şahin</Text>
        <Text>Ebrar Karakurt</Text>
        <Text>Beyza Arıcı</Text>
        <Text>Derya Cebecioğlu</Text>
        <Text>Eda Erdem</Text>
      </View>
      <View style={{flex:1,backgroundColor:'#CDC1FF',justifyContent:'space-around'}}>
       <Image style={{height:150,width:150,borderRadius:75}} source={require('./assets/images/edaErdem.jpeg')}/>
       <Image style={{height:150,width:150,borderRadius:75}} source={require('./assets/images/melisa.jpeg')}/>
       <Image style={{height:150,width:150,borderRadius:75}} source={require('./assets/images/zehra.jpeg')}/>
      </View>
      <View style={{flex:1,backgroundColor:'#B17457'}}>
        <View style={{flex:1,justifyContent:'space-between'}}>
          <Button title='Puan Durumu' color='gray' onPress={()=>Alert.alert('Puan Durumu')}/>
          <Button title='Fikstür' color='gray'onPress={()=>Alert.alert('Fikstür')}/>
          <Button title='Maç Sonuçları' color='gray' onPress={()=>Alert.alert('Maç Sonuçları')}/>
        </View>
        <View>
          <Image source={require('./assets/images/logotvf.png')} style={{borderRadius:50,width:100,height:100,resizeMode:'contain'}}/>
        </View>
      </View>
    </SafeAreaView>
   /* <View style={{flex:1}}>
      <View style={{flex:1,backgroundColor:'#FAF7F0'}}></View>
      <View style={{flex:1,flexDirection:'row'}}>
          <View style={{flex:1,backgroundColor:'#E5D9F2'}}></View>
          <View style={{flex:1,backgroundColor:'#F5EFFF'}}></View>
          <View style={{flex:1,backgroundColor:'#CDC1FF'}}></View>
          <View style={{flex:1,backgroundColor:'#A594F9'}}></View>
      </View>
      <View style={{flex:1,backgroundColor:'#B17457'}}></View>
      <View style={{flex:1,backgroundColor:'#4A4947'}}></View>
    </View>*/
  );
}
