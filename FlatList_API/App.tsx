import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

// Gösterilecek verilerin olduğu dizi
const sehirler = [
  { id: '1', ad: 'İstanbul' },
  { id: '2', ad: 'Adıyaman' },
  { id: '3', ad: 'Afyonkarahisar' },
  { id: '4', ad: 'Ağrı' },
  { id: '5', ad: 'Amasya' },
  { id: '6', ad: 'Ankara' },
  { id: '7', ad: 'Antalya' },
  { id: '8', ad: 'Artvin' },
  { id: '9', ad: 'Aydın' },
  { id: '10', ad: 'Balıkesir' },
  { id: '11', ad: 'Bilecik' },
  { id: '12', ad: 'Bingöl' },
  { id: '13', ad: 'Bitlis' },
  { id: '14', ad: 'Bolu' },
  { id: '15', ad: 'Burdur' },
  { id: '16', ad: 'Bursa' },
  { id: '17', ad: 'Çanakkale' },
  { id: '18', ad: 'Çankırı' },
  { id: '19', ad: 'Çorum' },
  { id: '20', ad: 'Denizli' },
  { id: '21', ad: 'Diyarbakır' },
  { id: '22', ad: 'Düzce' },
  { id: '23', ad: 'Edirne' },
  { id: '24', ad: 'Elazığ' },
  { id: '25', ad: 'Erzincan' },
  { id: '26', ad: 'Erzurum' },
  { id: '27', ad: 'Eskişehir' },
  { id: '28', ad: 'Gaziantep' },
  { id: '29', ad: 'Giresun' },
  { id: '30', ad: 'Gümüşhane' },
  { id: '31', ad: 'Hakkari' },
  { id: '32', ad: 'Hatay' },
  { id: '33', ad: 'Iğdır' },
  { id: '34', ad: 'Isparta' },
  { id: '35', ad: 'İstanbul' },
  { id: '36', ad: 'İzmir' },
];

// Her bir şehir öğesini ekranda gösterecek fonksiyon
/*const renderSehir = ({ item }) => (
  <View style={styles.sehirKutusu}>
    <Text style={styles.sehirAdi}>{item.ad}</Text>
  </View>
);*/

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.baslik}>Türkiye'nin Büyük Şehirleri</Text>
      {sehirler.map((item)=>{
        return(
          <View style={styles.sehirKutusu}>
              <Text style={styles.sehirAdi}>{item.ad}</Text>
          </View>
        )
      })}
      {/*<FlatList
        data={sehirler} // Gösterilecek veriyi (diziyi) belirtiyoruz
        renderItem={renderSehir} // Her bir öğeyi nasıl göstereceğimizi belirten fonksiyon
        keyExtractor={(item) => item.id} // Her bir öğeye benzersiz bir anahtar sağlıyoruz
      />*/}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  baslik: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sehirKutusu: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    alignItems:'center'
  },
  sehirAdi: {
    fontSize: 18,
  },
});