import React from 'react';
import { FOOTER_LABEL } from '../../../constants';
import { getYear } from '../../../utils/getYear';
import FlexLayout from '../../layout/FlexLayout';
import { Text } from '../../ui';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <FlexLayout as='footer' className={`${styles.footer} flex-center`}>
      <Text className={styles.copyrightText}>
        {getYear()} {FOOTER_LABEL}
      </Text>
    </FlexLayout>
  );
};

export default Footer;
