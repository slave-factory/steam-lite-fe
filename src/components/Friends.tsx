import { useState } from "react";
import styled from "styled-components";

interface FriendsModalProps {
  isOpen: boolean;
  onClose: () => void;
  position?: { top: number; left: number };
}

interface Friend {
  id: number;
  username: string;
  avatar: string;
  borderColor: string;
}

function FriendsModal({ isOpen, position }: FriendsModalProps) {
  const [friends, setFriends] = useState<Friend[]>([
    {
      id: 101,
      username: "w.developer7773",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/6deaf888b50fda38876648885abd8869a980503e?width=92",
      borderColor: "#66C0F4",
    },
    {
      id: 102,
      username: "sym2596",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/49c0ca7887d816792785281bd241c93def1514bb?width=92",
      borderColor: "#C1B15F",
    },
  ]);

  const [friendRequests, setFriendRequests] = useState<Friend[]>([
    {
      id: 1,
      username: "ghdduswns21",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/f4112602689e333956347c27f41e3ab220d6fa89?width=92",
      borderColor: "#76808C",
    },
  ]);

  const handleAcceptFriend = (id: number) => {
    const accepted = friendRequests.find(req => req.id === id);
    if (accepted) {
      setFriends(prev => [...prev, accepted]);
      setFriendRequests(prev => prev.filter(req => req.id !== id));
    }
  };

  const handleRejectFriend = (id: number) => {
    setFriendRequests(prev => prev.filter(req => req.id !== id));
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay style={position ? { top: position.top, left: position.left } : {}}>
      <ModalContainer>
        <ModalHeader>
          <UserProfile>
            <UserAvatar
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7f92e4f0a62b01f83ebbff808d367eb442a9bed?width=92"
              alt="User Avatar"
            />
            <UserInfo>
              <UserName>MiNUuuuuu</UserName>
            </UserInfo>
            <AddButton>
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 4.75C8.0325 4.75 7.65 5.1325 7.65 5.6V8.15H5.1C4.6325 8.15 4.25 8.5325 4.25 9C4.25 9.4675 4.6325 9.85 5.1 9.85H7.65V12.4C7.65 12.8675 8.0325 13.25 8.5 13.25C8.9675 13.25 9.35 12.8675 9.35 12.4V9.85H11.9C12.3675 9.85 12.75 9.4675 12.75 9C12.75 8.5325 12.3675 8.15 11.9 8.15H9.35V5.6C9.35 5.1325 8.9675 4.75 8.5 4.75ZM8.5 0.5C3.808 0.5 0 4.308 0 9C0 13.692 3.808 17.5 8.5 17.5C13.192 17.5 17 13.692 17 9C17 4.308 13.192 0.5 8.5 0.5ZM8.5 15.8C4.7515 15.8 1.7 12.7485 1.7 9C1.7 5.2515 4.7515 2.2 8.5 2.2C12.2485 2.2 15.3 5.2515 15.3 9C15.3 12.7485 12.2485 15.8 8.5 15.8Z"
                  fill="#76808C"
                />
              </svg>
            </AddButton>
          </UserProfile>
        </ModalHeader>

        <FriendsContent>
          <FriendsSection>
            <SectionTitle>친구</SectionTitle>
            <FriendsList>
              {friends.map(friend => (
                <FriendItem key={friend.id}>
                  <FriendAvatar
                    src={friend.avatar}
                    alt="Friend Avatar"
                    $borderColor={friend.borderColor}
                  />
                  <FriendName $color={friend.borderColor}>{friend.username}</FriendName>
                </FriendItem>
              ))}
            </FriendsList>
          </FriendsSection>

          <FriendRequestsSection>
            <SectionTitle>친구 요청</SectionTitle>
            {friendRequests.map(request => (
              <FriendRequestItem key={request.id}>
                <FriendAvatar
                  src={request.avatar}
                  alt="Friend Request Avatar"
                  $borderColor={request.borderColor}
                />
                <FriendName $color={request.borderColor}>{request.username}</FriendName>
                <ActionButtons>
                  <ActionButton onClick={() => handleAcceptFriend(request.id)}>
                    ✓
                  </ActionButton>
                  <ActionButton onClick={() => handleRejectFriend(request.id)}>
                    ✗
                  </ActionButton>
                </ActionButtons>
              </FriendRequestItem>
            ))}
          </FriendRequestsSection>
        </FriendsContent>
      </ModalContainer>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: absolute;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  border-radius: 5px;
  background: #1e2329;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
  min-width: 338px;
  max-width: 400px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    min-width: 300px;
    gap: 30px;
    padding: 16px;
  }

  @media (max-width: 480px) {
    min-width: 280px;
    max-width: 90vw;
    gap: 20px;
    padding: 12px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
`;

const UserProfile = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
`;

const UserAvatar = styled.img`
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 2px solid #76808c;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1;
`;

const UserName = styled.div`
  color: #f3f3f3;
  font-family:
    Barlow,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const AddButton = styled.div`
  width: 27px;
  height: 27px;
  flex-shrink: 0;
  border-radius: 3px;
  background: rgba(118, 128, 140, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(118, 128, 140, 0.15);
    transform: scale(1.05);
  }

  svg {
    width: 17px;
    height: 17px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const FriendsContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 30px;
  border-radius: 0px 3px 3px 3px;
  background: #313843;

  @media (max-width: 480px) {
    padding: 16px;
    gap: 20px;
  }
`;

const FriendsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const SectionTitle = styled.div`
  color: #76808c;
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const FriendsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const FriendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
`;

const FriendAvatar = styled.img<{ $borderColor: string }>`
  width: 46px;
  height: 46px;
  border-radius: 2px;
  border: 2px solid ${props => props.$borderColor};
  object-fit: cover;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const FriendName = styled.div<{ $color: string }>`
  color: ${props => props.$color};
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  flex: 1;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const FriendRequestsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const FriendRequestItem = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  position: relative;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const ActionButton = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid rgba(118, 128, 140, 0.4);
  background: transparent;
  color: #f3f3f3;
  font-family:
    Roboto,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(118, 128, 140, 0.1);
    border-color: rgba(118, 128, 140, 0.6);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }
`;

export default FriendsModal;
