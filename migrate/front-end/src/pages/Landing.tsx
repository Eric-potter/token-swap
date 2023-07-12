import styled from "styled-components";
import TradingBox from "../components/TradingBox";
import ChatBox from "../components/ChatBox";
import TrendsTable from "../components/TrendsTable";
import Banner from "../components/Banner";

export function Landing() {
  return (
    <Wrapper>
      <Banner />
      <ChatAndContentWrapper>
        <ContentWrapper>
          <LandingTradingBox tokenListURL="https://tokens.coingecko.com/uniswap/all.json" />
          <TrendsTable width="50vw" height="100%" />
        </ContentWrapper>
        <ChatBox />
      </ChatAndContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ChatAndContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3%;
`;
const LandingTradingBox = styled(TradingBox)`
  margin-top: 3%;
  margin-bottom: 2%;
`;