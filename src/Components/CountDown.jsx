import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CountDown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-07-10T11:00:00');
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval}>
        <TimeBox>{timeLeft[interval]}</TimeBox>
        <Label>{interval}</Label>
      </div>
    );
  });

  return (
    <Content>
      <p>Workshop Starts In:</p>
      <CountdownWrapper>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </CountdownWrapper>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #000;
    font-size: 30px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 500px){
    p{
    font-size: 18px;
    margin-bottom: 10px;
    }
  }
`;

const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  span{
    color: #000;
  }
`;

const TimeBox = styled.div`
  font-size: 45px;
  background: #000;
  padding: 30px;
  margin: 5px;
  border-radius: 5px;
  @media screen and (max-width: 500px){
    padding: 12px;
  }
`;

const Label = styled.div`
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
  color: #000;
`;

export default CountDown;
