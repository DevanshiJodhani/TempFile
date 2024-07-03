import styled from 'styled-components';
import CountDown from './CountDown';
import SessionInfo from './SessionInfo';
import Advantage from './Advantage';
import Testimonials from './Testimonials';
import Company from './Company';
import WorkShop from './WorkShop';
import Form from './Form';
import EnglishCourse from './EnglishCourse';

const Home = () => {
  return (
    <Container id="home">
      <Content>
        <Title>English Speaking Course</Title>
        <SubTitle>
        Unlock Your Potential with <span>Fluent English</span>
        </SubTitle>
        <MainBox>
          <ImgBox>
            <img src="./images/home.svg" alt="" />
          </ImgBox>
          <Info>
            <CountDown />
            <SessionInfo />
          </Info>
        </MainBox>
      </Content>
      <EnglishCourse />
      <Advantage />
      <Company />
      <WorkShop />
      <Testimonials />
      <Form />
    </Container>
  );
};

const Container = styled.div`
  padding: 80px 40px;

  @media screen and (max-width: 990px) {
    padding: 60px 20px;
  }
  @media screen and (max-width: 500px) {
    padding: 60px 0px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 120px;

  @media screen and (max-width: 990px) {
    padding: 20px 60px;
  }
  @media screen and (max-width: 500px) {
    padding: 20px 20px;
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 40px;
  color: #000;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

const SubTitle = styled.p`
  margin-top: 15px;
  text-align: center;
  line-height: 1.3;
  font-size: 22px;
  color: #333;

  span{
    font-weight: 900;
    color: #ff0000;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const MainBox = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0px 80px; */

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    margin-top: 40px;
  padding: 0px;
  }
`;

const ImgBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export default Home;
