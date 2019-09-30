import React, { Component } from "react";
import styled from "styled-components";
import Lambda from "../assets/Lambda.png";

const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 100px;
  max-width: 100%;
`;

export default class Landing extends Component {
  render() {
    return (
      <LandingContainer>
        <img src={Lambda.png} alt="Lambda" height="auto" width="75%" />
      </LandingContainer>
    );
  }
}