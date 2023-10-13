import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import background from '../../assets/home-background.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;
  height: 100vh;
  background-color: #512ca5;
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.2);
  background-image: url(${background});
  background-position: bottom 20px right 20px;
  background-repeat: no-repeat;
  background-size: 45%;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 82px;
  color: #ebd8ff;
  text-shadow:
    0 0 5px #ae7be3,
    0 0 5px #ae7be3,
    0 0 20px #ae7be3,
    0 0 5px #ae7be3,
    0 0 20px #ae7be3;
`;
export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 20px 80px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #512ca5;
  background-color: #ebd8ff;
  box-shadow:
    0px 3.43693px 2.5777px 0px #fbf8ff inset,
    0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
    0px -1.71846px 3.43693px 0px #ae7be3 inset;
  transition: background-color 300ms ease-in;

  &:hover {
    transform: scale(1.02);
  }
`;

