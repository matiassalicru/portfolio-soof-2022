import styled from "styled-components";
import { device } from "../../constants";

export const SCFooterContainer = styled.div` 
  width: auto;
  padding: 10px;
  text-align: center;
  margin: 0 auto;
  white-space: nowrap; 
  box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.neon};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;

  @media ${device.tablet} {
    padding: 10px 0;
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 18px;
  }
`

export const SCLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color};
  margin-left: 3px;
  color: ${({ theme }) => theme.neon};

  &:hover {
    filter: drop-shadow(1px 1px 6px ${({ theme }) => theme.neon});
  }
`
