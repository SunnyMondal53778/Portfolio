import styled from 'styled-components';

export const Div = styled.div`
  width: 600px;
  height: 500px;
  position: absolute;
  z-index: 0;
  pointer-events: none;
  
  @media screen and (min-width: 961px) {
    right: 150px;
    top: 50%;
    transform: translateY(-50%);
    width: 500px;
    height: 500px;
  }
  
  @media screen and (max-width: 960px) {
    left: 50%;
    top: calc(50% - 300px); // Moved from -350px to -300px to move down 50px
    transform: translate(-50%, -50%);
    width: 450px;
    height: 450px;
    opacity: 0.5;
  }

  @media screen and (max-width: 640px) {
    width: 320px;
    height: 320px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;