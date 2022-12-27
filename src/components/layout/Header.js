import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/menuButton"
import MenuToolTip from "../toolTip/menuToolTip"

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
  }
  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="logo" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              onClick={event => handleClick(event)}
              item={item}
              key={index}
            />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
      </MenuWrapper>
      <MenuToolTip isOpen={isOpen} />
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`
const MenuWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
`