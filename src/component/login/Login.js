import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Icon,
  Card,
  CardItem,
  Body,
  Right,
  Left,
  View,
  Toast
} from "native-base";

import { TouchableWithoutFeedback, Modal } from "react-native";
import { cancelRequest, setCustomHeaders } from "src/apis";
import Spinner from "react-native-loading-spinner-overlay";

export default class Logins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      modalVisible: false,
      checkToken: false
    };
    console.log(props);
  }

  componentWillReceiveProps(newProps) {
    if (
      !this.props.token &&
      newProps.token &&
      this.props.token !== newProps.token
    ) {
      setCustomHeaders([
        {
          name: "Authorization",
          value: newProps.token
        }
      ]);
      // this.props.navigation.navigate("Home");
    } else if (newProps.message) {
      Toast.show({
        text: "Please input valid credentials!!!",
        textStyle: { textAlign: "center" },
        type: "danger",
        duration: 3000
      });
    }
  }

  componentWillUnmount() {
    cancelRequest();
  }

  forgetpwd() {
    return (
      <Modal
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1
        }}
        visible={this.state.modalVisible}
        transparent={true}
        onRequestClose={() => this._onCloseModal()}
      >
        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          onPress={() => {
            this._onCloseModal();
          }}
        >
          <View style={{ flex: 1, backgroundColor: "#0007" }}>
            <View
              style={{ height: 350 }}
              onStartShouldSetResponder={() => {
                return true;
              }}
            >
              <Card
                style={{
                  marginTop: 100,
                  marginLeft: 20,
                  marginRight: 20
                }}
              >
                <CardItem header>
                  <Body>
                    <Text
                      style={{
                        fontWeight: "500",
                        fontSize: 16,
                        alignSelf: "center",
                        paddingBottom: 10
                      }}
                    >
                      Forget Password
                    </Text>
                    <Text style={{ fontSize: 14 }}>
                      Check your email. After you enter your email, an email
                      will be sent to your Issuu-associated email address. Click
                      Set a new password, and you will be redirected to a page
                      where you can enter a new password.
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Icon active name="ios-mail-outline" />
                      <Label>Email Id</Label>
                      <Input
                        text={this.state.email}
                        onChangeText={text => {
                          this.setState({
                            email: text
                          });
                        }}
                      />
                    </Item>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Left>
                    <Button small bordered onPress={() => this._onCloseModal()}>
                      <Text>Cancel</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button small bordered onPress={() => { }}>
                      <Text>Confirm</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  _onCloseModal() {
    this.setState({
      modalVisible: false
    });
  }

  render() {
    return (
      <Container style={{ marginTop: 70 }}>
        <Spinner visible={this.props.loading} />
        <Content>
          <Content padder>
            <Card>
              <CardItem bordered>
                <Content contentContainerStyle={{ alignSelf: "center" }}>
                  <CardItem header bordered>
                    <Text>SIGN IN</Text>
                  </CardItem>
                </Content>
              </CardItem>
              <Form>
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Icon active name="ios-mail-outline" />
                      <Label>Email Id / Mobie Number</Label>
                      <Input
                        autoCapitalize="none"
                        text={this.state.email}
                        onChangeText={text => {
                          this.setState({
                            email: text
                          });
                        }}
                      />
                    </Item>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Icon active name="ios-lock-outline" />
                      <Label>Password</Label>
                      <Input
                        secureTextEntry={true}
                        text={this.state.password}
                        onChangeText={text => {
                          this.setState({
                            password: text
                          });
                        }}
                      />
                    </Item>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        this.setState({
                          modalVisible: true
                        });
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{
                          paddingTop: 5,
                          marginLeft: 190
                        }}
                      >
                        Forgot password?
                      </Text>
                    </TouchableWithoutFeedback>
                  </Body>
                </CardItem>
                <CardItem>
                  <Content>
                    <Button
                      block
                      onPress={() => {
                        this.props.navigation.navigate("Home");
                        this.props.loginUser({
                          email: this.state.email,
                          password: this.state.password
                        });
                      }}
                    >
                      <Text>Sign In</Text>
                    </Button>
                  </Content>
                </CardItem>
              </Form>
              <CardItem footer bordered>
                <Text>Don't have an account?</Text>
                <TouchableWithoutFeedback
                  onPress={() => this.props.navigation.navigate("Register")}
                >
                  <Text
                    numberOfLines={1}
                    style={{ paddingLeft: 5, textDecorationLine: "underline" }}
                  >
                    Sign up
                  </Text>
                </TouchableWithoutFeedback>
              </CardItem>
            </Card>
          </Content>
        </Content>
        <View>{this.forgetpwd()}</View>
      </Container>
    );
  }
}
