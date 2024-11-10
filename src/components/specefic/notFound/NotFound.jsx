import { NOT_FOUND_TEXT } from '../../../constants';
import { Title } from '../../ui';
import FlexLayout from '../../layout/FlexLayout';

const NotFound = () => (
  <FlexLayout className='flex-center'>
    <Title>{NOT_FOUND_TEXT}</Title>
  </FlexLayout>
);

export default NotFound;
