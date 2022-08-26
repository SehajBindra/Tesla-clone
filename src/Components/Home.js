import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        backgroundImg="model-s.jpg"
        description="Order Online For Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Exising Inventory"
      />
      <Section
        title="Model 3"
        backgroundImg="model-3.jpg"
        description="order online for Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="Exising Inventory"
      />
      <Section
        title="Model X"
        backgroundImg="model-x.jpg"
        description="order online for Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="Exising Inventory"
      />
      <Section
        title="Model Y"
        backgroundImg="model-y.jpg"
        description="order online for Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="Exising Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in India"
        backgroundImg="solar-panel.jpg"
        description="Money Back Gurrantee"
        leftBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar For New Roofs "
        backgroundImg="solar-roof.jpg"
        description="Solar Roof Cost Less Than New Roof Plus Solar Roof "
        leftBtnText="Order Now"
        rightBtnText="Learn more"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
