import styled from 'styled-components';

const Testimonials = () => {
  return (
    <Container>
      <h1>Testimonials</h1>
      <Content>
        <Row>
          <Col>
            <User>
              <img src="./images/profile_1.jpeg" alt="" />
              <div>
                <h4>Rose Lio</h4>
                <small>@roselio</small>
              </div>
              <UserIcon>
                <i className="bx bxl-twitter"></i>
              </UserIcon>
            </User>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              mollitia aliquid culpa neque? Deserunt, ab aspernatur doloribus
              ullam nobis fuga adipisci laborum quas id obcaecati voluptas
              facilis vero nihil quis.
            </p>
          </Col>
          <Col>
            <User>
              <img src="./images/profile_2.jpeg" alt="" />
              <div>
                <h4>Trusha Desai</h4>
                <small>@desaitrusha</small>
              </div>
              <UserIcon>
                <i className="bx bxl-twitter"></i>
              </UserIcon>
            </User>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              mollitia aliquid culpa neque? Deserunt, ab aspernatur doloribus
              ullam nobis fuga adipisci laborum quas id obcaecati voluptas
              facilis vero nihil quis.
            </p>
          </Col>
          <Col>
            <User>
              <img src="./images/profile_3.jpeg" alt="" />
              <div>
                <h4>Smith Jack</h4>
                <small>@jacksmith</small>
              </div>
              <UserIcon>
                <i className="bx bxl-twitter"></i>
              </UserIcon>
            </User>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              mollitia aliquid culpa neque? Deserunt, ab aspernatur doloribus
              ullam nobis fuga adipisci laborum quas id obcaecati voluptas
              facilis vero nihil quis.
            </p>
          </Col>
        </Row>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  h1 {
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
`;

const Row = styled.div`
  width: 80%;
  margin: auto;
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Col = styled.div`
  flex-basis: 28%;
  padding: 10px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 10px 20px 3px #00000028;
  cursor: pointer;
  transition: 0.5s;

  p {
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    padding: 8px;
  }

  @media screen and (max-width: 768px) {
    flex-basis: 70%;
  }
  @media screen and (max-width: 500px) {
    flex-basis: 100%;
  }
`;

const User = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 20px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    object-position: center;
    margin-right: 20px;
    border-radius: 8px;
  }
`;

const UserIcon = styled.div`
margin-left: 10px;
    i {
      color: #27c0ff;
      font-size: 35px;
    }
`;

export default Testimonials;
