import { StatusBar } from 'expo-status-bar';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import agent from './agent/agent';
import { CategoryModel } from './Models/CategoryModel';
import { useStore } from './store/store';


export  function App() {

  const {productStore} = useStore()


  // const fetchFromEpress=async()=>{
 
  //   const category = new CategoryModel("Cloth","nothin","red")
  // const users =   productStore.getAllProducts(category)
  //  // fsdsdf
  // return users
  // } 


  useEffect(()=>{
    // fetchFromEpress()

  },[])
  
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
 

export default  observer(App)