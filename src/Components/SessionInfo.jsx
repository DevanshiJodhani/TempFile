import styled from 'styled-components';

const SessionInfo = () => {
  return (
    <Container>
      <Wrapper>
        <InfoBox>
          <i className="bx bxs-calendar"></i>
          On July 2, 2024
        </InfoBox>
        <InfoBox>
          <i className="bx bxs-hourglass-top"></i>
          3+ Hours
        </InfoBox>
        <InfoBox>
          <i className="bx bxs-video"></i>
          Live Session
        </InfoBox>
        <InfoBox>
          <i className="bx bxs-time"></i>
          11:00 am Onwards
        </InfoBox>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 20px;
  align-items: center;
  margin-top: 20px;
  color: #000;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-bottom: 10px;
  }
`;
const InfoBox = styled.div`
  background: #d7d7d7;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 16px;

  i {
    font-size: 25px;
    margin-right: 10px;
  }

  @media screen and (max-width: 500px){
    padding: 15px;
  }
`;

export default SessionInfo;
