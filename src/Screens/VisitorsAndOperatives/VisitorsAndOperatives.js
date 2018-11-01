/* Core */
import React, { Component } from 'react';

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

export default class VisitorsAndOperatives extends Component {

  static navigationOptions = {
    headerTitle: 'Visitors and Operatives on site'
  }

  render() {
    return (
      <Container>
      	<Content>
	      	<List>
	      		<ListItem icon onPress={() => {this.props.navigation.navigate('VisitorsToSite')}}>
	      			<Body>
	      				<Text>Visitors on site</Text>
	      			</Body>
	              	<Left>
			         	<Icon active name="ios-arrow-forward" />
		            </Left>
	            </ListItem>
	            <ListItem icon onPress={() => {this.props.navigation.navigate('OperativesToSite')}}>
	      			<Body>
	      				<Text>Operatives on site</Text>
	      			</Body>
	              	<Left>
			         	<Icon active name="ios-arrow-forward" />
		            </Left>
	            </ListItem>
	            <ListItem icon onPress={() => {this.props.navigation.navigate('Management')}}>
	      			<Body>
	      				<Text>Management Team</Text>
	      			</Body>
	              	<Left>
			         	<Icon active name="ios-arrow-forward" />
		            </Left>
	            </ListItem>
	            <ListItem icon onPress={() => {this.props.navigation.navigate('PlantOnSite')}}>
	      			<Body>
	      				<Text>Plant on site</Text>
	      			</Body>
	              	<Left>
			         	<Icon active name="ios-arrow-forward" />
		            </Left>
	            </ListItem>
	      	</List>
      	</Content>
      	<Footer>
            <FooterTab>
              <Button onPress={() => {this.props.navigation.navigate('AccidentsAndIssues')}} full>
                <Text>Accidents and Issues</Text>
                <Icon name="ios-arrow-forward"/>
              </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}