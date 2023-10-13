import { Container, Title } from './Home.styled';
import { StyledNavLink } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Title>Tweeeets</Title>
        <StyledNavLink to={'/tweets'}>To Tweets</StyledNavLink>
    </Container>
  );
};

export default Home;
