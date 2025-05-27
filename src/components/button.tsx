import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <StyledWrapper>
      <a className="codepen-button" onClick={onClick}>
        <span>{text}</span>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .codepen-button {
    display: block;
    cursor: pointer;
    color: white;
    margin: 0 auto;
    position: relative;
    text-decoration: none;
    font-weight: 600;
    border-radius: 6px;
    overflow: hidden;
    padding: 3px;
    isolation: isolate;
  }

  .codepen-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 400%;
    height: 100%;
    background: linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b);
    background-size: 25% 100%;
    animation: border-move .75s linear infinite;
    animation-play-state: paused;
    translate: -5% 0%;
    transition: translate 0.25s ease-out;
  }

  .codepen-button:hover::before {
    animation-play-state: running;
    transition-duration: 0.75s;
    translate: 0% 0%;
  }

  @keyframes border-move {
    to {
      transform: translateX(-25%);
    }
  }

  .codepen-button span {
    position: relative;
    display: block;
    padding: 0.5rem 0.5rem;
    font-size: 0.9rem;
    background: #000;
    border-radius: 3px;
    height: 100%;
  }
`;

export default Button;
