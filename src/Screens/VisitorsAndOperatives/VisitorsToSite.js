/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Button } from 'react-native';

import { Container, Content, Icon, Picker, Form, List, ListItem, Text, Left, Right } from "native-base";
import Selector from '../../Components/Selector/Selector';

export default class VisitorsToSite extends Component {
  static navigationOptions = {
    headerTitle: 'Visitors on site'
  }

  constructor(props){
    super(props);
    this.state = {
      items: [
        title: null,
        quantity: null,
      ],
      addedVisitors: null,
    }
  }

  onAdd(){
    const items = this.state.items;
    const addedVisitors = items.map((item) => {
      return(
        <ListItem>
          <Left><Text>{item.name}</Text></Left>
          <Right><Text>{item.quantity}</Text></Right>
        <ListItem/>
        )
    });
    this.setState({addedVisitors});
  }

  onChange(a, b){
    alert('a: ', a)
    alert('b: ', b)
  }


  render() {

    let index = 0;
    const data = 
        [
          {label: 'dummy data 1', value: '1', key: index++},
          {label: 'dummy data 2', value: '2', key: index++},
          {label: 'dummy data 3', value: '3', key: index++},
        ];

    return (
      <Container>
	      <Content>
          <Form>
            <List>
              {this.state.addedVisitors}
            </List>
          </Form>
          <Selector items={data} onChange={onChange}/>
          <Selector items={data} onChange={onChange}/>
	      	<Button onPress={()=>{}} title="Click to add visitors to site"/>
      	</Content>
      </Container>
    );
  }
}
