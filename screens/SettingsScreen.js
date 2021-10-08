import React, { useState } from 'react';
import {Text} from  'react-native-elements';
import {firestore} from '../firebase/fire';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { SignOut } from '../AppService';

const SettingsScreen = ({navigation})=> {

    const [FNameInfo, setFName] = useState('');
    const [LNameInfo, setLName] = useState('');
    const [EmailInfo, setEmailInfo] = useState('');

    var FirstName="";
    var  LastName ="";
    var Email="";

    var FirstNameDesc;
    var LastNameDesc;
    var EmailDesc;


    const pressHandler = () => {
       
      SignOut().then((data)=> {
        navigation.navigate('Login'); 
        }).catch( error => {
            alert(error);
        });
    }


    firestore().collection('FinUsers').doc('Users').get().then((documentSnapshot => {
        FirstName = documentSnapshot.get('FirstName'),
        LastName = documentSnapshot.get('LastName'),
        Email = documentSnapshot.get('Email')

        FirstNameDesc = 'First Name: '+FirstName;
        LastNameDesc = 'Last Name: '+LastName;
        EmailDesc = 'Registed Email: '+Email;


        setFName(FirstNameDesc);
        setLName(LastNameDesc);
        setEmailInfo(EmailDesc);
    }));


   return<>
   <Text style={styles.titleText}>Settings</Text>
    <Text style={styles.header}>Your Account Settings.{'\n'}</Text>
           <Text>{FNameInfo}{'\n'}</Text>
           <Text>{LNameInfo}{'\n'}</Text>
           <Text>{EmailInfo}{'\n'}</Text>

           <TouchableOpacity  onPress={pressHandler}>
            <Text>Log out</Text>
        </TouchableOpacity>
   </>
};

const styles = StyleSheet.create({

    titleText:{
        fontSize:20,
        fontWeight:"bold"
    },
    header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
    container:{
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


export default SettingsScreen;