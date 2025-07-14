import styled from "styled-components";

interface ReviewCardProps {
  username: string;
  avatar: string;
  reviewText: string;
  isRecommended: boolean;
  playtime: string;
  helpfulCount: number;
  showFullCard?: boolean;
}

function ReviewCard({
  username,
  avatar,
  reviewText,
  isRecommended,
  playtime,
  helpfulCount,
  showFullCard = false,
}: ReviewCardProps) {
  if (showFullCard) {
    return (
      <FullReviewCard>
        <ReviewHeader>
          <UserInfo>
            <ThumbIcon>
              <svg width="18" height="18" viewBox="0 0 18 19" fill="none">
                <g opacity="0.4">
                  <path
                    d="M8.16 2.04473L12.315 6.19973C12.5925 6.47723 12.75 6.85973 12.75 7.25723V14.7497C12.75 15.5747 12.075 16.2497 11.25 16.2497H4.5C3.9 16.2497 3.36 15.8897 3.12 15.3422L0.674999 9.63473C0.0450001 8.14973 1.1325 6.49973 2.745 6.49973H6.9825L6.27 3.06473C6.195 2.68973 6.3075 2.30723 6.5775 2.03723C7.02 1.60223 7.725 1.60223 8.16 2.04473ZM15.75 16.2497C14.925 16.2497 14.25 15.5747 14.25 14.7497V8.74973C14.25 7.92473 14.925 7.24973 15.75 7.24973C16.575 7.24973 17.25 7.92473 17.25 8.74973V14.7497C17.25 15.5747 16.575 16.2497 15.75 16.2497Z"
                    fill="#F3F3F3"
                  />
                </g>
              </svg>
            </ThumbIcon>
            <UserName>{username}</UserName>
          </UserInfo>
          <ReviewDate> </ReviewDate>
        </ReviewHeader>

        <ReviewContent>
          <ReviewAvatar src={avatar} alt={username} />
          <ReviewInfo>
            <ReviewStatus isRecommended={isRecommended}>
              {isRecommended ? "추천" : "비추천"}
            </ReviewStatus>
            <PlayTime>{playtime}</PlayTime>
          </ReviewInfo>
        </ReviewContent>

        <ReviewText>{reviewText}</ReviewText>

        <ReviewSeparator />

        <ReviewActions>
          <HelpfulText>이 평가가 유용한가요?</HelpfulText>
          <ActionButtons>
            <ActionButton>
              <span>네</span>
              <ThumbIcon>
                <svg width="18" height="18" viewBox="0 0 18 19" fill="none">
                  <g opacity="0.4">
                    <path
                      d="M8.16 2.04473L12.315 6.19973C12.5925 6.47723 12.75 6.85973 12.75 7.25723V14.7497C12.75 15.5747 12.075 16.2497 11.25 16.2497H4.5C3.9 16.2497 3.36 15.8897 3.12 15.3422L0.674999 9.63473C0.0450001 8.14973 1.1325 6.49973 2.745 6.49973H6.9825L6.27 3.06473C6.195 2.68973 6.3075 2.30723 6.5775 2.03723C7.02 1.60223 7.725 1.60223 8.16 2.04473ZM15.75 16.2497C14.925 16.2497 14.25 15.5747 14.25 14.7497V8.74973C14.25 7.92473 14.925 7.24973 15.75 7.24973C16.575 7.24973 17.25 7.92473 17.25 8.74973V14.7497C17.25 15.5747 16.575 16.2497 15.75 16.2497Z"
                      fill="#F3F3F3"
                    />
                  </g>
                </svg>
              </ThumbIcon>
              <HelpfulCount>{helpfulCount}</HelpfulCount>
            </ActionButton>
            <ActionButton>
              <span>아니요</span>
              <ThumbIcon>
                <svg width="18" height="18" viewBox="0 0 18 19" fill="none">
                  <g opacity="0.4">
                    <path
                      d="M8.16 16.9553L12.315 12.8003C12.5925 12.5228 12.75 12.1403 12.75 11.7428V4.25027C12.75 3.42527 12.075 2.75027 11.25 2.75027H4.5C3.9 2.75027 3.36 3.11027 3.12 3.65777L0.674999 9.36527C0.0450001 10.8503 1.1325 12.5003 2.745 12.5003H6.9825L6.27 15.9353C6.195 16.3103 6.3075 16.6928 6.5775 16.9628C7.02 17.3978 7.725 17.3978 8.16 16.9553ZM15.75 2.75027C14.925 2.75027 14.25 3.42527 14.25 4.25027V10.2503C14.25 11.0753 14.925 11.7503 15.75 11.7503C16.575 11.7503 17.25 11.0753 17.25 10.2503V4.25027C17.25 3.42527 16.575 2.75027 15.75 2.75027Z"
                      fill="#F3F3F3"
                    />
                  </g>
                </svg>
              </ThumbIcon>
            </ActionButton>
          </ActionButtons>
        </ReviewActions>
      </FullReviewCard>
    );
  }

  return (
    <SimpleReviewCard>
      <ReviewContainer>
        <UserHeader>
          <UserAvatar src={avatar} alt={username} />
          <UserDetails>
            <ThumbIcon>
              <svg width="18" height="18" viewBox="0 0 18 19" fill="none">
                <g opacity="0.4">
                  <path
                    d="M8.16 2.04473L12.315 6.19973C12.5925 6.47723 12.75 6.85973 12.75 7.25723V14.7497C12.75 15.5747 12.075 16.2497 11.25 16.2497H4.5C3.9 16.2497 3.36 15.8897 3.12 15.3422L0.674999 9.63473C0.0450001 8.14973 1.1325 6.49973 2.745 6.49973H6.9825L6.27 3.06473C6.195 2.68973 6.3075 2.30723 6.5775 2.03723C7.02 1.60223 7.725 1.60223 8.16 2.04473ZM15.75 16.2497C14.925 16.2497 14.25 15.5747 14.25 14.7497V8.74973C14.25 7.92473 14.925 7.24973 15.75 7.24973C16.575 7.24973 17.25 7.92473 17.25 8.74973V14.7497C17.25 15.5747 16.575 16.2497 15.75 16.2497Z"
                    fill="#F3F3F3"
                  />
                </g>
              </svg>
            </ThumbIcon>
            <UserName>{username}</UserName>
          </UserDetails>
        </UserHeader>
        <ReviewText>{reviewText}</ReviewText>
      </ReviewContainer>
    </SimpleReviewCard>
  );
}

const FullReviewCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  border-radius: var(--border-radius-large);
  background: var(--Background-Main50);

  @media (max-width: 1200px) {
    max-width: 600px;
  }

  @media (max-width: 768px) {
    padding: 12px;
    gap: 20px;
  }
`;

const SimpleReviewCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: var(--border-radius-large);
  background: var(--Background-Main50);
`;

const UserHeader = styled.div`
  display: flex;
  padding: 5px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: var(--border-radius);
  background: var(--Background-Main);
`;

const UserAvatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 2px;
`;

const UserDetails = styled.div`
  display: flex;
  width: 336px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;
`;

const ThumbIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 18px;
    height: 18px;
    border-radius: var(--border-radius);
  }
`;

const UserName = styled.div`
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

const ReviewText = styled.div`
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
`;

const ReviewHeader = styled.div`
  display: flex;
  width: 736px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ReviewDate = styled.div`
  color: var(--Text-Dim);
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;

const ReviewContent = styled.div`
  display: flex;
  padding: 5px;
  align-items: flex-start;
  gap: 21px;
  align-self: stretch;
  border-radius: var(--border-radius);
  background: var(--Background-Main);
`;

const ReviewAvatar = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 2px;
`;

const ReviewInfo = styled.div`
  display: flex;
  width: 639px;
  height: 49px;
  padding: 3px 0px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ReviewStatus = styled.div<{ isRecommended: boolean }>`
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

const PlayTime = styled.div`
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

const ReviewSeparator = styled.div`
  width: 728px;
  height: 1px;
  stroke: var(--Background-Hover);
  border-top: 1px solid var(--Background-Hover);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ReviewActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const HelpfulText = styled.div`
  color: var(--Text-Dim);
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;

const ActionButtons = styled.div`
  display: flex;
  width: 173px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

const ActionButton = styled.button`
  display: flex;
  height: 37px;
  padding: 17px 10px;
  align-items: center;
  gap: 5px;
  border-radius: var(--border-radius);
  background: var(--Background-Main);
  color: var(--Text-Main);
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--Background-Hover);
  }
`;

const HelpfulCount = styled.span`
  color: var(--Color-Primary);
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;

export default ReviewCard;
