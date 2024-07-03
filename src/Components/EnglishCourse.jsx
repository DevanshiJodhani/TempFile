import React from 'react';
import styled from 'styled-components';

const EnglishCourse = () => {
  const options = [
    {
      title: 'Introduction and Needs Assessment',
      info: [
        'Welcome and course overview',
        'Introduction of participants',
        "Assessing participants' current English proficiency levels",
        "Understanding participants' goals and expectations from the course",
      ],
    },
    {
      title: 'Building Basic Language Skills',
      info: [
        'Vocabulary building exercises',
        'Grammar basics and sentence structure',
        'Pronunciation practice',
        'Listening comprehension exercises',
      ],
    },
    {
      title: 'Conversational English Skills',
      info: [
        'Role-playing exercises for everyday conversations (e.g., greetings, introductions, ordering food)',
        'Practicing social conversations (e.g., making plans, asking for directions)',
        'Developing telephone conversation skills',
      ],
    },
    {
      title: 'Advanced Language Skills',
      info: [
        'Discussing complex topics (e.g., current events, cultural differences)',
        'Practicing giving opinions and expressing ideas',
        'Enhancing vocabulary for specific contexts (e.g., business, travel, academic)',
      ],
    },
    {
      title: 'Presentation and Public Speaking Skills',
      info: [
        'Presentation and Public Speaking Skills',
        'Practicing public speaking techniques',
        'Receiving feedback and improving presentation skills',
      ],
    },
    {
      title: 'Group Discussions and Debates',
      info: [
        'Facilitating group discussions on various topics',
        'Organizing debates to practice argumentation and persuasion',
      ],
    },
    {
      title: 'Cultural Awareness and Communication',
      info: [
        'Understanding cultural nuances in communication',
        'Practicing culturally appropriate language and behavior',
      ],
    },
    {
      title: 'Practical Applications',
      info: [
        'Simulated real-life situations (e.g., job interviews, meetings)',
        'Role-playing exercises for workplace scenarios',
        'Practical tasks to apply learned skills in real contexts',
      ],
    },
    {
      title: 'Review and Feedback',
      info: [
        'Reviewing progress and achievements',
        'Providing feedback on individual performance',
        'Addressing any remaining questions or concerns',
      ],
    },
    {
      title: 'Course Conclusion',
      info: [
        'Final assessment of learning outcomes',
        'Certificates or acknowledgments for participants',
        'Discussion of next steps for further improvement',
      ],
    },
  ];

  return (
    <Container>
      <Content>
        <Title>Curriculum</Title>
        <SubTitle>
          This course is designed to improve your English speaking skills, from
          basic to advanced levels. It is ideal for learners looking to enhance
          their communication for everyday interactions, professional settings,
          and more.
        </SubTitle>
        <About>
          {options.map((option, index) => (
            <Option key={index}>
              <Question>
                <p>{index + 1}</p>
                <h2>{option.title}</h2>
                <a>
                  <i className="bx bx-chevron-down"></i>
                </a>
              </Question>
              <Info>
                {option.info.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </Info>
            </Option>
          ))}
        </About>
      </Content>
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
  grid-gap: 40px;

  @media screen and (max-width: 990px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 20px;
  }
`;
const Info = styled.div`
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
  background: #fff;
  transition: height 0.5s ease;
  height: auto;
  min-height: 80px;
  
  &:hover {
    height: 250px;
    background: linear-gradient(90deg, #13f9fd37, #ffffff);
    p {
      box-shadow: rgb(76, 76, 77) 0px 10px 20px -10px;
    }
    ${Info} {
      display: block;
    }
  }

  ${Info} {
    display: none;
  }

  &:not(:hover) {
    height: 100px;
  }

  @media screen and (max-width: 550px) {
    &:hover {
      height: 300px;
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
      font-size: 18px;
    }
   p{
    width: 35px;
    height: 35px;
    font-size: 16px;
   }
    a {
      font-size: 25px;
    }
  }
`;

export default EnglishCourse;
