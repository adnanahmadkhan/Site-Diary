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
	FooterTab 
} from 'native-base';

export default class AccidentsAndIssues extends Component {

  static navigationOptions = {
    headerTitle: 'Accidents and Issues'
  }

  render() {
    return (
      <Container>
      	<Content>
	      	<List>
	      		<ListItem icon onPress={() => {this.props.navigation.navigate('MaterialIssues')}}>
	      			<Body>
	      				<Text>Material Issues</Text>
	      			</Body>
	              	<Left>
			         	<Icon active name="ios-arrow-forward" />
		            </Left>
	            </ListItem>
	            <ListItem icon onPress={() => {this.props.navigation.navigate('Accidents')}}>
	      			<Body>
	      				<Text>Accidents</Text>
	      			</Body>
	              	<Left>
			         	<Icon active name="ios-arrow-forward" />
		            </Left>
	            </ListItem>
	            <ListItem icon onPress={() => {this.props.navigation.navigate('Issues')}}>
	      			<Body>
	      				<Text>Issues Arising</Text>
	      			</Body>
	              	<Left>
			         	<Icon active name="ios-arrow-forward" />
		            </Left>
	            </ListItem>
	      	</List>
      	</Content>
      	<Footer>
            <FooterTab>
              <Button onPress={() => {this.props.navigation.navigate('GenerateReport')}} full>
                <Text>Generate report</Text>
                <Icon name="ios-arrow-forward"/>
              </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}
