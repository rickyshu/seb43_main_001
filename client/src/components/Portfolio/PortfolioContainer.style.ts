import styled from 'styled-components';
import { COLOR, MAX_SIZE } from '../../constants';

const { mainColor, subFontColor } = COLOR;

const { content } = MAX_SIZE;
export const PortfolioLayout = styled.div`
  width: 100%;
  margin: 5rem 0;

  @media ${(props) => props.theme.breakpoints.TABLETMIN} {
    padding: 0 50px;
  }

  @media ${(props) => props.theme.breakpoints.DESKTOPMIN} {
    max-width: ${content};
    padding: 0 85px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  gap: 0.5rem;
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  background-color: ${mainColor};
  border-radius: 10px;
  font-weight: bold;
  padding: 0.5rem;
  height: 30px;

  @media ${(props) => props.theme.breakpoints.TABLETMIN} {
    font-size: 1.1rem;

    height: 40px;
  }

  @media ${(props) => props.theme.breakpoints.DESKTOPMIN} {
    max-width: ${content};

    font-size: 1.5rem;
  }
`;

export const PrevBtn = styled(SubmitBtn)`
  background-color: ${subFontColor};
  color: white;
`;
