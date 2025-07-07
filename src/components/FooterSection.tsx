import * as React from "react";

import styled from "styled-components";

// SVG icons from public folder
const FooterBackgroundIcon = "/icons/footer-background.svg";

function FooterSection() {
  return (
    <FooterContainer>
      <img
        src={FooterBackgroundIcon}
        alt="Footer"
        className="footer-background"
      />
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 325px;
  flex-shrink: 0;
  position: absolute;
  left: 0;
  top: 755px;

  .footer-background {
    width: 100%;
    height: 325px;
    object-fit: cover;
  }

  @media (max-width: 991px) {
    position: relative;
    top: auto;
  }
`;

export default FooterSection;
