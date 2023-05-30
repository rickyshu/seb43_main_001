// User Profile
export type GetUserProfile = {
  userId: number;
  email: string;
  name: string;
  profileImg: string;
  gitLink: string;
  blogLink: string;
  grade: string;
  jobStatus: string;
  about: string;
  createdAt: string;
  updatedAt: string;
  auth: boolean;
};

export type GetUserPortfolio = {
  portfolioId: number;
  title: string;
  gitLink: string;
  distributionLink: string;
  description: string;
  content: string;
  viewCount: number;
  skills: string[];
  createdAt: number[];
  updatedAt: number[];
  representativeImgUrl: string;
  likesCount: number;
};

export type GetUserPortfolioPage = {
  currentPage: number;
  data: GetUserPortfolio[];
  pageInfo: PageInfo;
};

export type GetUserComment = {
  // 댓글 공통
  userId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  auth: boolean;
  deletable: boolean;
  status: 'PUBLIC' | 'PRIVATE';

  // 유저 댓글
  writerProfileImg?: string;
  writerId?: number;
  writerName?: string;
  userCommentId?: number;

  // 포트폴리오 댓글
  userName?: string;
  userProfileImg?: string;
  portfolioCommentId?: number;
  portfolioId?: number;
};

export type GetUserCommentPage = {
  currentPage: number;
  data: GetUserComment[];
  pageInfo: PageInfo;
};

export type PostUserComment = {
  userId: number;
  writerId: number;
  content: string;
  userCommentStatus: 'PUBLIC' | 'PRIVATE';
};

export type PatchUserProfile = {
  userId: number;
  name: string;
  profileImg: string;
  gitLink: string;
  blogLink: string;
  jobStatus: string;
  about: string;
};

export type PatchUserComment = {
  userId: number;
  content: string;
  path: string;

  pathId: number;
  commentId: number;
};

export type DeleteUserComment = {
  commentId: number;
  path: string;
};

// Portfolio

export type postDto = {
  userId: number;
  title: string;
  gitLink: string;
  distributionLink: string;
  description: string;
  content: string;
  skills: string[];
};

export type PostPortfolio = {
  postDto: postDto;
  representativeImg?: File | null;
  files?: File | null;
};

export type PatchPortfolio = {
  portfolioId: number;
  postDto: postDto;
  representativeImg?: File | null;
  files?: File | null;
};

export type GetPortfolio = {
  auth: boolean;
  portfolioId: number;
  userId: number;
  name: string;
  title: string;
  gitLink: string;
  distributionLink: string;
  description: string;
  content: string;
  imgUrl: string;
  fileUrl: string;
  viewCount: number;
  skills: string[];
  updatedAt: string;
  createdAt: string;
  representativeImgUrl: string;
  likes: boolean;
  likesCount: number;
  profileImg: string;
};

type PageInfo = {
  totalElements: number;
  totalPages: number;
};

export type GetPortfolioPage = {
  currentPage: number;
  data: GetPortfolio[];
  pageInfo: PageInfo;
};

// Portfolio Comment
export type PostPortfolioComment = {
  userId: number | undefined;
  portfolioId: number;
  content: string;
};

export type PatchPortfolioComment = {
  portfolioCommentId: number;
  userId: number;
  portfolioId: number;
  content: string;
};

export type GetPortfolioCommentById = {
  portfolioCommentId: number;
  userId: number;
  userName: string;
  userProfileImg: string;
  portfolioId: number;
  content: string;
  createdAt: string[];
  updatedAt: string[];
  auth: boolean;
};

export type PortfolioCommentData = {
  data: GetPortfolioCommentById[];
  pageInfo: {
    totalElements: number;
    totalPages: number;
  };
};

export type DeletePortfolioComment = {
  portfolioCommentId: number;
};

// Sort
export type SortOption = 'createdAt' | 'likes' | 'views';

// Infinite Query PageParam
export type PageParam = {
  pageParam?: number;
};

// LikesBtn
export type LikeBtn = {
  portfolioId: number;
  likes: boolean;
};

// SignUp
export type SignUp = {
  email: string;
  password: string;
  name: string;
};

// Login
export type Login = {
  username: string;
  password: string;
};
