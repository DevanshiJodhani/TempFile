import React, { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Content>
        <Logo>
          <a href="/">
            <img src="./images/favicon.jpg" alt="Logo" />
          </a>
        </Logo>
        <NavLinks>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="menu-btn">
            <i className="bx bx-menu"></i>
            <i className="bx bx-x"></i>
          </label>
          <ul>
          <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#" onClick={handleDropdown}>
                Courses
                <i className="bx bx-chevron-down"></i>
              </a>
              <DropDown isOpen={isOpen}>
                <DropOption href="/englishCourse">English Speaking</DropOption>
                <DropOption href="/projectCourse">Project Management</DropOption>
                <DropOption href="/itCareerCourse">Career In IT </DropOption>
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
  height: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  z-index: 1000;
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
    width: 80px;
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

      /* &:hover div {
        display: block;
      } */
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      position: fixed;
      top: 100px;
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
          font-size: 20px;
          display: block;
        }
      }
    }
  }
`;

const DropDown = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 40px;
  left: -20px;
  background: #fff;
  padding-bottom: 12px;
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    top: 100%;
  }
`;

const DropOption = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333;
  text-decoration: none;


`;

export default Header;
