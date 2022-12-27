import React from "react"
import styled from "styled-components"
import { toolTipData } from "../../data/menuData"
import MenuButton from "../buttons/menuButton"

function MenuToolTip(props) {
  const { isOpen } = props
  return (
    <Wrapper isOpen={isOpen}>
      {toolTipData.map((item, index) => (
        <MenuButton item={item} key={index} />
      ))}
    </Wrapper>
  )
}

export default MenuToolTip

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 20px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  z-index: 1;
  display: grid;
  grid-template-columns: 160px;
  transition: 0.3s ease-in-out;
  ${"" /* display: ${props => (props.isOpen ? "block" : "none")}; */}
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transform: ${props =>
    props.isOpen
      ? "skewY(0deg) rotate(0deg) translateY(0px)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`
