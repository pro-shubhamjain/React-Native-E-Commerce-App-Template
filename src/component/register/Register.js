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
  Body
} from "native-base";
import { cancelRequest } from "src/apis";
import { TouchableWithoutFeedback } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

export default class Registers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: ""
    };
  }
  componentWillReceiveProps(newProps) {
    if (newProps.loading) {
      if (newProps.message) {
        alert("Register Error");
      } else {
        this.props.navigation.navigate("Login");
      }
    }
  }

  componentWillUnmount() {
    cancelRequest();
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
                    <Text>REGISTER</Text>
                  </CardItem>
                </Content>
              </CardItem>
              <Form>
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Icon active name="ios-person-outline" />
                      <Label>Name</Label>
                      <Input
                        text={this.state.name}
                        onChangeText={text => {
                          this.setState({
                            name: text
                          });
                        }}
                      />
                    </Item>
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
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Icon active name="ios-call-outline" />
                      <Label>Mobile Number</Label>
                      <Input
                        text={this.state.mobile}
                        onChangeText={text => {
                          this.setState({
                            mobile: text
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
                  </Body>
                </CardItem>
                <CardItem>
                  <Content>
                    <Button
                      block
                      onPress={() => {
                        this.props.registerUser({
                          name: this.state.name,
                          email: this.state.email,
                          mobile: this.state.mobile,
                          password: this.state.password
                        });
                      }}
                    >
                      <Text>Sign Up</Text>
                    </Button>
                  </Content>
                </CardItem>
              </Form>
              <CardItem footer bordered>
                <Text>Already have an account? </Text>
                <TouchableWithoutFeedback
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  <Text
                    numberOfLines={1}
                    style={{ paddingLeft: 5, textDecorationLine: "underline" }}
                  >
                    Sign in
                  </Text>
                </TouchableWithoutFeedback>
              </CardItem>
            </Card>
          </Content>
        </Content>
      </Container>
    );
  }
}
