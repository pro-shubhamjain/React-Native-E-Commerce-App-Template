import React, { Component } from "react";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge
} from "native-base";
export class Footers extends Component {
  render() {
    return (
      <Container>
        <Content />
        <Footer style={{ backgroundColor: "#2c8ef4" }}>
          <FooterTab>
            <Button vertical onPress={() => this.props.routes.navigate("Home")}>
              <Icon
                name="ios-home"
                style={{
                  color: this.props.active !== "home" ? "#D3D3D3" : "white"
                }}
              />
              <Text
                numberOfLines={1}
                style={{
                  color: this.props.active !== "home" ? "#D3D3D3" : "white"
                }}
              >
                Home
              </Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.routes.navigate("Account")}
            >
              <Icon
                name="ios-person"
                style={{
                  color: this.props.active !== "person" ? "#D3D3D3" : "white"
                }}
              />
              <Text
                numberOfLines={1}
                style={{
                  color: this.props.active !== "person" ? "#D3D3D3" : "white"
                }}
              >
                Account
              </Text>
            </Button>
            <Button
              badge
              vertical
              onPress={() => this.props.routes.navigate("Wishlist")}
            >
              <Badge>
                <Text>9</Text>
              </Badge>
              <Icon
                active
                name="ios-heart"
                style={{
                  color: this.props.active !== "heart" ? "#D3D3D3" : "white"
                }}
              />
              <Text
                numberOfLines={1}
                style={{
                  color: this.props.active !== "heart" ? "#D3D3D3" : "white"
                }}
              >
                Wishlist
              </Text>
            </Button>
            <Button
              badge
              vertical
              onPress={() => this.props.routes.navigate("Cart")}
            >
              <Badge>
                <Text>2</Text>
              </Badge>
              <Icon
                name="ios-cart"
                style={{
                  color: this.props.active !== "cart" ? "#D3D3D3" : "white"
                }}
              />
              <Text
                numberOfLines={1}
                style={{
                  color: this.props.active !== "cart" ? "#D3D3D3" : "white"
                }}
              >
                Cart
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
