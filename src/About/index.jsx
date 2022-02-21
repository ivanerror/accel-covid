import styled from "@emotion/styled";
import Color from "../Color";

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${Color.White};
  letter-spacing: 0.1rem;
`;

const ContentParagraph = styled.p`
  font-size: 1.2rem;
  color: ${Color.White};
  letter-spacing: 0.1rem;
`;

const AboutPage = () => {
  return (
    <>
      <Title>About</Title>
      <ContentParagraph>
        COVID-19 Tracker is a web application that tracks the latest data of
        COVID-19. The data is fetched from the Worldometer & Johns Hopkins
        provided by https://disease.sh/.
      </ContentParagraph>
      <ContentParagraph>
        This App is created by Gabriel Ivan Setyaputra using React
      </ContentParagraph>
    </>
  );
};

export default AboutPage;
