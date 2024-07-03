import styled from 'styled-components';

const WorkShop = () => {
  return (
    <Container>
      <h1>For Whom Is This Workshop For</h1>
      <Content>
        <InfoBox>
          <img src="./images/student.png" alt="" />
          <h4>Students</h4>
        </InfoBox>
        <InfoBox>
          <img src="./images/freelancer.png" alt="" />
          <h4>Freelancers</h4>
        </InfoBox>
        <InfoBox>
          <img src="./images/jobProfessional.png" alt="" />
          <h4>Job Professionals</h4>
        </InfoBox>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;

  h1 {
    font-size: 40px;
    text-align: Center;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 40px;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 25px;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  margin-left: 60px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: 0.5s ease;

  img{
    width: 40px;
    margin-right: 10px;
  }
  h4 {
    font-size: 20px;
    color: #222;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px){
    margin-left: 0;
    margin-bottom: 20px;
  
  }

  @media screen and (max-width: 500px){
    width:300px;
  }
`;

export default WorkShop;
