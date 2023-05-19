import * as S from './Detail.style';

// react component
import DetailTitle from '../components/Detail/DetailTitle';
import ProjectImg from '../components/Detail/ProjectImg';
import Description from '../components/Detail/Description';
import ProjectContent from '../components/Detail/ProjectContent';
import Comment from '../components/Detail/Comment';
import LikeBtn from '../components/Detail/LikeBtn';

// custom Hooks
import { useGetPortfolio } from '../hooks/useGetPortfolio';

// react-router-dom
import { useParams } from 'react-router-dom';

// common component
import Loading from '../components/common/Loading';

function Detail() {
  const { portfolioId } = useParams();
  const { getPortfolioLoading, PortfolioInfo } = useGetPortfolio(Number(portfolioId));

  if (getPortfolioLoading) {
    return (
      <S.LoadingContainer>
        <S.LoadingComponent />
      </S.LoadingContainer>
    );
  }
  return (
    <S.Container>
      {PortfolioInfo && (
        <>
          <LikeBtn />
          <DetailTitle
            userId={PortfolioInfo.userId}
            title={PortfolioInfo.title}
            name={PortfolioInfo.name}
            gitLink={PortfolioInfo.gitLink}
            distributionLink={PortfolioInfo.distributionLink}
            skills={PortfolioInfo.skills}
          />
          <ProjectImg
            representativeImgUrl={PortfolioInfo.representativeImgUrl}
            views={PortfolioInfo.views}
          />
          <Description description={PortfolioInfo.description} />
          <ProjectContent content={PortfolioInfo.content} />
          <Comment />
        </>
      )}
    </S.Container>
  );
}

export default Detail;
