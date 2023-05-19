import styled from 'styled-components';
import { COLOR } from '../../constants';

// styled component
import * as S from '../common/Button.style';
const { subFontColor } = COLOR;

export const Container = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentShow = styled.div`
  flex: 0 1 350px;
  width: 100%;
  border: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 2px 2px ${subFontColor};
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.themeStyle.fontColor};
  }
`;

export const CommentForm = styled.form`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommentArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border-radius: 4px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.themeStyle.inputBorderColor};
  color: ${(props) => props.theme.themeStyle.fontColor};
  resize: none;
  margin-right: 0.5rem;
`;

export const YellowBtnCustom = styled(S.YellowBtn)`
  font-size: 0.8rem;
  height: 100px;
  border: 1px solid ${subFontColor};
  @media ${(props) => props.theme.breakpoints.TABLETMIN} {
    font-size: 1rem;
  }
`;
