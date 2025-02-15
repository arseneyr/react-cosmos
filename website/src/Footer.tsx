import React from 'react';
import styled from 'styled-components';
import { useGitHubContributors } from './Header/useGitHubContributors';
import { ExternalLink } from './shared/ExternalLink';
import { InternalLink } from './shared/InternalLink';
import { Center, NoWrap, SlideIn } from './shared/ui';
import { useViewportEnter } from './shared/useViewportEnter';

export function Footer() {
  const contributors = useGitHubContributors();
  const [ref, entered] = useViewportEnter(0.9);
  return (
    <Container>
      <Center>
        <Columns ref={ref} visible={entered}>
          <LinksColumn>
            <InternalLink to="/visual-tdd">Visual TDD</InternalLink>
            <InternalLink to="/component-library">
              Component library
            </InternalLink>
            <InternalLink to="/open-platform">Open platform</InternalLink>
          </LinksColumn>
          <LinksColumn>
            <ExternalLink href="https://cosmos.flatris.space">
              <ExternalLabel>Live demo</ExternalLabel>
            </ExternalLink>
            <ExternalLink href="https://twitter.com/ReactCosmos/status/1189127279533793281">
              <ExternalLabel>React Cosmos 5 in 21 tweets</ExternalLabel>
            </ExternalLink>
            <ExternalLink href="https://github.com/react-cosmos/react-cosmos">
              <ExternalLabel>GitHub</ExternalLabel>
            </ExternalLink>
            <ExternalLink href="https://join-react-cosmos.now.sh">
              <ExternalLabel>Slack</ExternalLabel>
            </ExternalLink>
            <ExternalLink href="https://twitter.com/ReactCosmos">
              <ExternalLabel>Twitter</ExternalLabel>
            </ExternalLink>
          </LinksColumn>
          <TextColumn>
            {contributors !== null && (
              <>
                <NoWrap>
                  Made with love by{' '}
                  <ExternalLink href="https://twitter.com/skidding">
                    @skidding
                  </ExternalLink>
                </NoWrap>{' '}
                and{' '}
                <ExternalLink href="https://github.com/react-cosmos/react-cosmos/graphs/contributors">
                  {contributors - 1} exceptional humans
                </ExternalLink>
                .
              </>
            )}
          </TextColumn>
        </Columns>
      </Center>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 20px 10vh 20px;
  background: #093556;
  color: #4d9edc;
  font-size: 16px;
  font-weight: 400;

  a {
    color: #b1dcfd;
    text-decoration: none;
    white-space: nowrap;

    :hover {
      text-decoration: underline;
    }
  }
`;

const Columns = styled(SlideIn)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 808px) {
    display: block;
  }
`;

const Column = styled.div`
  width: 256px;

  @media (max-width: 808px) {
    width: auto;
    padding: 0 0 32px 0;

    :last-child {
      padding-bottom: 0;
    }
  }
`;

const LinksColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 32px;
`;

const TextColumn = styled(Column)`
  line-height: 32px;
  text-align: left;
`;

function ExternalLabel({ children }: { children: string }) {
  return (
    <>
      {children}
      <ExternalIcon />
    </>
  );
}

const ExternalIcon = () => (
  <StyledExternalIcon
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4d9edc"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </StyledExternalIcon>
);

const StyledExternalIcon = styled.svg`
  margin: 0 0 -2px 6px;
  opacity: 0.75;
`;
