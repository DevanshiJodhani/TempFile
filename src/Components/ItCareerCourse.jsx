import styled from 'styled-components';
import CountDown from './CountDown';
import SessionInfo from './SessionInfo';
import { useState } from 'react';
import Form from './Form';

const ItCareerCourse = () => {
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredOption(index);
  };

  const handleMouseLeave = () => {
    setHoveredOption(null);
  };

  const options = [
    {
      title: 'Introduction to IT Industry',
      details: [
        {
          submodule: '1.1 Overview of the IT Industry',
          items: [
            'History and evolution of IT',
            'Importance of IT in various sectors',
            'Current trends and future outlook',
          ],
        },
        {
          submodule: '1.2 Benefits of a Career in IT',
          items: [
            'Job security and growth potential',
            'Diverse opportunities and roles',
            'Competitive salaries and benefits',
          ],
        },
      ],
    },
    {
      title: 'Understanding IT Roles',
      details: [
        {
          submodule: '2.1 IT Support and Help Desk',
          items: [
            'Role and responsibilities',
            'Required skills and certifications',
            'Career progression',
          ],
        },
        {
          submodule: '2.2 Network and System Administration',
          items: [
            'Role and responsibilities',
            'Required skills and certifications',
            'Career progression',
          ],
        },
        {
          submodule: '2.3 Database Administration',
          items: [
            'Role and responsibilities',
            'Required skills and certifications',
            'Career progression',
          ],
        },
        {
          submodule: '2.4 Sales & Presale',
          items: [
            'Role and responsibilities',
            'Required skills and certifications',
            'Career progression',
          ],
        },
        {
          submodule: '2.5 Cloud Computing',
          items: [
            'Role and responsibilities',
            'Required skills and certifications',
            'Career progression',
          ],
        },
        {
          submodule: '2.6 IT Project Management',
          items: [
            'Role and responsibilities',
            'Required skills and certifications',
            'Career progression',
          ],
        },
        {
          submodule: '2.7 Storage/Backup Admin',
          items: [
            'Role and responsibilities',
            'Required skills and certifications',
            'Career progression',
          ],
        },
      ],
    },
    {
      title: 'Educational Pathways and Certifications',
      details: [
        {
          submodule: '3.1 Formal Education',
          items: [
            'Degrees in Computer Science, Information Technology, etc.',
            'Pros and cons of formal education',
          ],
        },
        {
          submodule: '3.2 Online Courses and Bootcamps',
          items: [
            'Popular platforms (Coursera, Udacity, etc.)',
            'Intensive coding bootcamps',
          ],
        },
        {
          submodule: '3.3 Certifications',
          items: [
            'Network+, Security+',
            'Cisco Certified Network Associate (CCNA)',
            'Certified Information Systems Manager (CISSP)',
            'Microsoft Azure, AWS, and Google Cloud certifications',
          ],
        },
      ],
    },
    {
      title: 'Gaining Practical Experience',
      details: [
        {
          submodule: '4.1 Internships and Apprenticeships',
          items: [
            'Finding and applying for internships',
            'Benefits of hands-on experience',
          ],
        },
        {
          submodule: '4.2 Preparing for Interviews',
          items: [
            'Common interview questions for IT roles',
            'Technical assessments and coding challenges',
          ],
        },
      ],
    },
    {
      title: 'Professional Development and Growth',
      details: [
        {
          submodule: '5.1 Continuing Education and Certifications',
          items: [
            'Importance of lifelong learning',
            'Keeping up with industry trends and technologies',
          ],
        },
        {
          submodule: '5.2 Industry Insights',
          items: [
            'Insights from industry experts',
            'Future trends and opportunities in IT',
          ],
        },
        {
          submodule: '5.3 Review and Feedback',
          items: [
            'Reviewing course content',
            'Providing feedback and planning next steps',
          ],
        },
      ],
    },
  ];

  return (
    <Container>
      <Content>
        <Title>How to Start a Career in IT and Available Roles</Title>
        <SubTitle>
        Navigate the IT World:
          <span> Your Gateway to Thriving Careers</span>
        </SubTitle>
        <MainBox>
          <ImgBox>
            <img src="./images/itCourse.svg" alt="IT Course" />
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
        Kickstart your IT career with this essential guide! Explore key IT roles, educational paths, and certifications. Gain practical experience and learn how to excel in interviews. Start building your IT future now!
        </TagLine>
        <About>
          {options.map((option, index) => (
            <Option
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              isOpen={hoveredOption === index}
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
                {option.details.map((detail, idx) => (
                  <div key={idx}>
                    <h3>{detail.submodule}</h3>
                    <ul>
                      {detail.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
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
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 50px;
  padding: 15px;

  div {
    margin-bottom: 15px;
  }

  h3 {
    margin: 0 0 10px 0;
    font-size: 16px;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;

    li {
      font-size: 14px;
      line-height: 1.5;
    }
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  background-color: #f6f6f6;
  transition: max-height 0.5s ease, background 0.5s ease;
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '80px')};
  overflow: hidden;

  &:hover {
    background: linear-gradient(90deg, #13f9fd37, #ffffff);
    p {
      box-shadow: rgb(76, 76, 77) 0px 10px 20px -10px;
    }
    ${Detail} {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-gap: 50px;

      @media screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
    }
  }

  ${Detail} {
    margin-top: 20px;
    padding: 10px;
    font-size: 17px;
    line-height: 1.3;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 50px;
    opacity: 1;
    transition: opacity 0.5s ease;

    @media screen and (max-width: 600px) {
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  @media screen and (max-width: 550px) {
    &:hover {
      max-height: 1000px;
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

export default ItCareerCourse;
