import styled from 'styled-components';

export const Body = styled.body`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  font-family: sans-serif;
  font-size: 18px;
  padding: 0 30px;
  margin: 0px;
  outline: 0px;
  box-sizing: border-box;
  transition: ease-in-out, .35s ease-in-out;
`;

export const Header = styled.header`
  text-align: center;
  padding 30px 0;
`;