import React from "react";
import {
  Container,
  VBox,
  BannerHeader,
  BasicSegment,
} from "@ombiel/aek-lib";


export default class Screen extends React.Component {

  componentDidMount() {

  }

  render() {

    return (
      <Container>
        <VBox>
          <BannerHeader theme="alt" key="header" data-flex={0}>Study Buddy</BannerHeader>
          <BasicSegment>
            <p>Welcome to Cougs Study, please enter your WSU username and password.</p>
            <p>username: <p>
            <p>password: <>
            <p>login</p>
            <button>login</button>
          </BasicSegment>
        </VBox>
      </Container>

        <Container>
          <VBox>
            <BannerHeader theme="alt" key="header" data-flex={0}>Study Buddy</BannerHeader>
            <BasicSegment>
              <p>Class list:</p>
              <p> <p>
              <p>password: <>
              <p>login</p>
              <button>login</button>
            </BasicSegment>
          </VBox>
        </Container>

    );



  }

}
