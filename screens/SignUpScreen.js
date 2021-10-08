import {Button} from  'react-native-elements';
import {Text,StyleSheet,View,TouchableOpacity, Alert} from  'react-native';
import { SignUpUsers } from '../AppService';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import Auth from '../firebase/fire';
import { data } from 'browserslist';
import { Input } from 'react-native-elements/dist/input/Input';

const SignUpScreen = ()=> {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname,setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    const signUp = () => {

        SignUpUsers(email,password).then((data)=> {
            alert(data)
        }).catch( error => {
            alert(error);
        });
    };

    return <> 
    <Text>Please create your Account</Text>
    <View style={styles.container}>
    <Text>First Name: </Text>
    <TextInput
    value = {firstname}
    onChangeText={setFirstName}
    />
    <Text>Last Name: </Text>
    <TextInput
    value = {lastname}
    onChangeText={setLastName}
    />
    <Text>Email: </Text>
    <TextInput
    value = {email}
    onChangeText={setEmail}
    />
    <Text>Password: </Text>
    <TextInput
     value={password}
     onChangeText={setPassword}
     secureTextEntry
    />

        <Text>
        {'\n'}
        </Text>

          <Button title="Register" onPress={signUp}/>

    </View>
    
    </>

};

const styles = StyleSheet.create({

    titleText:{
        fontSize:20,
        fontWeight:"bold"
    },
    container:{
        flex:1,
        padding:18,
        paddingTop:35

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


export default SignUpScreen;