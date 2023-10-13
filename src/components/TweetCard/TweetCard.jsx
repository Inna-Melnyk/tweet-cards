import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserById } from '../../redux/usersOperations';
import { followedTweets } from '../../redux/followed/followSlice';
import { selectFollowed } from '../../redux/followed/followSelectors';
import {
  Text,
  BottomText,
  Button,
  Card,
  Image,
  LogoIcon,
  InfoWraper,
  AvatarWrapper,
  Avatar,
  OuterCircle,
  InnerCircle,
} from './TweetCard.styled';
import background from '../../assets/background.png';

export const TweetCard = ({ values: { avatar, id, tweets, followers } }) => {
  const [isFollowing, setisFollowing] = useState(false);
  const formattedFollowersAmount = followers.toLocaleString('en-US');

  const dispatch = useDispatch();

  const followingTweetsIds = useSelector(selectFollowed);

  useEffect(() => {
    followingTweetsIds.map((tweetId) => {
      if (tweetId === id) setisFollowing(true);
    });
  }, [followingTweetsIds, id]);

  const handleOnFollowBtnCLick = () => {
    isFollowing ? setisFollowing(false) : setisFollowing(true);
    const updateFollowersAmount = isFollowing ? followers - 1 : followers + 1;
    dispatch(followedTweets(id));
    dispatch(updateUserById({ id, updateFollowersAmount }));
  };

  return (
    <li key={id}>
      <Card>
        <LogoIcon />
        <Image src={background} alt="background" />

        <AvatarWrapper>
          <OuterCircle />
          <InnerCircle>
            <Avatar src={avatar} alt="avatar" />
          </InnerCircle>
        </AvatarWrapper>

        <InfoWraper>
          <Text> {tweets} tweets</Text>
          <BottomText>{formattedFollowersAmount} followers</BottomText>

          <Button onClick={handleOnFollowBtnCLick} $following={isFollowing}>
            {isFollowing ? 'Unfollow' : 'Follow'}
          </Button>
        </InfoWraper>
      </Card>
    </li>
  );
};
