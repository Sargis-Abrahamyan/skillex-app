import { RingLoader } from 'react-spinners';
import FlexLayout from '../../layout/FlexLayout';

const Loading = ({ loading }) => {
  return (
    <FlexLayout className='flex-center'>
      <RingLoader color='#ff4545' loading={loading} size={60} />
    </FlexLayout>
  );
};

export default Loading;
