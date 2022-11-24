import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { doc, setDoc, addDoc, collection, updateDoc, deleteDoc, getDoc, getDocs, query, where} from "firebase/firestore"; 
// import { db } from './screens/Config'

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from "./screens/Home";
// import Login from "./screens/Login";
// const Stack = createStackNavigator();

import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
const Stack = createNativeStackNavigator();

import Logincontent from './Screens/components/Logincontent';
import Registercontent from './Screens/components/Registercontent';
import Threehome from './Screens/components/Threehome';
import Person from './Screens/components/Person';

export default function App() {
  const [ username, setName ] = useState('')
  const [ email, setEmail ] = useState('')

  // function create () {


    // 新增-預設data名稱
    // setDoc(doc(db, "users", "LA"), {
    //   username: username,
    //   email: email,
    // }).then(() => {
    //   console.log('data submitted');
    // }).catch((error) => {
    //   console.log(error);
    // });;

    //新增且不指定
    // addDoc(collection(db, "users"), {
    //   username: username,
    //   email: email,
    // }).then(() => {
    //   console.log('data submitted');
    // }).catch((error) => {
    //   console.log(error);
    // });;

    // 更新刪除
    // updateDoc(doc(db, "users",'LA'), {
    //   username: username,
    //   email: email,
    // }).then(() => {
    //   console.log('data submitted');
    // }).catch((error) => {
    //   console.log(error);
    // });;

    // deleteDoc(doc(db, "users", 'LA'));

    //取值-預設data名稱
    // getDoc(doc(db, "users", "LA")).then((docData) => {
      
    //   if(docData.exists()) {

    //     console.log(docData.data());
    //     setName(docData.data().username);
    //     setEmail(docData.data().email);

    //   } else {
    //     console.log('No such a data!!');
    //   }


    // }).catch((error) => {
    //   console.log(error);
    // });;


    // 取全部資料
    // getDocs(collection(db, "users")).then(docSnap => {
    //   let users=[];
    //   docSnap.forEach((doc) => {
    //     users.push({...doc.data(), id:doc.id })
    //   });
    //     console.log("Document data:", users);
    //   });

    //用where尋找
    // getDocs(query(collection(db, "users"),where('email','==','Admin@gmail.com'))).then(docSnap => {
    //   let users=[];
    //   docSnap.forEach((doc) => {
    //     users.push({ ...doc.data(), id:doc.id })
    //   });
    //     console.log("Document data:", users[0].username);
    //   });




     // };

  return (
      
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="Three" component={Threehome} />
          <Stack.Screen options={{ headerShown: false}} name="Login" component={Logincontent} />
          <Stack.Screen options={{ headerShown: false}} name="Register" component={Registercontent} />
          <Stack.Screen options={{ headerShown: false}} name="Person" component={Person} />
          <Stack.Screen options={{ headerShown: false}} name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>





      //    <View style={styles.container}>
      //   <Text>Firebase crud!</Text>

      //   <TextInput value={username} onChangeText={(username) => {setName(username)}}  placeholder='Username' style={styles.textBoxes}></TextInput>
      //   <TextInput value={email} onChangeText={(email) => {setEmail(email)}} placeholder='Email' style={styles.textBoxes}></TextInput>
      //   <Button onPress={create} title="Submit Data">Submit Data</Button> 
      // </View>


    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Login"
    //     screenOptions={{
    //       headerTitleAlign: 'center',
    //       headerStyle: {
    //         backgroundColor: '#0080ff'
    //       },
    //       headerTintColor: '#ffffff',
    //       headerTitleStyle: {
    //         fontSize: 25,
    //         fontWeight: 'bold'
    //       }
    //     }}
    //   >
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes: {
    width:'90%',
    fontSize:18,
    padding:12,
    borderColor:'gray',
    borderWidth:0.2,
    borderRadius:10,
  },
});
