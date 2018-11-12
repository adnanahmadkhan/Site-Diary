/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Button, StyleSheet } from 'react-native';

import { 
  Container, 
  Content, 
  Icon, 
  Picker, 
  Form, 
  List, 
  ListItem, 
  Label, 
  Text, 
  Left, 
  Right,
  Card 
} from "native-base";

import Selector from '../../Components/Selector/Selector';

export default class ManagementTeam extends Component {
  static navigationOptions = {
    headerTitle: 'Management Team'
  }

  constructor(props){
    super(props);
    this.state = {
      allVisitors: 
      [
        {
          quantity: null,
          title: null,
        },
      ],
      mappedVisitors: null,
      showButton: false,
    }
  }

  onChange = (option, myType) => {
    //set state variables
    if(myType==='quantity'){
      this.setState({quantity: option.label})
    }
    else{
      this.setState({title: option.label})
    }

    //Should I enable add button?
    const {quantity, title} = this.state;
    if(quantity && title){
      this.setState({showButton: true})
    }
  }

  onAddPress = () => {
    //Immutability
    const {quantity, title} = this.state;
    //Getting concatented array of visitors
    const visitors = this.state.allVisitors.concat({quantity: quantity, title: title});
    
    //Updating state
    this.setState(
      {
        allVisitors: visitors, 
        showButton: false, 
        quantity: null,
        title: null,
      }, () => {
        // after state has been set
        const items = this.state.allVisitors;
        const mappedItems = items.map((item) => {
          return(
            <ListItem key={item}>
              <Left>
                <Text>{item.title}</Text>
              </Left>
              <Right>
                <Text>{item.quantity}</Text>
              </Right>
            </ListItem>
            )
        })

        this.setState({mappedVisitors: mappedItems}) 
      }
    );
    //update items array
    //map items to JSX elements
    //set state
    //reset all state except items and added visitors
  }

  render() {
    let index = 0;
    const data = 
        [
          {label: 'dummy data 1', key: index++},
          {label: 'dummy data 2', key: index++},
          {label: 'dummy data 3', key: index++},
        ];
    const numbers = 
      [
        {label: '1', key: index++},
        {label: '2', key: index++},
        {label: '3', key: index++},
        {label: '4', key: index++},
        {label: '5', key: index++},
        {label: '6', key: index++},
        {label: '7', key: index++},
        {label: '8', key: index++},
        {label: '9', key: index++},
        {label: '10', key: index++},
      ]

    return (
      <Container>
        <Content>
        
          <List>
            <ListItem>
              <Left> <Label>Title </Label> </Left>
              <Selector items={data} myType={'title'} onChange={this.onChange}/>
            </ListItem>
            <ListItem>
              <Left> <Label>Quantity </Label> </Left>
              <Selector items={numbers} myType={'quantity'} onChange={this.onChange}/>
            </ListItem>
          </List>

          <Button disabled={!this.state.showButton} title='Add Member' onPress={() => {this.onAddPress()}} />
        
          <Form>
            <Card>
              <List>
                <ListItem style={styles.heading}>
                  <Left>
                    <Text style={styles.headingText}>Title</Text>
                  </Left>
                  <Right>
                    <Text style={styles.headingText}>Quantity</Text>
                  </Right>
                </ListItem>
                {this.state.mappedVisitors}
              </List>
            </Card>
          </Form>

        </Content>
      </Container>
    );
  }
}


styles = StyleSheet.create({
  heading: {
    marginTop: 50,
  },

  headingText:{
    fontWeight: 'bold',
    fontSize: 20,
  }
})