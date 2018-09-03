import React, { Component } from "react";
import { Container, Content, Footer, Text } from "native-base";
export default class Item1 extends Component {
  render() {
    return (
      <Container>
        <Content />
        <Footer>
          <Text
            numberOfLines={1}
            style={{
              color: this.props.active !== "cart" ? "#D3D3D3" : "white"
            }}
          >
            Cart
          </Text>
        </Footer>
      </Container>
    );
  }
}
