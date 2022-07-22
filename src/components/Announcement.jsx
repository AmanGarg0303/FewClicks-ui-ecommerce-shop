import styled from "styled-components";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import { mobile } from "../responsive";

const TEXTS = [
  "Super Deal! Free Shipping on orders over $50...",
  "40% off on clothes every FRIDAY...",
  "No Cost EMI offers...",
  "Get a free $10 coupan code for first users...",
];

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  ${mobile({ fontSize: "14px" })}
`;

const Announcement = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3500);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Container>
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </Container>
  );
};

export default Announcement;
