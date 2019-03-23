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
            <p>Hello Connor and Brianna and Emily and Micah and Blake.</p>
          </BasicSegment>
        </VBox>
      </Container>
    );

  }

}
