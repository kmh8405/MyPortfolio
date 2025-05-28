import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const words: string[] = ["Junior", "Fullstack", "Software"];

const Typewriter: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [showCursor, setShowCursor] = useState<boolean>(true);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isWordComplete = !isDeleting && charIndex === currentWord.length;
    const isWordDeleted = isDeleting && charIndex === 0;

    const typingSpeed = isDeleting ? 50 : 120;
    const pauseTime = isWordComplete ? 1000 : 0;

    const timer = setTimeout(() => {
      if (isWordComplete) {
        setIsDeleting(true);
      } else if (isWordDeleted) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        const updatedCharIndex = charIndex + (isDeleting ? -1 : 1);
        setCharIndex(updatedCharIndex);
        setText(currentWord.slice(0, updatedCharIndex));
      }
    }, pauseTime || typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <StyledWrapper>
      <div className="loader">
        <span className="loader-text">
          {text}
          <span className="cursor">{showCursor ? '|' : ' '}</span>
        </span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: inline-block;
  width: 250px; /* 너비 고정 */
  white-space: nowrap;
  overflow: hidden;
  vertical-align: bottom;

  .loader {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }

  .loader-text {
    font-size: 50px;
    font-weight: 700;
    background: linear-gradient(to right, #159957, #155799);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .cursor {
    font-weight: 400;
    font-size: 40px;
    color: #155799;
    transition: opacity 0.2s ease-in-out;
  }

  @media (max-width: 1024px) {
    width: 180px;

    .loader-text {
      font-size: 36px;
    }
    .cursor {
      font-size: 28px;
    }
  }

  @media (max-width: 640px) {
    width: 140px;

    .loader-text {
      font-size: 28px;
    }
    .cursor {
      font-size: 22px;
    }
  }
`;

export default Typewriter;