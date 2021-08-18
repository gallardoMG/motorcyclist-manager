import styled from 'styled-components';

export const ButtonGeneric = styled.button`
  border: 1px solid transparent;
  height: 2.2rem;
  letter-spacing: 0.1rem;
  position: relative;
  cursor: pointer;
  width: 100%;
  color: 'black';
  background-color: 'whitesmoke';
  z-index: 1;
  &&::before {
    content: '';
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    background-color: #d7cdff;
    transition: width 0.3s;
    z-index: -1;
  }
  &&:hover&&::before {
    width: 100%;
  }
`;
