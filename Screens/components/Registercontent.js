// import React from "react";
// import { StyleSheet, StatusBar, View } from "react-native";
// import Header from "../components/Header";
// import Registercontent from "../components/Registercontent";

import Header2 from "./Header2";

import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View, Image, SafeAreaView, ScrollView } from "react-native";

import { auth } from "../../firebase";


const Registercontent = () => {
    // return(
      
    //   <View style={styles.container}>
    //   <Header2 title="註冊"/>
      
    //   <Registercontent />
    //   </View>
       
    // );
    

    // auth Start

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const navigation = useNavigation()
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
            // navigation.replace("Person");
            // navigation('Person', { uid: user.uid })
            
            console.log(user.uid);
            navigation.navigate("Person", {
                uid: user.uid,
            });
        }
        })
    
        return unsubscribe
    }, [])


    const handleSignUp = () => {
        auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
    }


    // const handleLogin = () => {
    //     auth
    //     .signInWithEmailAndPassword(email, password)
    //     .then(userCredentials => {
    //         const user = userCredentials.user;
    //         console.log('Logged in with:', user.email);
    //     })
    //     .catch(error => alert(error.message))
    // }


    //auth END






    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
        <Header2 title="註冊"/>
        
        <ScrollView style={{ content: "center", marginTop: 45, }}>
  
        <View style={styles.container}>
          <Text style={styles.textstyle2}>帳號</Text>
          <View style={styles.sectionStyle}>
  
            <Image
              source={require('../image/user.png')}
              style={styles.imageStyle}
            />
            {/* <TextInput
              style={{ flex: 1 }}
  
              underlineColorAndroid="transparent"
            /> */}

            <TextInput
                placeholder="Email"    
                value={ email }
                onChangeText={ text => setEmail(text)}
                style={{flex: 1}}
                // style={styles.input}
            />
          </View>

          {/* <Text style={styles.textstyle}>暱稱</Text>
          <View style={styles.sectionStyle}>
  
            <Image
              source={require('../image/nickname.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Nickname"  
            //   underlineColorAndroid="transparent"
            />
          </View> */}

          <Text style={styles.textstyle}>密碼</Text>
          <View style={styles.sectionStyle}>
  
            <Image
              source={require('../image/passwordicon.png')}
              style={styles.imageStyle}
            />
            {/* <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
            /> */}

            <TextInput
                placeholder="Password"    
                value={ password }
                onChangeText={ text => setPassword(text)}
                // style={styles.input}
                style={{flex: 1}}
                secureTextEntry
            />
          </View>
          <Text style={styles.textstyle5}>確認密碼</Text>
          <View style={styles.sectionStyle}>
  
            <Image
              source={require('../image/passwordicon.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Confirm Password" 
            //   underlineColorAndroid="transparent"
              secureTextEntry
            />
          </View>
  
        </View>
        <View style={styles.sectionStyle2}>
  
        <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
        >
            <Image
              source={require('../image/signin_finish.png')}
              style={styles.imageStyle2}
            />
          </TouchableOpacity>
  
        </View>
        <View style={styles.sectionStyle3}>
          <Image
            source={require('../image/shortyellow.png')}
            style={styles.yellowlineleft}
          />
          <Text style={styles.textstyle4}> or </Text>
          <Image
            source={require('../image/shortyellow.png')}
            style={styles.yellowlineRight}
          />
        </View>
        <View style={styles.sectionStyle4}>
          <Image
            source={require('../image/Google.png')}
          />
          <Image
            source={require('../image/Facebook.png')}
          />
          <Image
            source={require('../image/Twitter.png')}
          />
        </View>
        <Image
          source={require('../image/Signin-Bottom-Bear.png')}
        />
      </ScrollView>
      </View>
    )
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    sectionStyle4: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      margin: 7,
    },
    sectionStyle3: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 15,
      margin: 10,
    },
    sectionStyle2: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      margin: 10,
    },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CDE49C',
      borderColor: '#000',
      height: 48,
      width: 278,
      borderRadius: 15,
      margin: 10,
    },
    imageStyle: {
      // padding: 10,
      margin: 12,
      height: 24,
      width: 24,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
    imageStyle2: {
      padding: 10,
      margin: 5,
      height: 48,
      width: 132,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
    yellowlineleft: {
  marginLeft:30,
    },
    yellowlineRight: {
      marginRight:30,
    },
    textstyle: {
      marginRight: 240,
      marginTop: 10,
      fontSize: 16,
      color: "#62935F",
      fontWeight: "bold",
    },
    textstyle2: {
      marginRight: 240,
      marginTop: 10,
      fontSize: 16,
      color: "#62935F",
      fontWeight: "bold",
    },
    textstyle3: {
      marginLeft: 190,
      marginTop: 10,
      fontSize: 14,
      color: "#705A31",
    },
    textstyle4: {
      fontSize: 16,
      color: "#705A31",
    },
    textstyle5: {
      marginRight: 210,
      marginTop: 10,
      fontSize: 16,
      color: "#62935F",
      fontWeight: "bold",
    },
  });
  
  export default Registercontent;