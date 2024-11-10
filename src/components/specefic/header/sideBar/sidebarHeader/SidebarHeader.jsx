import { SIDEBAR_FILTER_TITLE_LABEL } from '../../../../../constants';
import FlexLayout from '../../../../layout/FlexLayout';
import { Title, Box } from '../../../../ui';
import { CloseSvg } from '../../../../svg/CloseSvg';
import styles from './sidebarHeader.module.css';

const SidebarHeader = ({ onSidebarClose }) => (
  <FlexLayout className={`flex-center flex-space-between ${styles.sidebarHeader}`}>
    <Title as='h3' size='md' className={styles.sidebarTitle} children={SIDEBAR_FILTER_TITLE_LABEL} />
    <Box className={styles.closeButton} onClick={onSidebarClose}>
      <CloseSvg size='40' />
    </Box>
  </FlexLayout>
);

export default SidebarHeader;
