import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  //box-shadow: 1px 1px 5px ${({ theme }) => theme.colors.mainBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 24px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  form {
    width: 100%;
  }

  form > p {
    margin: 0 0 24px 0;
    line-height: 16.8px;
  }

  button + p {
    margin: 20px 0 0 0;
    font-size: 16px;
  }

  a > button {
    letter-spacing: 0;
    font-size: 16px;
    font-weight: bold;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .2s;
  display: block;
  color: #EEE;
  
  &:hover,
  &:focus {
    opacity: .8;
  }

  & + button {
    margin-top: 10px;
  }

  input[type=radio] {
    margin: 0 10px 0 0;
  }
`;

export default Widget;
