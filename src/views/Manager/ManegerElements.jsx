import styled from 'styled-components';

export const WrapperManager = styled.section`
  display: flex;
  justify-content: center;
  background-color: whitesmoke;
`;

export const Header = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2rem;
  padding-left: 1rem;
  place-items: center;
  height: 4rem;
  grid-gap: 1rem;
  position: fixed;
  background-color: #543cb4;
  h2 {
    text-transform: uppercase;
    color: whitesmoke;
    letter-spacing: 0.3rem;
    word-spacing: 0.3rem;
  }
  @media (max-width: 800px) {
    font-size: 0.9rem;
    grid-template-columns: 0.5fr 1fr 1fr 0.5rem;
    text-align: center;
    h2 {
      font-size: 1rem;
    }
  }
`;
export const Table = styled.table`
  width: 80%;
  font-size: 1.2rem;
  margin-top: 4rem;
  border-collapse: collapse;
  thead {
    height: 3rem;
  }
  @media (max-width: 800px) {
    width: 95%;
    font-size: 1rem;
  }
`;

export const ListTable = styled.tr`
  cursor: pointer;
  background-color: ${({ status }) =>
    status === 'free'
      ? 'white'
      : status === 'NOT AVAILABLE'
      ? '#EA3F3F'
      : '#4BAC67'};
  color: ${({ status }) => (status !== 'free' ? 'white' : 'black')};
  text-align: center;
  border-bottom: 1rem solid whitesmoke;
  td:first-child {
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }
  td:last-child {
    border-bottom-right-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }
  ul {
    list-style-type: none;
    padding: 0.2rem 0.5rem;
  }
`;

export const ListUser = styled.li`
  display: inline;
  padding-left: 0;
  padding-left: 0;
  padding: 0 0.3rem;
  background-color: ${({ current }) =>
    current === 'current' ? 'white' : 'transparent'};
  color: ${({ current }) => (current === 'current' ? 'black' : '')};
  border-radius: 0.5rem;
  @media (max-width: 800px) {
    display: block;
  }
`;
