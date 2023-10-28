import React from "react";
import GlobalStyles from "../styles/Global";
import { ThemeProvider } from "styled-components";
import Form from "./Form";
import HumanIcon from "./HumanIcon";
import { Container } from "../styles/Sidebar.styled";

const theme = {
  colors: {},
};
export const Login = () => {
  return (
    <div>
      <GlobalStyles />
      <Container>
        <HumanIcon />
        <Form />
      </Container>
    </div>
  );
};
