import React, { useState } from 'react';
import {Text,StyleSheet,View,TouchableOpacity, Alert} from  'react-native'
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import {TableWrapper,Table,Row,Rows,Col,Cols,Cell} from  'react-native-table-component';
import {firestore} from '../firebase/fire';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const ExpensesScreen = ()=> {
    const [indescription, setInDescription] = useState('');
    const [inAmount, setInAmount] = useState('');

    const incomeCollection = firestore().collection('FinExpenses');
    const [imageUri, setimageUri] = useState('');
   

     

    this.state = {
        HeadTable:['Expenses','Amount(Rs.)'],
        DataTable:[['Pay for Keels','50'],
                  ['Pay for Pickme','100']]
    }

    const pressAddIncomeHandler = () => {
      incomeCollection.add({
        Amount: inAmount,
        Description: indescription,
        User:'SDK',
        rowId:'1'
      });
      
      Alert.alert('New record Added.');
  };

//Camera
const openCamara = () => {
    const options = {
                    storageOptions: {
                    path: 'images',
                    mediaType: 'photo',
                                        },
                    includeBase64: true,
                    };
    
    launchCamera(options, response => {
                    console.log('Response = ', response);
                    if (response.didCancel) {
                    console.log('User cancelled image picker');
                    } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                    } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                    } else {
                    // You can also display the image using data:
                    const source = {uri: 'data:image/jpeg;base64,'+ response.base64};
                    setimageUri(source);
                    }
             });
        };

//Camera
  
  
    const state = this.state;
    const element = (data, index) => (
        <TouchableOpacity onPress={() => Alert.alert('This is row ${index + 1}')}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>button</Text>
          </View>
        </TouchableOpacity>
      );

    return <>
      
        <Text style={styles.titleText}>
           Expenses {'\n'}
        </Text>
       <Text>Please find the expenses you have entered in to the application {'\n'}</Text>

       <View style={styles.container}>
       <Table>  
          <Row data={state.HeadTable} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.DataTable} textStyle={styles.text}/>
       </Table>
       </View>

      <View style={styles.addcontainer}>
        <Text>Description: </Text>
          <TextInput
            placeholder='eg. Payment done for'
            value={indescription}
            onChangeText={setInDescription}
            />

        <Text>Amount: </Text>
          <TextInput
          placeholder = 'Amount'
          keyboardType='numeric'
          value = {inAmount}
          onChangeText={setInAmount}
          />
       </View>

       <Button 
        title="Add New"
        color="#f194ff"
        onPress={pressAddIncomeHandler}
        />
        <Text>
        </Text>

         <Button 
        title="Add as Image"
        color="#f194ff"
        onPress={openCamara}
        />
        <Text>
        {'\n'}
        </Text>

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

export default ExpensesScreen;