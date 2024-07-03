import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding:  120px 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
`;

const Module = styled.div`
  margin-bottom: 30px;
`;

const ModuleTitle = styled.h2`
  color: #007BFF;
  border-bottom: 2px solid #007BFF;
  padding-bottom: 5px;
`;

const ModuleContent = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: #555;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const CoursePage = () => {
  return (
    <Container>
      <Header>Project Management Training Course Curriculum</Header>

      <Module>
        <ModuleTitle>Module 1: Introduction to Project Management</ModuleTitle>
        <ModuleContent>
          <ListItem>Overview of Project Management</ListItem>
          <ListItem>Definition and importance of project management</ListItem>
          <ListItem>Key concepts and terminology</ListItem>
          <ListItem>Project Life Cycle</ListItem>
          <ListItem>Phases of project life cycle</ListItem>
        </ModuleContent>
      </Module>

      <Module>
        <ModuleTitle>Module 2: Project Initiation</ModuleTitle>
        <ModuleContent>
          <ListItem>Project selection methods</ListItem>
          <ListItem>Aligning projects with organizational strategy</ListItem>
          <ListItem>Project Charter</ListItem>
          <ListItem>Stakeholder Analysis</ListItem>
        </ModuleContent>
      </Module>

      <Module>
        <ModuleTitle>Module 3: Project Planning</ModuleTitle>
        <ModuleContent>
          <ListItem>Scope Management</ListItem>
          <ListItem>Time Management</ListItem>
          <ListItem>Cost Management</ListItem>
          <ListItem>Quality Management</ListItem>
          <ListItem>Risk Management</ListItem>
          <ListItem>Human Resource Management</ListItem>
          <ListItem>Communication Management</ListItem>
          <ListItem>Procurement Management</ListItem>
          <ListItem>Stakeholder Management</ListItem>
        </ModuleContent>
      </Module>

      <Module>
        <ModuleTitle>Module 4: Project Execution</ModuleTitle>
        <ModuleContent>
          <ListItem>Directing and Managing Project Work</ListItem>
          <ListItem>Team Management</ListItem>
          <ListItem>Communication Management</ListItem>
        </ModuleContent>
      </Module>

      <Module>
        <ModuleTitle>Module 5: Project Monitoring and Controlling</ModuleTitle>
        <ModuleContent>
          <ListItem>Performance Measurement</ListItem>
          <ListItem>Quality Control</ListItem>
          <ListItem>Change Management</ListItem>
          <ListItem>Risk Monitoring</ListItem>
        </ModuleContent>
      </Module>

      <Module>
        <ModuleTitle>Module 6: Project Closure</ModuleTitle>
        <ModuleContent>
          <ListItem>Closing Project or Phase</ListItem>
          <ListItem>Lessons Learned</ListItem>
          <ListItem>Administrative Closure</ListItem>
        </ModuleContent>
      </Module>

      <Module>
        <ModuleTitle>Module 7: Advanced Topics in Project Management</ModuleTitle>
        <ModuleContent>
          <ListItem>Agile Project Management</ListItem>
          <ListItem>Program and Portfolio Management</ListItem>
          <ListItem>Project Management Software Tools</ListItem>
        </ModuleContent>
      </Module>

      <Module>
        <ModuleTitle>Module 8: Project Management Professional (PMP) Preparation</ModuleTitle>
        <ModuleContent>
          <ListItem>PMP Exam Overview</ListItem>
          <ListItem>PMP Practice Questions</ListItem>
        </ModuleContent>
      </Module>
    </Container>
  );
}

export default CoursePage;
