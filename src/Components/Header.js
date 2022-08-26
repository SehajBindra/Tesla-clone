import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
function Header() {
  const [burgerStaus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="/Images/logo.svg" alt="" />
      </a>

      <MenuItem>
        <a href="https://www.tesla.com/models">Model S</a>
        <a href="https://www.tesla.com/model3">Model 3</a>
        <a href="https://www.tesla.com/modelx">Model X</a>
        <a href="https://www.tesla.com/modely">Model Y</a>
        <a href="https://www.tesla.com/solarroof">Solar Roof</a>
        <a href="https://www.tesla.com/solarpanels">Solar Pannels</a>
      </MenuItem>

      <RightMenu>
        <a href="">Shop </a>
        <a href=""> Tesla Account </a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStaus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          {" "}
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          {" "}
          <a href="#">Used Inventory</a>
        </li>
        <li>
          {" "}
          <a href="#">Trade -InInventory</a>
        </li>
        <li>
          {" "}
          <a href="#">Cyber Truck</a>
        </li>
        <li>
          {" "}
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="https://www.tesla.com/solarpanels">Solar Pannels</a>
        </li>
        <li>
          <a href="https://www.tesla.com/solarroof">Solar Roof</a>
        </li>{" "}
        <a href="https://www.tesla.com/model3">Model 3</a>
        <li>
          <a href="https://www.tesla.com/models">Model S</a>
        </li>{" "}
        <a href="https://www.tesla.com/modelx">Model X</a>
        <li>
          <a href="https://www.tesla.com/models">Model S</a>
        </li>{" "}
        <a href="https://www.tesla.com/modely">Model Y</a>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 400;
    padding: 0 10px;
    text-transform: Capitalize;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  justify-content: right;

  a {
    font-weight: 400;
    margin-right: 10px;
    text-transform: Capitalize;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  cursor: pointer;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  padding: 20px;
  list-style: none;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    text-transform: Capitalize;
  }

  a {
    font-weight: 400px;
  }
`;
const CustomClose = styled(ClearIcon)``;

const CloseWrapper = styled.div`
  display: flex;

  justify-content: flex-end;
  cursor: pointer;
`;
