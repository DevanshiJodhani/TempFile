import styled from 'styled-components';

const Form = () => {
  return (
    <Container>
      <h1>Join the Master class</h1>
      <Content>
        <Left>
          <form action="#">
            <input type="text" placeholder="Enter name" />
            <input type="email" placeholder="Enter email" />
            <input type="number" placeholder="Enter Phone" />
            <button type="submit">Submit</button>
          </form>
        </Left>
        <Right>
          <img src="./images/join.png" alt="" />
          <h3>
            Join Our Master Class In<OldPrice>₹1000</OldPrice>
            <NewPrice>ONLY ₹ 100</NewPrice>
          </h3>
          <button type="submit">Pay Now</button>
        </Right>
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
  margin-top: 20px;

  h1 {
    font-size: 40px;
    text-align: center;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  @media screen and (max-width: 700px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    outline: none;
    border: 1px solid #222;
    background: transparent;
    padding: 10px;
    font-size: 16px;
    border-radius: 12px;
  }

  button {
    padding: 16px 30px;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 900;
    color: #fff;
    border-radius: 8px;
    background: #007bff;
    cursor: pointer;

    &:hover {
      background: #0056b3;
    }
  }

  @media screen and (max-width: 700px){
    width: 100%;
    margin-bottom: 50px;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    margin-bottom: 30px;
  }

  h3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin-bottom: 50px;
    
  }

  button {
    padding: 16px 30px;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 900;
    color: #fff;
    border-radius: 8px;
    background: #007bff;
    cursor: pointer;

    &:hover {
      background: #0056b3;
    }
  }

  @media screen and (max-width: 700px){
    width: 100%;
    h3{
      font-size: 16px;
    }
  }


  @media screen and (max-width: 500px){
    h3{
      font-size: 16px;
    }
  }

`;

const OldPrice = styled.span`
  text-decoration: line-through;
`;

const NewPrice = styled.span`
  color: #ff0000;
  font-size: 30px;
  margin-left: 10px;
  margin-top: 10px;

  @media screen and (max-width: 500px){
    font-size: 20px;
  }
`;

export default Form;