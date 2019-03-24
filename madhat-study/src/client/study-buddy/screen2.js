import React from "react";
import {
  Container,
  VBox,
  BannerHeader,
  BasicSegment,
  Button,
  ButtonGroup,
  Listview,
  NavMenu,
  NavMenuItem,
  ListviewItem as Item
} from "@ombiel/aek-lib";


export default class Screen extends React.Component {

  componentDidMount() {

  }


  render() {

    return (
      <Container>
        <VBox>
          <BannerHeader theme='alt' key="header" data-flex={0}>Cougs Study</BannerHeader>
          <BasicSegment>
          <NavMenu theme="prime">
          <NavMenuItem icon="home" href="#/screen">Home</NavMenuItem>
          <NavMenuItem icon="calendar" active href="#">Classes</NavMenuItem>
          <NavMenuItem icon="rocket" href="#" >Study Groups</NavMenuItem>
          </NavMenu>
          </BasicSegment>
        </VBox>
      </Container>
    );

  }

}
