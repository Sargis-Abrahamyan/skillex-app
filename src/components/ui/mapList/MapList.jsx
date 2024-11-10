import { Fragment } from 'react';

export const MapList = ({ items, renderItem, getKey }) => (
  items && items.length > 0 && items.map((item, index) => 
  <Fragment key={item[getKey]}>{renderItem(item, index)}</Fragment>)
)