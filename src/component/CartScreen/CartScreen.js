import React, { Component } from "react";
import { Headers } from "../common";
import { Dimensions, FlatList } from "react-native";
import {
  Container,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  List,
  ListItem,
  View,
  Thumbnail
} from "native-base";
import { items } from "./array";
let { height } = Dimensions.get("window");
const cards = [
  {
    item: "Desktop",
    price: "80,000 INR",
    qty: "1",
    logo: require("../../../assets/Images/desktop-logo.jpg")
  },
  {
    item: "Laptop",
    price: "60,000 INR",
    qty: "1",
    logo: require("../../../assets/Images/laptop.jpg")
  }
];
export default class CartScreen extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <Headers routes={this.props.navigation} />
        <View
          style={{
            height: height - 150,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10
          }}
        >
          <Content padder>
            <FlatList
              data={cards}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Card
                  style={{
                    elevation: 3,
                    marginBottom: 15,
                    marginTop: 10
                  }}
                >
                  <CardItem header bordered>
                    <Left>
                      <Thumbnail square large source={item.logo} />
                    </Left>
                    <Body style={{ alignItems: "flex-start", paddingTop: 10 }}>
                      <Text>ITEM :</Text>
                      <Text>QTY :</Text>
                      <Text>PRICE :</Text>
                    </Body>
                    <Right>
                      <Body
                        style={{ alignItems: "flex-start", paddingTop: 10 }}
                      >
                        <Text>{item.item}</Text>
                        <Text>{item.qty}</Text>
                        <Text>{item.price}</Text>
                      </Body>
                    </Right>
                  </CardItem>
                  <CardItem bordered>
                    <Left />
                    <Text style={{ textDecorationLine: "underline" }}>
                      Specifications
                    </Text>
                    <Right />
                  </CardItem>
                  <CardItem style={{ height: height - 450 }}>
                    <Content>
                      <List
                        dataArray={items}
                        renderRow={item => (
                          <ListItem>
                            <Text>{item}</Text>
                          </ListItem>
                        )}
                      />
                    </Content>
                  </CardItem>

                  <CardItem footer bordered>
                    <Left>
                      <Button iconLeft transparent danger>
                        <Icon name="ios-trash" />
                        <Text>Remove</Text>
                      </Button>
                    </Left>
                    <Right>
                      <Button iconLeft transparent info>
                        <Icon name="ios-settings" />
                        <Text>Edit</Text>
                      </Button>
                    </Right>
                  </CardItem>
                </Card>
              )}
              keyExtractor={item => item.item}
            />
            <Button block primary>
              <Text>Make Payment</Text>
            </Button>
          </Content>
        </View>
      </Container>
    );
  }
}

/* 
import data from "./temp.json";
let dataObj = data[0];
let dataArray = Object.keys(dataObj).map(key => {
  let obj = dataObj[key];
  obj.keyName = key;
  return obj;
});
<List
dataArray={dataArray[0]}
renderRow={item => (
  <ListItem>
    <Text>{item}</Text>
  </ListItem>
)}
/>
*/
