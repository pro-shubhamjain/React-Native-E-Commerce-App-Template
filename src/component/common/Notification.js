import React, { Component } from "react";
import { FlatList, Dimensions, Image, ListView } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Right,
  Button,
  Icon,
  Body,
  List,
  ListItem,
  View,
  Header,
  Title
} from "native-base";

let { height } = Dimensions.get("window");
const datas = [
  {
    title: "Desktop",
    note: "20% off all Desktop",
    logo: require("../../../assets/Images/desktop-logo.jpg")
  },
  {
    title: "Laptop",
    note: "30% off all Laptop",
    logo: require("../../../assets/Images/desktop-logo.jpg")
  },
  {
    title: "Tablet",
    note: "10% off all Tablet",
    logo: require("../../../assets/Images/desktop-logo.jpg")
  },
  {
    title: "Mobile",
    note: "40% off all Mobile",
    logo: require("../../../assets/Images/desktop-logo.jpg")
  }
];
export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return (
      <Container style={{ backgroundColor: "white" }}>
        <Header style={{ backgroundColor: "#2c8ef4" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Icon style={{ color: "white" }} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "white" }}>Notifications</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ height: height - 80 }}>
          <Content>
            <List
              dataSource={this.ds.cloneWithRows(this.state.listViewData)}
              renderRow={data => (
                <ListItem>
                  <Card
                    style={{
                      elevation: 3,
                      marginLeft: 25,
                      marginRight: 15,
                      marginBottom: 15,
                      marginTop: 10
                    }}
                  >
                    <CardItem>
                      <Left>
                        <Icon name="ios-notifications-outline" size={30} />
                        <Body>
                          <Text>{data.title}</Text>
                          <Text note>{data.note}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image
                        style={{ height: 100, flex: 1 }}
                        source={data.logo}
                      />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Button iconLeft transparent danger>
                          <Icon name="ios-trash" />
                        </Button>
                      </Left>
                      <Text>Swip for action perform</Text>
                      <Right>
                        <Button iconLeft transparent primary>
                          <Icon name="ios-cart" />
                        </Button>
                      </Right>
                    </CardItem>
                  </Card>
                </ListItem>
              )}
              renderRightHiddenRow={data => (
                <Button full onPress={() => alert(data.title)}>
                  <Icon active name="ios-cart" />
                </Button>
              )}
              renderLeftHiddenRow={(data, secId, rowId, rowMap) => (
                <Button
                  full
                  danger
                  onPress={_ => this.deleteRow(secId, rowId, rowMap)}
                >
                  <Icon active name="trash" />
                </Button>
              )}
              leftOpenValue={75}
              rightOpenValue={-75}
            />
          </Content>
        </View>
      </Container>
    );
  }
}
