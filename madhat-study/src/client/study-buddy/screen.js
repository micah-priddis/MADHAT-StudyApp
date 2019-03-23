import React from "react";
import {
  Container,
  VBox,
  BannerHeader,
  BasicSegment,
} from "@ombiel/aek-lib";


class Student{
  constructor(name, email  ) {
      this.name = name;
      this.email = email;
      this.ListofClasses;
      this.ListofGroups;

  }
  getName(){
      return this.name;
  }
  getEmail(){
    return this.email;
  }
  getHTMLName(){
    return 
  }
}

// Initialize a constructor from a class



export default class Screen extends React.Component {

  componentDidMount() {

  }

  render() {

    const s = new Student("mpriddis", "micahpriddis");
    return (
      <Container>
        <VBox>
          <BannerHeader theme="alt" key="header" data-flex={0}>Study Buddy</BannerHeader>
          <BasicSegment>
            <p>Hello Connor and Brianna {s.getName()} and Emily and Micah and Blake.</p>
          </BasicSegment>
        </VBox>
      </Container>
    );
  }
}
