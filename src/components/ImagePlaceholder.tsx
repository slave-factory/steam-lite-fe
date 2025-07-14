import React from "react";

import styled from "styled-components";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <PlaceholderContainer className={className} style={{ width, height }}>
        <PlaceholderContent>
          <PlaceholderIcon>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                ry="2"
                stroke="#76808c"
                strokeWidth="2"
              />
              <circle
                cx="8.5"
                cy="8.5"
                r="1.5"
                stroke="#76808c"
                strokeWidth="2"
              />
              <polyline
                points="21,15 16,10 5,21"
                stroke="#76808c"
                strokeWidth="2"
              />
            </svg>
          </PlaceholderIcon>
          <PlaceholderText>{alt}</PlaceholderText>
        </PlaceholderContent>
      </PlaceholderContainer>
    );
  }

  return (
    <ImageContainer className={className} style={{ width, height }}>
      {!imageLoaded && (
        <LoadingPlaceholder>
          <LoadingSpinner />
        </LoadingPlaceholder>
      )}
      <StyledImage
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        $loaded={imageLoaded}
      />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  background: rgba(30, 35, 41, 0.5);
  border-radius: 3px;
`;

const PlaceholderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(30, 35, 41, 0.5);
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const PlaceholderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  padding: 20px;
`;

const PlaceholderIcon = styled.div`
  opacity: 0.6;
`;

const PlaceholderText = styled.span`
  color: #76808c;
  font:
    400 14px "Roboto",
    sans-serif;
  max-width: 150px;
  word-wrap: break-word;
`;

const LoadingPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(30, 35, 41, 0.5);
  z-index: 1;
`;

const LoadingSpinner = styled.div`
  width: 32px;
  height: 32px;
  border: 3px solid rgba(102, 192, 244, 0.3);
  border-top: 3px solid #66c0f4;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledImage = styled.img<{ $loaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${props => (props.$loaded ? 1 : 0)};
`;

export default ImagePlaceholder;
