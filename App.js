import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from './constants/Colors';
import Cover from './assets/images/grad-9.jpg';
import Week from './components/Week';
import Year from './components/Year';

const Home = () => {
    return (
        <View style={styles.container}>
            <ImageBackground 
              source={Cover} 
              style={styles.image}>
                <View style={styles.login}>
                    <Text style={styles.welcome}>Welcome</Text>
                </View>
            </ImageBackground> 
        </View>
    );
}

export default function App() {
    const Tab = createBottomTabNavigator();

    return (
      <NavigationContainer>
          <Tab.Navigator
            initialRouteName='Home'
            backBehavior='history'
          >
              <Tab.Screen name="GoBabyGo" component={Home} 
                options={{
                  title: '',
                  headerTransparent: true
                }}
              />
              <Tab.Screen name="Week" component={Week} 
                options={{
                  headerStyle: {
                    // backgroundColor: Colors.paleGrey,
                  },
                  // headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Tab.Screen name="Year" component={Year} />
          </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    width: '100%'
  },
  login: {
    marginLeft: 40,
  },
  welcome: {
    color: '#546ccf',
    fontSize: 35,
    fontWeight: 'bold'
  }
});