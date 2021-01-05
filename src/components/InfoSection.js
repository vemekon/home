import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Section = styled.section`
  width: 100%;
  height: 80%;
  padding: 3rem 0rem;
`;
const Container = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 1rem 2rem;

  order: ${({ reverse }) => (reverse ? "2" : "1")};
  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: rgb(255, 153, 0);
  }
  p {
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;

export const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft reverse={reverse}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/rental" primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse} data-aos="fade-left">
          <img src={image} alt="" />
        </ColumnRight>
      </Container>
    </Section>
  );
};
