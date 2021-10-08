import { createNativeStackNavigator, createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import IncomeScreen from "./screens/IncomeScreen";
import AddIncome from "./screens/AddIncome";
import ExpensesScreen from "./screens/ExpensesScreen";
import AddExpenses from "./screens/AddExpenses";
import SettingsScreen from "./screens/SettingsScreen";
import StatisticsScreen from "./screens/StatisticsScreen";
import TabsScreen from "./screens/TabsScreen";

const screens = {
    Login:{
        screen: LoginScreen,
        navigationOptions:{
            title:''
        }
    },
    Signup:{
        screen:SignUpScreen
    },
    Dashhome:{
        screen:TabsScreen,
        navigationOptions:{
            title:'Welcome to myFinApp',
            headerLeft: ()=> null
        }

    },
    Main:{
        screen:HomeScreen,
     
    },
    Income:{
        screen:IncomeScreen
    },
    AddIncome:{
        screen:AddIncome
    },
    Expenses:{
        screen:ExpensesScreen
    },
    AddExpenses:{
        screen:AddExpenses
    },
    Stack:{
        screen:StatisticsScreen
    },
    Settings:{
        screen:SettingsScreen
    }


}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);