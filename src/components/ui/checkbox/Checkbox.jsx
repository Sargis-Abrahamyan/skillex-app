import React from 'react';
import { Text } from '../';
import { CheckboxSvg } from '../../svg/CheckboxSvg';
import FlexLayout from '../../layout/FlexLayout';
import styles from './checkbox.module.css';

export const Checkbox = ({ checked, children, name, onChange, ...props }) => {
  return (
    <FlexLayout as='label' id={name} className={`${styles.relative} flex-center`}>
      <input type='checkbox' className={styles.inputCheckbox} id={name} onChange={onChange} {...props} />
      <Text as='span' className={styles.svg}>
        <CheckboxSvg />
      </Text>
      {children}
    </FlexLayout>
  );
};
