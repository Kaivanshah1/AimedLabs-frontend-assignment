import styled from "styled-components";

export const HumanImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 500px) {
    display: none; /* Hide the HumanImage on tablet and phone screens */
  }

  @media screen and (min-width: 1064px) {
    display: block;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
