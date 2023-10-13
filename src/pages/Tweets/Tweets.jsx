import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TweetList } from '../../components/TweetList/TweetList';
import { fetchUsers } from '../../redux/usersOperations';
import { selectUsers } from '../../redux/selectors';
import { Container, BackIcon, BackLink, Title, Button } from './Tweets.styled';
import { useState } from 'react';

const Tweets = () => {
  const [page, setPage] = useState(1);
  console.log(page);

  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getUsers =  () => {
       dispatch(fetchUsers(page));
    };
    getUsers();
  }, [dispatch, page]);


   const handleOnClickMoreImages = () => {
    setPage((prevPage) => prevPage + 1);

   };
  return (
    <Container>
      <BackLink to={backLinkLocation.current}>
        <BackIcon />
        <span>Back</span>
      </BackLink>
      <Title>Tweets List </Title>

      <TweetList users={users} />

      <Button onClick={handleOnClickMoreImages}>Load more</Button>
    </Container>
  );
};

export default Tweets;
