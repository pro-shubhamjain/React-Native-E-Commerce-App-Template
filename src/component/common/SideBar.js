import React, { Component } from "react";
import { TouchableWithoutFeedback, Dimensions } from "react-native";
import { connect } from "react-redux";
import { logout } from "src/action";
import {
  Container,
  Thumbnail,
  Content,
  List,
  ListItem,
  Separator,
  Button,
  Text,
  Left,
  Body,
  Icon,
  Right,
  View
} from "native-base";
let { height } = Dimensions.get("window");
class SideBar extends Component {
  componentWillReceiveProps(newProps) {
    if (!this.props.token && newProps.token) {
      this.props.navigation.navigate("Login");
    }
  }

  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "#2c8ef4",
            height: 150,
            alignItems: "center"
          }}
        >
          <Thumbnail
            style={{ marginTop: 40 }}
            source={{
              uri:
                "https://facebook.github.io/react-native/docs/assets/favicon.png"
            }}
          />
          <Text style={{ marginTop: 5, color: "white" }}>
            {this.props.name}
          </Text>
          <Text style={{ marginTop: 5, color: "white" }}>
            {this.props.email}
          </Text>
        </View>
        <View
          style={{
            height: height - 150
          }}
        >
          <Content>
            <List
              style={{
                backgroundColor: "white"
              }}
            >
              <ListItem icon>
                <Left>
                  <Icon name="ios-reorder-outline" />
                </Left>
                <Body>
                  <Text>Your Orders</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-folder-open-outline" />
                </Left>
                <Body>
                  <Text>Wallet</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-card-outline" />
                </Left>
                <Body>
                  <Text>Saved Cards</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <Separator style={{ height: 10 }} />
              <ListItem icon>
                <Left>
                  <Icon name="ios-trophy-outline" />
                </Left>
                <Body>
                  <Text>Refer N Earn</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-film-outline" />
                </Left>
                <Body>
                  <Text>My Coupons</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <Separator style={{ height: 10 }} />
              <ListItem icon>
                <Left>
                  <Icon name="ios-help-circle-outline" />
                </Left>
                <Body>
                  <Text>Help And Support</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-settings-outline" />
                </Left>
                <Body>
                  <Text>Settings</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <Separator style={{ height: 10 }} />
              <ListItem icon>
                <Left>
                  <Icon name="ios-paper-outline" />
                </Left>
                <Body>
                  <Text>Abouts Us</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-clipboard-outline" />
                </Left>
                <Body>
                  <Text>Terms And Service</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <Separator style={{ height: 10 }} />
              <ListItem icon>
                <Left>
                  <Icon name="ios-exit-outline" />
                </Left>
                <Body>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      this.props.logout();
                    }}
                  >
                    <Text
                      style={{
                        paddingLeft: 5,
                        textDecorationLine: "underline"
                      }}
                    >
                      Sign Out
                    </Text>
                  </TouchableWithoutFeedback>
                </Body>
                <Right />
              </ListItem>
            </List>
          </Content>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { email, name, token } = user;
  return { email, name, token };
};

export default connect(
  mapStateToProps,
  { logout }
)(SideBar);
