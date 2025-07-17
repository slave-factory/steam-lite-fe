import styled from "styled-components";

import Client from "./Client";
import Footer from "./Footer";
import PrimaryButton from "./PrimaryButton";
import ReviewCard from "./ReviewCard";
import SecondaryButton from "./SecondaryButton";

function GamePage() {
  return (
    <GamePageContainer>
      {/* Background Image */}
      <BackgroundImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e35e93278c1171b137356778a0f4512077c57ff?width=3840"
        alt="Game background"
      />

      {/* Client Header */}
      <Client />

      {/* Main Content */}
      <MainContent>
        {/* Game Header Section */}
        <GameSection>
          <GameHeader>
            <GameTitle>Elden Ring</GameTitle>
          </GameHeader>

          <GameContent>
            <GameImages>
              <MainGameImage
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/26f579b2d2543a5d190d313be9c39136b549f0a3?width=2156"
                alt="Elden Ring main image"
              />
            </GameImages>

            <GameInfo>
              <SideImage
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20426061fc3895e4030832a3a5d2551ebacf9102?width=832"
                alt="Elden Ring side image"
              />

              <GameDescription>
                본 게임은 본격적인 다크 판타지 세계를 무대로 한 액션 RPG입니다.
                드넓은 필드와 던전 탐험을 통해 미지의 것들을 발견해 보세요.
                앞길을 막아서는 난관과 그것을 극복했을 때의 달성감, 그리고
                등장인물의 의도가 교착하는 군상극도 즐기실 수 있습니다.
              </GameDescription>

              <GameMetadata>
                <MetadataSection>
                  <MetadataLabel>평가</MetadataLabel>
                </MetadataSection>

                <MetadataSection>
                  <Rating>매우 긍정적 (534,170)</Rating>
                </MetadataSection>

                <MetadataSection>
                  <MetadataLabel>출시일</MetadataLabel>
                  <MetadataValue>2022년 2월 25일</MetadataValue>
                </MetadataSection>

                <MetadataSection>
                  <MetadataLabel>개발자</MetadataLabel>
                  <DeveloperLink>FromSoftware</DeveloperLink>
                </MetadataSection>
              </GameMetadata>
            </GameInfo>
          </GameContent>
        </GameSection>

        {/* Purchase Section */}
        <PurchaseSection>
          <GameTitleSmall>Elden Ring</GameTitleSmall>
          <PurchaseActions>
            <GamePrice>₩ 64,800</GamePrice>
            <PrimaryButton>카트에 추가</PrimaryButton>
          </PurchaseActions>
        </PurchaseSection>

        {/* Game Information Section */}
        <GameInfoSection>
          <InfoTitle>게임 정보</InfoTitle>

          <InfoImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3caf51318092470d18fcb24c47b82005fab15e87?width=2936"
            alt="Game information"
          />

          <InfoContent>
            <InfoItem>
              <InfoItemTitle>・자극으로 가득한 드넓은 세계</InfoItemTitle>
              <InfoItemDescription>
                다채로운 시추에이션을 지닌 탁 트인 필드와 복잡하면서 입체적으로
                짜인 거대한 던전이 경계선 없이 이어지는 드넓은 세계. 탐색 끝에는
                미지의 것들을 발견했다는 기쁨과 높은 성취감으로 이어지는
                압도적인 위협이 플레이어를 기다립니다.
              </InfoItemDescription>
            </InfoItem>

            <InfoItem>
              <InfoItemTitle>・나만의 캐릭터</InfoItemTitle>
              <InfoItemDescription>
                플레이어 캐릭터는 겉모습의 커스터마이즈뿐만 아니라 지니는 무기와
                방어구, 마법을 자유롭게 조합할 수 있습니다. 근력을 높여 강인한
                전사가 되거나 마술의 극치에 다다르는 등, 각자의 플레이 스타일에
                맞춰 캐릭터를 성장시킬 수 있습니다.
              </InfoItemDescription>
            </InfoItem>

            <InfoItem>
              <InfoItemTitle>・신화에서 태어나는 군상극</InfoItemTitle>
              <InfoItemDescription>
                단편적으로 이야기되는 중층적인 구조의 이야기. 「틈새의 땅」을
                무대로 등장인물들의 다양한 의도가 교착하는 군상극이 전개됩니다.
              </InfoItemDescription>
            </InfoItem>

            <InfoItem>
              <InfoItemTitle>
                ・다른 플레이어와 느슨하게 연결되는 독자적인 온라인 플레이
              </InfoItemTitle>
              <InfoItemDescription>
                다른 플레이어와 직접적으로 연결되어 함께 여행하는 멀티플레이에
                더해, 다른 플레이어의 존재를 느낄 수 있는 독자적인 비동기 온라인
                요소도 지원합니다.
              </InfoItemDescription>
            </InfoItem>
          </InfoContent>
        </GameInfoSection>

        {/* Reviews Section */}
        <ReviewsSection>
          <ReviewsTitle>평가</ReviewsTitle>

          <ReviewsHeader>
            <ReviewsSubheading>가장 유용한 평가</ReviewsSubheading>
            <ReviewsSubheading>최근 게시됨</ReviewsSubheading>
          </ReviewsHeader>

          <ReviewsContent>
            <DetailedReviews>
              <ReviewCard
                username="고경민"
                avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/42f8aeb7c93b000346ad84d83782fab28469a4e4?width=98"
                reviewText="저는 씹덕입니다"
                isRecommended={true}
                playtime="기록상 56.3시간"
                helpfulCount={374}
                showFullCard={true}
              />

              <ReviewCard
                username="김현원"
                avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/d08b79ed13cd5b255c6fa85653b8387c231e85ab?width=98"
                reviewText="공만추 미만"
                isRecommended={false}
                playtime="기록상 36.4시간"
                helpfulCount={82}
                showFullCard={true}
              />
            </DetailedReviews>

            <SimpleReviewsColumn>
              <SimpleReviews>
                <ReviewCard
                  username="박주영"
                  avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/fb60d743433113bd4e5be0bd842feb47fd3b27ba?width=84"
                  reviewText="imfool"
                  isRecommended={true}
                  playtime="기록상 56.3시간"
                  helpfulCount={374}
                />

                <ReviewCard
                  username="김현투"
                  avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/dc060c16d771590b9cd76585ce21aa75516f6a45?width=84"
                  reviewText="난 민우가 좋더라"
                  isRecommended={true}
                  playtime="기록상 36.4시간"
                  helpfulCount={82}
                />

                <ReviewCard
                  username="박우현"
                  avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/dc060c16d771590b9cd76585ce21aa75516f6a45?width=84"
                  reviewText="나랑 컬트할래?"
                  isRecommended={true}
                  playtime="기록상 56.3시간"
                  helpfulCount={374}
                />

                <ReviewCard
                  username="서유민"
                  avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/dc060c16d771590b9cd76585ce21aa75516f6a45?width=84"
                  reviewText="일해라"
                  isRecommended={true}
                  playtime="기록상 36.4시간"
                  helpfulCount={82}
                />
              </SimpleReviews>

              {/* Write Review Button */}
              <WriteReviewSection>
                <CompactSecondaryButton>리뷰 작성하기</CompactSecondaryButton>
              </WriteReviewSection>
            </SimpleReviewsColumn>
          </ReviewsContent>
        </ReviewsSection>
      </MainContent>

      {/* Footer */}
      <Footer />
    </GamePageContainer>
  );
}

const GamePageContainer = styled.div`
  width: 1920px;
  height: 3303px;
  position: relative;
  background: linear-gradient(180deg, #0e141b 7%, #202b3b 39.65%);
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 1920px) {
    width: 100%;
    height: auto;
    min-height: 100vh;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 927px;
  position: absolute;
  left: 0;
  top: 116px;
  border-radius: var(--border-radius);
  mix-blend-mode: lighten;
  z-index: 0;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 400px;
    top: 80px;
  }
`;

const MainContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  position: absolute;
  left: 155px;
  top: -900px;
  width: 1567px;
  height: 2162px;
  z-index: 1;

  @media (max-width: 1920px) {
    position: relative;
    left: 5%;
    width: 90%;
    height: auto;
    top: -700px;
  }

  @media (max-width: 1200px) {
    left: 20px;
    width: calc(100% - 40px);
    gap: 40px;
    top: -500px;
  }

  @media (max-width: 768px) {
    left: 15px;
    width: calc(100% - 30px);
    gap: 30px;
    top: -300px;
  }
`;

const GameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

const GameHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  width: 100%;
`;

const GameTitle = styled.h1`
  display: flex;
  width: 100%;
  padding: 15px 15px 15px 25px;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius-large);
  background: var(--Background-Main);
  color: var(--Text-Main);
  font-family:
    Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: normal;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 22px;
    padding: 12px 12px 12px 20px;
  }
`;

const GameContent = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  padding: 25px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: var(--border-radius-large);
  background: var(--Background-Main50);
  gap: 30px;

  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
    gap: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const GameImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MainGameImage = styled.img`
  width: 800px;
  height: 360px;
  border-radius: var(--border-radius);
  object-fit: cover;
  display: block;

  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    max-width: 600px;
  }
`;

const GameInfo = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  max-width: 450px;

  @media (max-width: 1200px) {
    height: auto;
    gap: 20px;
    max-width: none;
  }
`;

const SideImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: 180px;
  border-radius: var(--border-radius);
  object-fit: cover;

  @media (max-width: 1200px) {
    height: auto;
    max-width: 350px;
  }
`;

const GameDescription = styled.div`
  width: 416px;
  color: var(--Text-Main);
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const GameMetadata = styled.div`
  display: flex;
  width: 384px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const MetadataSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const MetadataLabel = styled.div`
  width: 90px;
  color: var(--Text-Dim);
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
`;

const MetadataValue = styled.div`
  color: var(--Text-Main);
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
`;

const DeveloperLink = styled.div`
  color: var(--Color-Primary);
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Rating = styled.div`
  color: var(--Color-Secondary);
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;

  span:first-child {
    font-size: 16px;
    color: rgba(86, 159, 201, 1);
  }
`;

const PurchaseSection = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  border-radius: var(--border-radius-large);
  background: var(--Background-Main50);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 43px;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

const GameTitleSmall = styled.div`
  color: var(--Text-Main);
  font-family:
    Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const PurchaseActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const GamePrice = styled.div`
  color: var(--Text-Main);
  text-align: right;
  font-family:
    Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
  }
`;

const GameInfoSection = styled.div`
  width: 100%;
  border-radius: var(--border-radius-large);
  background: var(--Background-Main50);
  padding: 43px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const InfoTitle = styled.div`
  color: var(--Text-Dim);
  font-family:
    Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 30px;
`;

const InfoImage = styled.img`
  width: 100%;
  max-width: 1468px;
  height: 639px;
  border-radius: var(--border-radius);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const InfoItemTitle = styled.div`
  color: var(--Color-Primary);
  font-family:
    Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`;

const InfoItemDescription = styled.div`
  color: var(--Text-Main);
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ReviewsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  width: 100%;
`;

const ReviewsTitle = styled.div`
  color: var(--Text-Main);
  font-family:
    Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: normal;
`;

const ReviewsHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 21px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ReviewsSubheading = styled.div`
  color: var(--Text-Main);
  font-family:
    Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`;

const ReviewsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 40px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const SimpleReviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
`;

const SimpleReviewsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 25%;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const DetailedReviews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 75%;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const WriteReviewSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const CompactSecondaryButton = styled.button`
  display: flex;
  width: 100%;
  padding: 17px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--border-radius);
  background: var(--Background-Highlight);
  color: var(--Text-Main);
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 50px;

  &:hover {
    background: var(--Background-Hover);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 16px;
    height: 44px;
  }
`;

export default GamePage;
