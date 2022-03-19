import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import agent from './agent/agent';

export default function App() {



  const fetchFromEpress=async()=>{
 
  const users =   await agent.Users.getAll()
  
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
