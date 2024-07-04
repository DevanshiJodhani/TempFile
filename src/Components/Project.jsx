import React, { useState } from 'react';
import styled from 'styled-components';
import CountDown from './CountDown';
import SessionInfo from './SessionInfo';
import Form from './Form';
const Project = () => {
  const options = [
    {
      title: 'Introduction to Project Managemen',
      info: [
        'Overview of Project Management',
        'Definition and importance of project management',
        'Key concepts and terminology',
        'Project Life Cycle',
        'Phases of project life cycle',
      ],
    },
    {
      title: 'Project Initiation',
      info: [
        'Project selection methods',
        'Aligning projects with organizational strategy',
        'Project Charter',
        'Stakeholder Analysis',
      ],
    },
    {
      title: 'Project Planning',
      info: [
        'Scope Management',
        'Time Management',
        'Cost Management',
        'Quality Management',
        'Risk Management',
        'Human Resource Management',
        'Communication Management',
        'Procurement Management',
        'Stakeholder Management',
      ],
    },
    {
      title: 'Project Execution',
      info: [
        'Directing and Managing Project Work',
        'Team Management',
        'Communication Management',
      ],
    },
    {
      title: 'Project Monitoring and Controlling',
      info: [
        'Performance Measurement',
        'Quality Control',
        'Change Management',
        'Risk Monitoring',
      ],
    },
    {
      title: 'Project Closure',
      info: [
        'Closing Project or Phase',
        'Lessons Learned',
        'Administrative Closure',
      ],
    },
    {
      title: 'Advanced Topics in Project Management',
      info: [
        'Agile Project Management',
        'Program and Portfolio Management',
        'Project Management Software Tools',
      ],
    },
    {
      title: 'Project Management Professional (PMP)',
      info: ['Preparation', 'PMP Exam Overview', 'PMP Practice Questions'],
    },
  ];

  const [hoveredOption, setHoveredOption] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredOption(index);
  };

  const handleMouseLeave = () => {
    setHoveredOption(null);
  };

  return (
    <Container id='#'>
      <Content>
        <Title>Project Management Training Course</Title>
        <SubTitle>
          Transform Your Career with Expert Training and{' '}
          <span>Real-World Skills!</span>
        </SubTitle>
        <MainBox>
          <ImgBox>
            <img src="./images/project1.png" alt="" />
          </ImgBox>
          <Info>
            <CountDown />
            <SessionInfo />
          </Info>
        </MainBox>
      </Content>
      <Content>
        <Title>Curriculum</Title>
        <TagLine>
        This course equips you with essential project management skills, from foundational principles to advanced strategies. Ideal for aspiring project managers and professionals seeking to enhance their leadership and execution capabilities in managing successful projects.
        </TagLine>
        <About>
          {options.map((option, index) => (
            <Option
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Question>
                <p>{index + 1}</p>
                <h2>{option.title}</h2>
                <a>
                  <i
                    className={`bx ${
                      hoveredOption === index
                        ? 'bx-chevron-up'
                        : 'bx-chevron-down'
                    }`}
                  ></i>
                </a>
              </Question>
              <Detail>
                {option.info.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </Detail>
            </Option>
          ))}
        </About>
      </Content>
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
  text-align: center;
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

  span {
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

const TagLine = styled.p`
  margin-top: 15px;
  text-align: center;
  line-height: 1.3;
  font-size: 18px;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const About = styled.div`
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 50px;

  @media screen and (max-width: 990px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 20px;
  }
`;

const Detail = styled.div`
  margin-top: 20px;
  padding: 10px;

  li {
    font-size: 17px;
    line-height: 1.3;
    margin-bottom: 5px;
  }
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  background-color: #f6f6f6;
  transition: max-height 0.5s ease, background 0.5s ease;
  max-height: 80px;
  overflow: hidden;

  &:hover {
    max-height: 500px;
    background: linear-gradient(90deg, #13f9fd37, #ffffff);
    p {
      box-shadow: rgb(76, 76, 77) 0px 10px 20px -10px;
    }
    ${Detail} {
      display: block;
    }
  }

  ${Detail} {
    margin-top: 20px;
    padding: 10px;
    font-size: 17px;
    line-height: 1.3;
    display: block;
    opacity: 1;
  }

  @media screen and (max-width: 550px) {
    &:hover {
      max-height: 500px;
    }
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  a {
    font-size: 30px;
  }
  p {
    width: 50px;
    height: 50px;
    background: #eeeeee;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  @media screen and (max-width: 450px) {
    h2 {
      font-size: 16px;
    }
    p {
      width: 35px;
      height: 35px;
      font-size: 16px;
    }
    a {
      font-size: 25px;
    }
  }
`;

export default Project;
