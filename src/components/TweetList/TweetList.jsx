import { TweetCard } from '../TweetCard/TweetCard';
import { List } from './TweetList.styled';

export const TweetList = ({ users }) => {
  return (
    <>
      {users.length > 0 && (
        <List>
          {users.map((item) => {
            return <TweetCard values={item} key={item.id} />;
          })}
        </List>
      )}
    </>
  );
};
