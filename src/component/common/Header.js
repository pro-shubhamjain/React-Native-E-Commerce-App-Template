import React, { Component } from "react";
import {
  Header,
  Button,
  Icon,
  Text,
  Badge,
  Left,
  Body,
  Right,
  Title
} from "native-base";
import { localize } from "src/internationalization";

export class Headers extends Component {
  render() {
    console.log("HEADER", this.props);
    return (
      <Header style={{ backgroundColor: "#2c8ef4" }}>
        <Left>
          <Button
            transparent
            onPress={() => {
              this.props.routes.openDrawer();
            }}
          >
            <Icon name="ios-menu" style={{ color: "white" }} />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "white" }}>{localize("company")}</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.routes.navigate("Notify")}
          >
            <Badge style={{ position: "absolute" }}>
              <Text>2</Text>
            </Badge>
            <Icon name="ios-notifications" style={{ color: "white" }} />
          </Button>
        </Right>
      </Header>
    );
  }
}
