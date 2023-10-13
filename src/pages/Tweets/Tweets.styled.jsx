import styled from '@emotion/styled';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 50px 100px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #501a97;
  text-align: center;
  margin-bottom: 50px;
  font-size: 48px;
  font-weight: 600px;
  text-decoration: underline;
`;
export const BackIcon = styled(RiArrowGoBackFill)`
  fill: #ebd8ff;
`;
export const BackLink = styled(Link)`
  background-color: #512ca5;
  color: #ebd8ff;
  padding: 10px 40px;
  border-radius: 8px;
  display: inline-flex;
  gap: 15px;
  transition: background-color 300ms ease-in;

  &:hover {
    transform: scale(1.02);
  }
`;
