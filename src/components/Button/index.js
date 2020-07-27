import styled from "styled-components";

const Button = styled.button`
  color: var(--white);
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  font-size: 30px;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button