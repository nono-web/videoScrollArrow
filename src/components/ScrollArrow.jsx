import React from 'react';
import styled, { keyframes } from 'styled-components';
import { desktop } from '../responsive';

const Container = styled.div`
`;

const bump = keyframes`

0% {
  bottom: 0;
}
25% {
  bottom: 0.5px;
}
50% {
  bottom: 0.6px;
}
75% {
  bottom: 0.5px;
}
100% {
  bottom: 0;
}

`;

const ScrollTop = styled.div`
  color: black;
  width: 3rem;
  height: 3rem;
  position: fixed;
  bottom: 1vh;
  animation: ${bump} 2s infinite linear alternate;
  cursor: pointer;
  opacity: 0;
  right:0.4vw;
  &:hover {
    opacity:5;
  }
  ${desktop({opacity: 0.2})}
`;

const ScrollArrow = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <ScrollTop onClick={scrollTop}>
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M11 16h2v-4.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6Zm1 6q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Zm0-8Z"
          ></path>
        </svg>
      </ScrollTop>
    </Container>
  );
};

export default ScrollArrow;