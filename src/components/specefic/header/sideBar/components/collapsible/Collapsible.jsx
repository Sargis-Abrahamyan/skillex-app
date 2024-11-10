import { useEffect } from 'react';
import { useSideBar } from '../../../../../../context/sideBarContext';
import FlexLayout from '../../../../../layout/FlexLayout';
import { ArrowTopAndDownSvg } from '../../../../../svg/ArrowTopAndDownSvg';
import { Box, Title } from '../../../../../ui';
import { useBooleanState } from '../../../../../../hooks/useBooleanState';
import styles from './collapsible.module.css';

const Collapsible = ({ title, children }) => {
  const { state: isCollapsible, setTrue: handleOpenCollapsible, toggle: handleToggleCollapsible } = useBooleanState(false);
  const { showSideBar } = useSideBar();

  useEffect(() => {
    if (showSideBar) {
      handleOpenCollapsible();
    }
  }, [handleOpenCollapsible, showSideBar]);

  return (
    <Box className={styles.collapsibleBlock}>
      <FlexLayout onClick={handleToggleCollapsible} className={`${styles.collapsibleTitle} align-center flex-space-between`}>
        <Title as='h4' size='xs'>
          {title}
        </Title>
        <ArrowTopAndDownSvg rotated={isCollapsible} />
      </FlexLayout>
      <div className={`${styles.collapsibleContent} ${isCollapsible ? styles.active : ''}`}>{children}</div>
    </Box>
  );
};

export default Collapsible;
