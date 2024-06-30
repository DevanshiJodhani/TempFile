import styled from 'styled-components';

const Advantage = () => {
  return (
    <Container>
      <h1>Why Join Could Computing Master Class</h1>
      <Content>
        <InfoBox>
          <Img>
            <img src="./images/teacher.png" alt="" />
          </Img>
          <div>
            <h4>Expert Instruction:</h4>
            <p>
              Learn from industry professionals with years of experience in
              cloud technologies. Our instructors bring real-world insights and
              practical knowledge to the classroom, ensuring you gain the most
              relevant skills.
            </p>
          </div>
        </InfoBox>
        <InfoBox>
          <Img>
            <img src="./images/book.png" alt="" />
          </Img>
          <div>
            <h4>Comprehensive Curriculum:</h4>
            <p>
              Cover all essential topics from basics to advanced cloud concepts.
              Our curriculum is designed to provide a solid foundation and deep
              understanding of cloud computing, preparing you for various roles
              in the industry.
            </p>
          </div>
        </InfoBox>
        <InfoBox>
          <Img>
            <img src="./images/laptop.png" alt="" />
          </Img>
          <div>
            <h4>Hands-On Projects:</h4>
            <p>
              Gain practical experience through real-world projects and labs.
              Engage in exercises that simulate real-world scenarios, allowing
              you to apply what you've learned in a practical context.
            </p>
          </div>
        </InfoBox>
        <InfoBox>
          <Img>
            <img src="./images/certificate.png" alt="" />
          </Img>
          <div>
            <h4>Certification:</h4>
            <p>
              Earn a recognized certificate to enhance your professional
              credentials. Our certification is a testament to your knowledge
              and skills, making you stand out in the job market and increasing
              your career opportunities.
            </p>
          </div>
        </InfoBox>
        <InfoBox>
          <Img>
            <img src="./images/clock.png" alt="" />
          </Img>
          <div>
          <h4>Flexible Learning:</h4>
          <p>
            Access live sessions and recorded materials to study at your own
            pace. Our flexible learning approach ensures you can balance your
            studies with your personal and professional commitments.
          </p>
          </div>
        </InfoBox>
        <InfoBox>
          <Img>
          <img src="./images/people.png" alt="" />
          </Img>
          <div>
          <h4>Networking Opportunities:</h4>
          <p>
            Connect with fellow learners and industry experts. Build a network
            of peers and professionals that can support your career growth and
            provide valuable insights and opportunities.
          </p>
          </div>
        </InfoBox>
        {/* <InfoBox>
          <h4>Career Advancement: </h4>
          <p>
            Equip yourself with skills in high demand by employers. Cloud
            computing is one of the fastest-growing fields, and our masterclass
            prepares you to meet the demands of employers looking for skilled
            cloud professionals.
          </p>
        </InfoBox>
        <InfoBox>
          <h4>Cost Management Techniques:</h4>
          <p>
            Learn strategies to optimize and manage cloud costs effectively. Our
            course covers best practices for cost management, helping you
            maximize the efficiency and value of cloud resources in any
            organization.
          </p>
        </InfoBox> */}
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
  margin-top: 30px;

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
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 2fr));
  grid-gap: 50px;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  margin-right: 20px;
  img {
    width: 100%;
  }

  @media screen and (max-width: 500px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 140px;
  }
`;

const InfoBox = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

  h4 {
    font-size: 20px;
    margin-bottom: 5px;
    color: #333;
  }
  p {
    padding: 10px;
    color: #464646;
  }
  @media screen and (max-width: 500px){
    display: flex;
    flex-direction: column;
    width: 100%;

    h4{
      margin-top: 20px;
    }

    p{
      padding: 0;
    }
  }
`;

export default Advantage;
