import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen';
import IncomeScreen from './IncomeScreen';
import ExpensesScreen from './ExpensesScreen';
import SettingsScreen from './SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import StatisticsScreen from './StatisticsScreen';
import {BackHandler} from 'react-native';


const Tab = createMaterialBottomTabNavigator();



const TabsScreen = () => {


    
    return (
        <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#f0ffff"
        barStyle={{ backgroundColor: 'cornflowerblue' }}>

            <Tab.Screen name="Home" component={ HomeScreen} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
              }}
            />
            <Tab.Screen name="Income" component={IncomeScreen}
                options={{
                    tabBarLabel: 'Income',
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="contract-outline" color={color} size={26} />
                    ),
                }}
            
            
            />
            <Tab.Screen name="Expenses" component={ExpensesScreen}
            options={{
                tabBarLabel: 'Expenses',
                tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="expand" color={color} size={26} />
                ),
            }}
            />
            <Tab.Screen name="Statistics" component={StatisticsScreen}
            options={{
                tabBarLabel: 'Statistics',
                tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="podium" color={color} size={26} />
                ),
            }}
            
            />
            <Tab.Screen name="Settings" component={SettingsScreen}
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="settings" color={color} size={26} />
                ),
            }}
            
            />

        </Tab.Navigator>

       

);

}

export default TabsScreen;