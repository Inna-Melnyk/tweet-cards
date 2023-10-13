import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/logo.svg';
// import background from '../../assets/background.png';

export const Card = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  padding: 28px 36px;
  border-radius: 20px;
  background: linear-gradient(
    115deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23);

  &::after {
    position: absolute;
    left: 0;
    top: 218px;
    content: '';
    display: block;
    height: 8px;
    width: 380px;
    flex-shrink: 0;
    background: #ebd8ff;
    box-shadow:
      0px 3.43693px 2.5777px 0px #fbf8ff inset,
      0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
      0px -1.71846px 3.43693px 0px #ae7be3 inset;
  }
`;
export const AvatarWrapper = styled.div`
  position: absolute;
  height: 80px;
  width: 80px;
  top: 182px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  z-index: 1;
`;

export const OuterCircle = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  background-color: #ebd8ff;
  border-radius: 50%;
  top: 0;
  left: 0;
  box-shadow:
    0px 3.43693px 2.5777px 0px #fbf8ff inset,
    0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.06),
    0px -1.71846px 3.43693px 0px #ae7be3 inset;
`;

export const InnerCircle = styled.div`
  width: 62px;
  height: 62px;
  position: absolute;
  background-color: rgba(87, 54, 163, 1);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Avatar = styled.img`
  width: 100%;
  overflow: hidden;
  border-radius: 50%;
`;

export const Image = styled.img`
  width: 308px;
  height: 168px;
  margin-bottom: 88px;
`;
export const LogoIcon = styled(Logo)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const InfoWraper = styled.div`
  text-align: center;
`;
export const Text = styled.p`
  margin-bottom: 16px;
  color: #ebd8ff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

export const BottomText = styled(Text)`
  margin-bottom: 26px;
`;

export const Button = styled.button`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;

  width: 196px;
  padding: 14px 28px;
  border-radius: 10.311px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
`;

export const FollowButton = styled(Button)`
  background: #5cd3a8;
`;
