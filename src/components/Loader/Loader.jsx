
import { Discuss } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
    return (
      <LoaderWrapper>
        <Discuss
          visible={true}
          height="80"
          width="80"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#fff"
          backgroundColor="#512ca5"
          colors={['#512ca5', '#512ca5']}
        />
      </LoaderWrapper>
    );
};

