import React, { useState } from 'react';
import { TouchableOpacity,StyleSheet , View} from 'react-native';
import {Text, Button} from  'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import TabsScreen from './TabsScreen';
import {NavigationContainer} from '@react-navigation/native';
import { Alert } from 'react-native';
import SignUpScreen from './SignUpScreen';
import {Auth, firebase, firestore} from '../firebase/fire';
import { SigninUser } from '../AppService';



const LoginScreen = ({navigation})=> {

    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');
    const [error,setError] = useState('');




    const pressHandler = () => {
       
        SigninUser(email,password).then((data)=> {
            navigation.navigate('Dashhome'); 
        }).catch( error => {
            alert(error);
        });
    }

    const pressSignUpHandler = () => {
        navigation.navigate('Signup'); 
    }

    return <>

     <Text style={styles.titleText}>
           myFinApp {'\n'}
        </Text>

    <View style={styles.container}>
        <Input
        label="Email"
        value = {email}
        onChangeText={setEmail}
        />
        <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
        {
            error?
            <Text style={{color: 'red'}}>{error}</Text>
            :null
        }

        <Button title="Login" onPress={pressHandler}/>

       

        <TouchableOpacity  onPress={pressSignUpHandler}>
            <Text>Create new account?</Text>
        </TouchableOpacity>
        </View>
    </>

};

const styles = StyleSheet.create({

    titleText:{
        fontSize:30,
        fontWeight:"bold",
        padding:18,
        paddingTop:100,
        textAlign:'center'
    },
    container:{
        flex:1,
        padding:18,
        paddingTop:5

    },
    addcontainer:{
      flex:1,
      padding:18,
      paddingTop:35

  },
    text: { margin: 6 },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' }
}
);


export default LoginScreen;