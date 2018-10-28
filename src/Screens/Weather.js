/*
Core
*/
import React from 'react';

import { 
  StyleSheet, 
  View, 
  Image, 
  Dimensions, 
  TextInput, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';

import {
  Container,
  Footer,
  FooterTab,
  Icon,
  Text,
  Button
} from 'native-base';


/*Secondary Components*/
import Selector from '../Components/Selector/Selector';

export default class Weather extends React.Component {

  static navigationOptions = {
    headerLeft: null,
    headerTitle: 'Weather'
  }

  render() {

    let index = 0;
    const data = 
        [
          {label: 'dummy data 1', value: '1', key: index++},
          {label: 'dummy data 2', value: '2', key: index++},
          {label: 'dummy data 3', value: '3', key: index++},
        ]
      

    return (
      <Container style={styles.container}>
        <ScrollView contentContainerStyle={styles.body}>
          <View style={styles.col}>
            <Text style={styles.titleText}>Project title</Text>
            <TextInput style={styles.inputText}/>
          </View>

          <View style={styles.col}>
            <Text style={styles.titleText}>Works Package</Text>
            <Selector items={data}/>
          </View>

          <View style={styles.col}>
            <Text style={styles.titleText}>Weather</Text>
            <View style={styles.row}>
              <Text style={styles.labelText}>AM</Text>
              <Selector items={data}/>  
            </View>
            <View style={styles.row}>
              <Text style={styles.labelText}>PM</Text>
              <Selector items={data}/>  
            </View>
          </View>

          <View style={styles.col}>
            <Text style={styles.titleText}>Site Hours</Text>
            <View style={styles.row}>
              <Text style={styles.labelText}>Start</Text>
              <Selector items={data}/>  
            </View>
            <View style={styles.row}>
              <Text style={styles.labelText}>Finish</Text>
              <Selector items={data}/>  
            </View>
          </View>

          <View style={styles.col}>
            <Text style={styles.titleText}>Overtime</Text>
            <View style={styles.row}>
              <Text style={styles.labelText}>Start</Text>
              <Selector items={data}/>  
            </View>

            <View style={styles.row}>
              <Text style={styles.labelText}>Finish</Text>
              <Selector/>
            </View>
          </View>

          <View style={styles.col}>
            <Text style={styles.titleText}>Non-Productive Overtime</Text>
            <View style={styles.row}>
              <Text style={styles.labelText}>Start</Text>
              <Selector items={data}/>  
            </View>

            <View style={styles.row}>
              <Text style={styles.labelText}>Finish</Text>
              <Selector items={data}/>  
            </View>
          </View>

          <Footer>
            <FooterTab>
              <Button onPress={() => {this.props.navigation.navigate('VisitorsAndOperatives')}} full>
                <Text>Visitors</Text>
                <Icon name="ios-arrow-forward"/>
              </Button>
            </FooterTab>
          </Footer>
        </ScrollView>

      </Container>
    );
  }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
   body:{
    maxHeight: height*3,
    justifyContent: 'space-between',
    alignItems: 'center',
   },

   row:{
    width: width*0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   },

   col:{
    margin: 20,
    alignItems: 'center',
   },


  titleText:{
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
   },

   labelText:{
    fontSize: 15,
    marginBottom: 10,
   },

   inputText: {
    height: 30, 
    width: width*0.8, 
    borderColor: 'gray', 
    borderWidth: 1, 
    borderRadius: 4
  },


});