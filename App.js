import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

const App = () => {

  const [masters] = useState([
    { id: 1, fullname: "Jason Jafari" },
    { id: 2, fullname: "Sara RekabTalaei" },
    { id: 3, fullname: "Majid Bayati" },
    { id: 4, fullname: "Roy Jafari" },
    { id: 5, fullname: "Ali Mozafari" },
    { id: 6, fullname: "Majid Rostami" },
    { id: 7, fullname: "Rezvan Nozari" },
    { id: 8, fullname: "Mahdi Bayrami" },
    { id: 9, fullname: "Hamed NikMaram" },
    { id: 10, fullname: "Kamal Fatemi" },
    { id: 11, fullname: "Jason Jafari" },
    { id: 12, fullname: "Sara RekabTalaei" },
    { id: 13, fullname: "Majid Bayati" },
    { id: 14, fullname: "Roy Jafari" },
    { id: 15, fullname: "Ali Mozafari" },
    { id: 16, fullname: "Majid Rostami" },
    { id: 17, fullname: "Rezvan Nozari" },
    { id: 18, fullname: "Mahdi Bayrami" },
    { id: 19, fullname: "Hamed NikMaram" },
    { id: 20, fullname: "Kamal Fatemi" },
  ]);

  return (
    <View style={styles.container}>

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={masters}
        renderItem={({ item: m }) => (
          <View key={m.id}>
            <Text style={styles.card} >
              {m.fullname}
            </Text>
          </View>
        )}
      />


      {/* <ScrollView>
        {masters.map(master => (
          <View key={master.id}>
            <Text style={styles.card} >
              {master.fullname}
            </Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

export default App;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  card: {
    marginTop: 25,
    padding: 25,
    backgroundColor: "teal",
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
});