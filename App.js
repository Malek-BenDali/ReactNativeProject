import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {
  LoginOrSignUp,
  Login,
  SignUp
} from './screens/connexion'
import Tabs from './navigation/TabBottomNavigation/Tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {icons} from './constants'
import { DrawerContent } from './navigation/DrawerContent'



const Drawer = createDrawerNavigator();


function LogoTitle() {
  return (
    <View style={{flex : 1, justifyContent: 'center', alignItems:'center', marginRight : 55}}>
      <Image
      style={{ width: 100, height: 100 }}
      source={icons.logoGold}
      />
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>  
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        initialRouteName={"Home"}
      >
        <Drawer.Screen 
          name="Login" 
          component={Login} 
          options={{ 
            headerTitle: props => <LogoTitle {...props} />, 
            headerStyle : { 
              height : 100,
            } 
          }}
        />
        <Drawer.Screen 
          name="Home"
          component={Tabs}
        />
        {/*<Drawer.Screen 
          name="LoginOrSignUp" 
          component={LoginOrSignUp}  
          options={{
            headerShown : false,
            
          }}
        />

        <Drawer.Screen 
          name="SignUp" 
          component={SignUp} 
        />*/}

        
        

      </Drawer.Navigator>
    </NavigationContainer>
  );
};
