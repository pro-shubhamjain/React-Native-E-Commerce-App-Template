import React, { Component } from "react";
import { Headers } from "../common";
import { Dimensions, Image } from "react-native";
let { height } = Dimensions.get("window");
import {
  Container,
  Accordion,
  View,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Right,
  Button,
  Form,
  Input,
  Item,
  Label,
  Content,
  Textarea
} from "native-base";
import { ImagePicker, Camera, Permissions } from "expo";
import { localize } from "src/internationalization";
const dataArray = [
  {
    title: "First Address",
    content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
  },
  { title: "Second Address", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Address", content: "No Input" }
];

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.props.testapi();
    this.state = {
      image: null,
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      name: "",
      email: "",
      mobile: "",
      password: ""
    };
  }
  _renderHeader(title, expanded) {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white"
        }}
      >
        <Text style={{ fontWeight: "600", color: "black" }}> {title}</Text>
        {expanded ? (
          <Icon style={{ fontSize: 18 }} name="remove-circle" />
        ) : (
          <Icon style={{ fontSize: 18 }} name="add-circle" />
        )}
      </View>
    );
  }
  _renderContent(content) {
    return (
      <Text
        style={{
          backgroundColor: "#CCCCCC",
          padding: 10,
          fontStyle: "italic",
          color: "white"
        }}
      >
        {content}
      </Text>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    // if (!result.cancelled) {
    //   this.setState({ image: result.uri });
    // }
  };

  render() {
    let { image } = this.state;
    return (
      <Container style={{ backgroundColor: "white" }}>
        <Headers routes={this.props.navigation} />
        <Content>
          <Content padder>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail
                    style={{ marginRight: 5 }}
                    square
                    source={{
                      uri:
                        "https://facebook.github.io/react-native/docs/assets/favicon.png"
                    }}
                  />
                  <Button small bordered>
                    <Icon name="ios-settings" />
                  </Button>
                </Left>

                <Right>
                  <Body style={{ alignItems: "flex-start" }}>
                    <Text note>Ballance</Text>
                    <Text note>INR: 1000 </Text>
                  </Body>
                </Right>
              </CardItem>
              <Form>
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Icon active name="ios-person-outline" />
                      <Label>Jhon Deo</Label>
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
                      <Label>Jhon@TrueRuse.com</Label>
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
                      <Label>+91-9000900099</Label>
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
                      <Label>**********</Label>
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
                        console.log("msg -->", this.props);
                        alert(this.props.msg);
                      }}
                    >
                      <Text>Save</Text>
                    </Button>
                  </Content>
                </CardItem>
              </Form>
              <CardItem footer bordered>
                <Accordion
                  dataArray={dataArray}
                  renderHeader={this._renderHeader}
                  renderContent={this._renderContent}
                />
              </CardItem>
            </Card>
          </Content>
        </Content>
      </Container>
    );
  }
}
