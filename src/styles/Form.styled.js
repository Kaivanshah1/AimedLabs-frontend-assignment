import styled from "styled-components";

export const FormContainer = styled.form`
  width: 50%;
  border-radius: 12px;
  height: 600px;
  postion: relative;
  b {
    color: #f78719;
  }
  p {
    display: flex;
    justify-content: center;
  }
  button {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 500px) {
        width: 450px;
        justify-self: center;
      }
    }

    @media screen and (min-width: 1064px) {
      width: 1024px;
    height: 600px;
    }
  }
`;
export const FormLabel = styled.label`
  margin-bottom: 5px;
`;

export const Flexs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Heading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  margin-top: 100px;
`;
export const Flex = styled.div`
  display: flex;
  postion: absolute;

  flex-direction: column;
  padding: 0px;
  margin-top: 25px;
`;

export const Input = styled.input`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 500px;
  padding: 10px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  border-radius: 5px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 300px;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.bgcolor};
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;
  color: ${(props) => props.color}
  padding: 0px;
  margin:0px;
  width: 1px;
  white-space: nowrap;
  font-size:15px;
`;

export const Span = styled.span`
  display: flex;

  color: ${(props) => props.color};
  margin-right: -40px;
`;

export const Outer = styled.div`
  padding: 0px;
  width: 500px;
  margin-top: 0px;
`;
