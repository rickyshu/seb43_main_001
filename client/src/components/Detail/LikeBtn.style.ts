import styled from 'styled-components';

// icons
import { RxHeartFilled } from 'react-icons/rx';

// constants
import { COLOR } from '../../constants';

type LikeBtnWrapperProps = {
  likes: boolean;
};

const { subFontColor } = COLOR;

export const LikeBtnWrapper = styled.section<LikeBtnWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  position: fixed;
  top: 50%;
  right: 8%;
  border-radius: 50%;
  border: 1px solid ${(props) => (props.likes ? 'red' : `${subFontColor}`)};
  background-color: transparent;
  z-index: 2;
  & svg {
    color: ${(props) => (props.likes ? 'red' : `${subFontColor}`)};
  }
  cursor: pointer;
  &:active,
  &:hover {
    border: 1px solid ${(props) => (props.likes ? `${subFontColor}` : 'red')};
    svg {
      color: ${(props) => (props.likes ? `${subFontColor}` : 'red')};
    }
  }
`;

export const LikeIcon = styled(RxHeartFilled)`
  font-size: 40px;

  @media ${({ theme }) => theme.breakpoints.TABLETMIN} {
    font-size: 33px;
  }
`;
