import React from 'react';
import AppStackNavigator from './src/Components/Navigation/Navigator';

import { 
  SafeAreaView 
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
         <AppStackNavigator/>
      </SafeAreaView>
    );
  }
}


