import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 36px;
  border: 0;
  border-radius: 4px;
  letter-spacing: 2px;
  color: #FFF;
  font: 700 14px Lato;
  background: ${({ theme }) => theme.colors.button};
  transition: background 0.2s;
  outline: 0;

  &:disabled {
    background: gray;
  }

  &:disabled:hover {
    background: gray;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.button_hover};
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
