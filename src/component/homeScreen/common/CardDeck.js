import React, { Component } from "react";
import { Image, Dimensions } from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Right
} from "native-base";
let { height, width } = Dimensions.get("window");
const cards = [
  {
    title: "Desktop",
    desc: "Swip for your next product",
    note: "Build your own Desktop",
    logo: require("../../../../assets/Images/desktop-logo.jpg"),
    image: require("../../../../assets/Images/desktop-logo.jpg")
  },
  {
    title: "Laptop",
    desc: "Swip for your next product",
    note: "Start build your own Laptop",
    logo: require("../../../../assets/Images/laptop.jpg"),
    image: require("../../../../assets/Images/laptop.jpg")
  },
  {
    title: "Tablet",
    desc: "Swip for your next product",
    note: "Start build your own Tablet",
    logo: require("../../../../assets/Images/tab-logo.jpg"),
    image: require("../../../../assets/Images/tab.jpg")
  },
  {
    title: "Mobile",
    desc: "Swip for your next product",
    note: "Start build your own Mobile",
    logo: require("../../../../assets/Images/mobile-logo.jpg"),
    image: require("../../../../assets/Images/mobile.jpg")
  },
  {
    title: "Robots",
    desc: "Swip for your next product",
    note: "Start build your own Robot",
    logo: require("../../../../assets/Images/robo-logo.jpg"),
    image: require("../../../../assets/Images/robo.jpg")
  }
];

export class CardDeck extends Component {
  render() {
    return (
      <Container>
        <View style={{ margin: 10 }}>
          <DeckSwiper
            dataSource={cards}
            renderItem={item => (
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.logo} />
                    <Body>
                      <Text>{item.title}</Text>
                      <Text note>{item.note}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{ height: height - 330, flex: 1 }}
                    source={item.image}
                  />
                </CardItem>
                <CardItem>
                  <Left>
                    <Icon
                      iconLeft
                      name="ios-arrow-back"
                      style={{ color: "#ED4A6A" }}
                    />
                  </Left>
                  <Text>{item.desc}</Text>
                  <Right>
                    <Icon
                      iconRight
                      name="ios-arrow-forward"
                      style={{ color: "#ED4A6A" }}
                    />
                  </Right>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    );
  }
}
