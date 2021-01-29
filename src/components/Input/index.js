import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  width: 100%;
  padding: 8px 15px;
  outline: 0;
  color: #FFF;
  border-radius: 4px;
  margin-bottom: 24px;
`;

function Input({
  onChange,
  placeholder,
  name,
  value,
}) {
  return (
    <InputBase
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      value={value}
      autoComplete="off"
    />
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
