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
  padding: 24px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  form {
    width: 100%;
  }

  form p {
    margin: 0 0 24px 0;
    line-height: 16.8px;
  }

  form input {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.mainBg};
    width: 100%;
    padding: 8px 15px;
    outline: 0;
    color: #FFF;
    border-radius: 4px; 
  }

  form button {
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
    height: 36px;
    border: 0;
    border-radius: 4px;
    letter-spacing: 2px;
    color: #FFF;
    font: 700 14px Lato;
    background: ${({ theme }) => theme.colors.button};
    transition: background 0.2s;
  }

  form button:disabled {
    background: gray;
  }

  form button:disabled:hover {
    background: gray;
  }

  form button:hover {
    background: ${({ theme }) => theme.colors.button_hover};
  }
`;

export default Widget;
