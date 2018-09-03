import React, { Component } from "react";
import { Headers, Footers } from "../common";
import { CardDeck } from "./common";
import {
  Container,
  Content,
  Icon,
  Input,
  Item,
  Header,
  Button,
  Text
} from "native-base";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  };

  constructor(props) {
    super(props);
    this.props.fetchCurrentUser();
  }

  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <Headers routes={this.props.navigation} />
        <Item>
          <Input placeholder="Search" />
          <Icon name="ios-search-outline" />
        </Item>
        <CardDeck />
        <Content />
      </Container>
    );
  }
}

/*
 <Header searchBar rounded style={{ backgroundColor: "#2c8ef4" }}>
          <Item style={{ backgroundColor: "white" }}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-laptop" />
          </Item>
          <Button transparent>
            <Text style={{ color: "white" }}>Search</Text>
          </Button>
        </Header>
*/
