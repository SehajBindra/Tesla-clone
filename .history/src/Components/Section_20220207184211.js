import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
function Section({
  title,
  backgroundImg,
  description,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom >
      <ItemText>
        <h1>{title}</h1>
        <p> {description}</p>
      </ItemText>
      </Fade>
      <Buttons>
      <Fade bottom >
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>

          <RightButton>{rightBtnText}</RightButton>
        </ButtonGroup>
        </Fade>
        <Downarrow src="/Images/down-arrow.svg" />
      </Buttons>



    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  min-width: 100vh;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/Images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-image: ${props => `url("/Images/${props.bgImage}")`}
`;

const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 8px;
  font-weight: 500;
`;
const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opacity: 0.65;
`;

const Downarrow = styled.img`
  margin-top: 40px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 260px ;


  @media (max-width:768px){
    margin-left: 134px ;
  }
  @meadia (min-width-768px)  {
    margin-left: 256px ;

  }

 
`;

const Buttons = styled.div``;
