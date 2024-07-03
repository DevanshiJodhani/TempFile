import styled from 'styled-components';

const Project = () => {
  return (
    <Container>
      <h1>Project page</h1>
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

export default Project;
