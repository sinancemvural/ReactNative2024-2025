
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={{flex:1,backgroundColor:'#FAF7F0'}}></View>
      <View style={{flex:1,flexDirection:'row'}}>
          <View style={{flex:1,backgroundColor:'#E5D9F2'}}></View>
          <View style={{flex:1,backgroundColor:'#F5EFFF'}}></View>
          <View style={{flex:1,backgroundColor:'#CDC1FF'}}></View>
          <View style={{flex:1,backgroundColor:'#A594F9'}}></View>
      </View>
      <View style={{flex:1,backgroundColor:'#B17457'}}></View>
      <View style={{flex:1,backgroundColor:'#4A4947'}}></View>
    </View>
  );
}
