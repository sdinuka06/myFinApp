import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { Alert,StyleSheet,View, Dimensions  } from 'react-native';
import {Text, Button} from  'react-native-elements'
import {firestore} from '../firebase/fire';
import {
    LineChart,
    PieChart
  } from 'react-native-chart-kit';


const HomeScreen = ()=> {

    const [income, setIncome] = useState('');
    const [expenses, setExpenses] = useState('');
    const [incomeAmount, setIncomeAmount] = useState('');
    const [expensesAmount, setExpensesAmount] = useState('');

   
    var IncomeAmt="";
    var  intext ="";
    var ExpAmt="";
    var expext ="";


     firestore().collection('FinData').doc('Income').get().then((documentSnapshot => {
       // console.log(documentSnapshot.get('Amount')); 
       IncomeAmt = documentSnapshot.get('Amount');
      intext = 'Income Amount: Rs. '+IncomeAmt;

     setIncome(intext);
     setIncomeAmount(IncomeAmt);
       
     }));


     firestore().collection('FinExpenses').doc('Expenses').get().then((documentSnapshot => {
        // console.log(documentSnapshot.get('Amount')); 
        ExpAmt = documentSnapshot.get('Amount');
        expext = 'Expenses Amount: Rs. '+ExpAmt;
 
        setExpenses(expext);
        setExpensesAmount(ExpAmt);
        
      }));
   

   

    return <>
   
    
     <Text style={styles.titleText}>
          Hello sdinuka06@gmail.com,{'\n'}
        </Text>
       
        <Text>Here is the summary of your Account. {'\n'}</Text>
            
           <Text>{income}{'\n'}</Text>
           <Text>{expenses}</Text>

           <View>
           <Text style={styles.header}>Income/Expenses Forcast in Rs.</Text>
      <PieChart
        data={[
          {
            name: 'Income (Rs.)',
            population: 200,
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Expenses (Rs.)',
            population: 50,
            color: '#F00',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          }
          
        ]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />

           </View>
      
        

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


export default HomeScreen;