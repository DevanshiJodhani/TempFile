import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <SocialLinks>
        <h2>Reach Out Us</h2>
        <SocialBox>
          <a href="#">
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a href="#">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i className="bx bxl-youtube"></i>
          </a>
        </SocialBox>
      </SocialLinks>
      <NavLink>
        <h2>Quick Links</h2>
        <NavBox>
          <ul>
            <li>
              <a href="#">Workshop</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </NavBox>
      </NavLink>
      <UpArrow>
        <a href="#">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </UpArrow>
    </Container>
  );
};

const Container = styled.div`
  background-color: #000;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  
  

  @media screen and (max-width: 790px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #a8a8a8;

  h2 {
    margin-bottom: 20px;
  }

`;

const SocialBox = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-left: 20px;
    background-color: #fff;
    border-radius: 10px;
    text-decoration: none;
    font-size: 25px;
    padding: 8px;
    color: #000;
  }
  @media screen and (max-width: 790px){
    margin-bottom: 30px;
  }
`;

const NavLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #a8a8a8;
  h2 {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 500px){
    h2{
        margin-bottom: 0px;
    }
  }
`;

const NavBox = styled.div`
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
        color: #fff;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          width: 0px;
          height: 2px;
          background: #fff;
          bottom: 10px;
          transition: width 0.5s;
        }

        &:hover::before {
          width: 50px;
        }
      }
    }
  }

  @media screen and (max-width: 500px){
    a{
        display: flex;
        flex-direction:column;
        font-size: 16px;
        padding: 12px 20px;
    }
    margin-bottom: 20px;
  }
`;

const UpArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin-left: 20px;
    background-color: #fff;
    border-radius: 10px;
    text-decoration: none;
    font-size: 30px;
    padding: 8px;
    color: #000;
  }
  @media screen and (max-width: 790px){
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 50px;
  }

  @media screen and (max-width: 500px){
    margin-top: 0;
  }
`;

export default Footer;
