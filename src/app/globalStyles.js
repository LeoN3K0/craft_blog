import styled from '@emotion/styled';

export const CoolText = styled.span`
  font-weight: bold;
  font-size: large;
  background: linear-gradient(to right, yellow 20%, white 60%, orange 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 5s ease-in-out infinite alternate;
  @keyframes textShine {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 50% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;
