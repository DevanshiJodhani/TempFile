import styled from 'styled-components';

const Company = () => {
  return (
    <Container>
      <h1>Our Student work at</h1>
      <Content>
        <ImgBox>
          <img src="./images/microsoft.png" alt="" />
        </ImgBox>
        <ImgBox>
          <img src="./images/google.png" alt="" />
        </ImgBox>
        <ImgBox>
          <img src="./images/netflix.png" alt="" />
        </ImgBox>
        <ImgBox>
          <img src="./images/amazon.png" alt="" />
        </ImgBox>
        <ImgBox>
          <img src="./images/apple.png" alt="" />
        </ImgBox>
        <ImgBox>
          <img src="./images/adobe.png" alt="" />
        </ImgBox>
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

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 200px;
  height: auto;
  padding: 20px;
  margin-left: 50px;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
  }
`;

export default Company;
