import React from "react";
import {
  Container,
  VBox,
  BannerHeader,
  BasicSegment,
  Button,<
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
	    
	    );
	}

    }

}

function pDisplay(//etc)
{

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
