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
    <Container id="#">
      <h1>What We have in Platter</h1>

      <Content>
        <CourseBox href="/englishCourse">
          <ImgBox>
            <img src="./images/director_1.png" alt="" />
          </ImgBox>
          <Title>
            <h3>English speaking and personality development</h3>
          </Title>
        </CourseBox>
        <CourseBox href="/projectCourse">
          <ImgBox>
            <img src="./images/analitycs_1.png" alt="" />
          </ImgBox>
          <Title>
            <h3>Data Analytics and project management</h3>
          </Title>
        </CourseBox>
        <CourseBox href='/itCareerCourse'>
          <ImgBox>
            <img src="./images/suitcase_1.png" alt="" />
          </ImgBox>
          <Title>
            <h3>How to start career in it</h3>
          </Title>
        </CourseBox>
        <CourseBox>
          <ImgBox>
            <img src="./images/techonology_1.png" alt="" />
          </ImgBox>
          <Title>
            <h3>It technology courses</h3>
          </Title>
        </CourseBox>
      </Content>

      {/* <EnglishCourse /> */}
      {/* <Form /> */}
      {/* <Advantage /> */}
      {/* <Company /> */}
      {/* <WorkShop /> */}
      {/* <Testimonials /> */}
    </Container>
  );
};

const Container = styled.div`
  /* padding: 10px 40px; */
  padding: 120px 20px;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 30px;
    font-size: 40px;
    color: #333;
  }

  @media screen and (max-width: 990px) {
    padding: 60px 20px;
  }
  @media screen and (max-width: 500px) {
    padding: 60px 10px;
    margin-top: 40px;

    h1{
      font-size: 30px;
    }
  }
`;

const Content = styled.div`
  padding: 20px 120px;
  margin: 0 auto;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 50px;

  @media screen and (max-width: 1250px) {
  
    grid-gap: 20px;
    padding: 20px 0;
  }

  @media screen and (max-width: 900px){
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    
  } 
  @media screen and (max-width: 500px){
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  margin-top: 20px;
  }
`;

const CourseBox = styled.a`
  max-width: 230px;
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

`;

const ImgBox = styled.div`
  max-width: 220px;
  width: 100%;
  height: 220px;
  background: #5b97e64a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25% 0% 28% 0% / 29% 25% 25% 25%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const Title = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h3 {
    font-size: 20px;
    line-height: 1.3;
    color: #333;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export default Home;
