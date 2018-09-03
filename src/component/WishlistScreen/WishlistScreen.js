import React, { Component } from "react";
import { Headers, Footers } from "../common";
import { FlatList, Dimensions } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Button,
  Icon,
  Body,
  View
} from "native-base";

let { height } = Dimensions.get("window");
const cards = [
  {
    title: "Desktop",
    note: "Build your own Desktop",
    logo: require("../../../assets/Images/asc-logo.jpg")
  },
  {
    title: "Laptop",
    note: "Start build your own Laptop",
    logo: require("../../../assets/Images/laptop.jpg")
  },
  {
    title: "Tablet",
    note: "Start build your own Tablet",
    logo: require("../../../assets/Images/tab-logo.jpg")
  },
  {
    title: "Mobile",
    note: "Start build your own Mobile",
    logo: require("../../../assets/Images/mobile-logo.jpg")
  },
  {
    title: "Robots",
    note: "Start build your own Robot",
    logo: require("../../../assets/Images/robo-logo.jpg")
  }
];
export default class WishlistScreen extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <Headers routes={this.props.navigation} />
        <View style={{ marginTop: 20, height: height - 150 }}>
          <Content>
            <FlatList
              data={cards}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Card
                  style={{
                    elevation: 3,
                    marginLeft: 15,
                    marginRight: 15,
                    marginBottom: 15,
                    marginTop: 10
                  }}
                >
                  <CardItem>
                    <Left>
                      <Thumbnail source={item.logo} />
                      <Body>
                        <Text>{item.title}</Text>
                        <Text note>{item.note}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button iconLeft transparent danger>
                        <Icon name="ios-trash" />
                        <Text>Remove</Text>
                      </Button>
                    </Left>
                    <Right>
                      <Button iconLeft transparent success>
                        <Icon name="ios-cart" />
                        <Text>Add To Cart</Text>
                      </Button>
                    </Right>
                  </CardItem>
                </Card>
              )}
              keyExtractor={item => item.title}
            />
          </Content>
        </View>
      </Container>
    );
  }
}
