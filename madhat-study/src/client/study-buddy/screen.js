import React from "react";
import {
  Container,
  VBox,
  HBox,
  BannerHeader,
  BasicSegment,
  Button,
  Header,
  Listview,
  ListviewItem as Item,
} from "@ombiel/aek-lib";

function selectUser() {
    if (/*credentials == "Sarah Doe"*/)
    {
        //jump to sDisplay(pass in necessary info)
    }

    else if (/*credentials == "John Doe"*/)
    {
	//jump to sDisplay(etc)
    }

    else if (/*credentials == "Kevin Larry"*/)
    {
         //jump to pDisplay(etc)
    }	    
}

function sDisplay (//etc)
{
     export default Screen extends React.Component {
        render() {

          return (
            <Container>
              <VBox>
                <BanerHeader theme="alt" key="header" dataflex={0}>Cougs Study</BannerHeader>
                <BasicSegment>
                    <HBox>
                      <Panel />
                      <Header>"Current Schedule"</Header>
                        <div>
                          <Listview>
                            <Item href="#">"Class1"</Item>
                            <Item href="#">"Class2"</Item>
                            <Item href="#">"Class3"</Item>
                          </Listview>
                        </div>
                    </HBox>

                    <HBox>
                      <Panel />
                      <Header>"Welcome to your dashboard!"</Header>
                      <CBox>
                        <Header>"Your Study Groups"</Header>
                          <div>
                            <Listview>
                              <Item href="#">"Group1"</Item>
                              <Item href="#">"Group2"</Item>
                              <Item href="#">"Group3"</Item>
                            </Listview>
                          </div>
                      </CBox>
                    </HBox>

                    <HBox>
                      <Panel />
                      <Header>"Announcements"</Header>
                        <div>
                          <Listview>
                            <Item href="#">"A1"</Item>
                            <Item href="#">"A2"</Item>
                            <Item href="#">"A3"</Item>
                          </Listview>
                        </div>
                    </HBox>
                </BasicSegment>
              </VBox>
            </Container>
          );
        }
    }
}

function pDisplay(//etc)
{
     export default Screen extends React.Component {
        render() {

          return (
            <Container>
              <VBox>
                <BanerHeader theme="alt" key="header" dataflex={0}>Cougs Study</BannerHeader>
                <BasicSegment>
                    <HBox>
                      <Panel />
                      <Header>"Current Schedule"</Header>
                        <div>
                          <Listview>
                            <Item href="#">"Class1"</Item>
                            <Item href="#">"Class2"</Item>
                            <Item href="#">"Class3"</Item>
                          </Listview>
                        </div>
                    </HBox>

                    <HBox>
                      <Panel />
                      <Header>"Welcome to your dashboard!"</Header>
                      <CBox>
                        <Header>"Your Study Groups"</Header>
                          <div>
                            <Listview>
                              <Item href="#">"Group1"</Item>
                              <Item href="#">"Group2"</Item>
                              <Item href="#">"Group3"</Item>
                            </Listview>
                          </div>
                      </CBox>
                    </HBox>

                    <HBox>
                      <Panel />
                      <Header>"Announcements"</Header>
                        <div>
                          <Listview>
                            <Item href="#">"A1"</Item>
                            <Item href="#">"A2"</Item>
                            <Item href="#">"A3"</Item>
                          </Listview>
                        </div>
                    </HBox>
                </BasicSegment>
              </VBox>
            </Container>
          );
        }
    }
}

export default class Screen extends React.Component {

  componentDidMount() {

  }

  render() {

    return (
      <Container>
        <VBox>
          <BannerHeader theme="alt" key="header" data-flex={0}>Cougs Study</BannerHeader>
          <BasicSegment>
            <p>"Welcome to Cougs Study!"<br></p>
	    <p>"Log in to your WSU account to continue."<br></p>
	    <Button>"Log in"</Button>
	    
	    if (/*button is clicked*/)
	    {
	        //jump to selectUser()
	    }

          </BasicSegment>
        </VBox>
      </Container>
    );

  }

}
