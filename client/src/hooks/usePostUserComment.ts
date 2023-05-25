import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserCommentsAPI } from '../api/client';
import { useAppSelector } from './reduxHook';
import { getUserIdFromAccessToken } from '../utils/getUserIdFromAccessToken';

const { postUserComment } = UserCommentsAPI;

export const usePostUserComment = (userId: number) => {
  const token = localStorage.getItem('accessToken');
  const isLogin = useAppSelector((state) => state.login.isLogin);
  const writerId = getUserIdFromAccessToken(isLogin, token);

  const queryClient = useQueryClient();
  const { mutate: postUserCommentMutation } = useMutation(postUserComment, {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(['userComments', userId]);
      queryClient.invalidateQueries(['commentsToUser', userId]);
    },
  });
  const handlerPostUserComment = async (
    userId: number,
    content: string,
    userCommentStatus: 'PUBLIC' | 'PRIVATE',
  ) => {
    if (writerId) {
      postUserCommentMutation({ userId, writerId, content, userCommentStatus });
    }
  };
  return { handlerPostUserComment };
};
