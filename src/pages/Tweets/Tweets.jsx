import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TweetList } from '../../components/TweetList/TweetList';
import { fetchUsers } from '../../redux/usersOperations';
import {
  selectUsers,
  selectIsLoading,
  selectUsersState,
} from '../../redux/selectors';
import { Container, BackIcon, BackLink, Title, Button } from './Tweets.styled';
import { Loader } from '../../components/Loader/Loader';

const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const usersState = useSelector(selectUsersState);

  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');
  const [pageNumber, setPageNumber] = useState(1);
  const [loadMoreBtn, setloadMoreBtn] = useState(false);

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const getUsers = async () => {
      const data = await dispatch(fetchUsers(pageNumber));
      if (data.payload.length === 3) setloadMoreBtn(true);
      if (data.payload.length < 3) setloadMoreBtn(false);
    };

    if (!usersState.pageNo.includes(pageNumber)) {
      getUsers();
    } else if (usersState.pageNo.length) {
      setPageNumber(usersState.pageNo[usersState.pageNo.length - 1]);
      setloadMoreBtn(true);
    }
  }, [dispatch, pageNumber, usersState.pageNo]);

  const handleLoadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  return (
    <Container>
      <BackLink to={backLinkLocation.current}>
        <BackIcon />
        <span>Back</span>
      </BackLink>
      <Title>Tweets List </Title>
      <TweetList users={users} />

      {loadMoreBtn && !isLoading && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
      {isLoading && <Loader />}
    </Container>
  );
};

export default Tweets;
