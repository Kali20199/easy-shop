import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import agent from './agent/agent';
import { Category } from './Models/CategoryModel';

export default function App() {



  const fetchFromEpress=async()=>{
 
    const category = new Category("Cloth","nothin","red")
  const users =   await agent.Category.Add(category)
  
  return users
  }


  useEffect(()=>{
    fetchFromEpress()

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
