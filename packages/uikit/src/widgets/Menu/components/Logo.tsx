import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";

interface Props {
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  align-items: baseline;

  .mobile-icon {
    width: 32px;
    // ${({ theme }) => theme.mediaQueries.lg} {
    //   display: none;
    // }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");

  return (
    <Flex alignItems="baseline">
      <StyledLink as={isAbsoluteUrl ? "a" : linkComponent} href={href} aria-label="Pancake home page">
        <div>
          <LogoIcon className="mobile-icon" />
        </div>
        <div>
          <LogoWithTextIcon className="desktop-icon" />
        </div>
      </StyledLink>
    </Flex>
  );
};

export default React.memo(Logo);
