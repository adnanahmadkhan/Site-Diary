/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View } from 'react-native';

import { 
	Container, 
	Content, 
	Button, 
	Icon, 
	List, 
	ListItem, 
	Text, 
	Body, 
	Left, 
	Footer, 
	FooterTab,
	Badge, 
	Title
} from 'native-base';


export default class ManagementTeam extends Component {

  static navigationOptions = {
	headerTitle: 'Management Team'
  }

  render() {
    return (
      <Container>
      	<Content contentContainerStyle={{flexDirection: 'row', padding: 20, justifyContent: 'space-between'}}>
      		<Title>Click to add role</Title>
      		<Badge success>
	          <Text>+</Text>
	        </Badge>
      	</Content>
      	<Footer>
            <FooterTab>
              <Button onPress={() => {this.props.navigation.navigate('Weather')}} full>
                <Text>Weather</Text>
                <Icon name="ios-arrow-forward"/>
              </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}
