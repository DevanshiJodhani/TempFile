import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src="./images/favicon.png" alt="Logo" />
        </Logo>
        <NavLinks>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="menu-btn">
            <i className="bx bx-menu"></i>
            <i className="bx bx-x"></i>
          </label>
          <ul>
            <li>
              <a href="/">
                Workshop
                <i className="bx bx-chevron-down"></i>
              </a>
              <DropDown>
                <DropOption href="#">Workshop 1</DropOption>
                <DropOption href="#">Workshop 2</DropOption>
                <DropOption href="#">Workshop 3</DropOption>
              </DropDown>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </NavLinks>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #f5f5f5;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 100px;

  @media screen and (max-width: 768px) {
    padding: 5px 50px;
  }

  @media screen and (max-width: 500px) {
    padding: 10px 30px;
  }
`;

const Logo = styled.div`
  width: 90px;
  img {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 70px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;

    li {
      position: relative;

      a {
        text-decoration: none;
        padding: 16px 30px;
        margin-left: 20px;
        font-size: 18px;
        color: #000;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          width: 0px;
          height: 2px;
          background: #000;
          bottom: 10px;
          transition: width 0.5s;
        }

        &:hover::before {
          width: 50px;
        }

        i {
          font-size: 25px;
          vertical-align: middle;
        }
      }

      &:hover div {
        display: block;
      }
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      position: fixed;
      top: 70px;
      left: -100%;
      background: #f5f5f5;
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: right;
      padding: 20px;
      transition: all 0.4s ease;

      li {
        flex-direction: column;
        text-align: right;
        margin: 20px 0;
        text-align: right;

        a {
          padding: 20px;
          font-size: 22px;
          display: block;
        }
      }
    }
  }
`;

const DropDown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
`;

const DropOption = styled.a`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333;
  text-decoration: none;
`;

export default Header;
