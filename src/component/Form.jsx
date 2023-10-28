import React from "react";
import {
  Button,
  FormContainer,
  Label,
  Span,
  Input,
  Heading,
  FormLabel,
  Flex,
  Flexs,
  Outer,
  Div,
} from "../styles/Form.styled";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Form = () => {
  return (
    <FormContainer>
      <Div>
        <Heading>Login</Heading>
      </Div>
      <Flex>
        <FormLabel>Login ID</FormLabel>
        <Input type="text" placeholder="Enter Login ID" />

        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter Password" />
      </Flex>

      <Outer>
        <Flexs>
          <Label>
            <input type="checkbox" />
            Remember Me
          </Label>
        </Flexs>
        <Label color="#737B86">
          <input type="checkbox" />
          Agree to Terms & Conditions
        </Label>

        <Div>
          <Button bgcolor="#1575A7">Login</Button>
        </Div>
        <p>
          Don’t have an account?<b>Register Here</b>
        </p>
      </Outer>
    </FormContainer>
  );
};

export default Form;
