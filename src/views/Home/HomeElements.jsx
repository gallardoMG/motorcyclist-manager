import styled from 'styled-components';
export const ContainerHome = styled.section`
  background: rgb(80, 66, 139);
  background: linear-gradient(
    -20deg,
    rgba(80, 66, 139, 1) 0%,
    rgba(145, 123, 246, 1) 0%,
    rgba(80, 66, 139, 1) 100%
  );
  color: #dfdfdf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  p {
    text-align: center;
  }
  h1 {
    letter-spacing: 0.5rem;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  label {
    display: block;
  }
  input {
    margin: 0.5rem 0;
    border: 0.5px solid whitesmoke;
    outline: none;
    padding: 0.5rem;
    background-color: transparent;
    color: white;
  }
  input::placeholder {
    color: #cacaca;
  }
  fieldset {
    border-radius: 1rem;
    text-align: center;
    border: 1px solid transparent;
  }
  legend {
    letter-spacing: 0.2rem;
  }
`;
