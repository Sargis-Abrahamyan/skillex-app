import { useSelector } from 'react-redux';
import { Checkbox, Text, MapList } from '../../../../../ui';
import FlexLayout from '../../../../../layout/FlexLayout';
import useFilteredList from '../../../../../../hooks/useFilteredList';

const FilterCategoryAndBrandList = ({ items, isSeleted }) => {
  const filters = useSelector((state) => state.fitlers);
  const handleChange = useFilteredList(isSeleted);

  return (
    <MapList
      items={items}
      renderItem={({ id, label }) => {
        const isChecked = filters[isSeleted]?.includes(label);
        return (
          <FlexLayout as='ul'>
            <Checkbox name={id} checked={isChecked} onChange={() => handleChange(label)}>
              <Text as='li' children={label} />
            </Checkbox>
          </FlexLayout>
        );
      }}
      getKey='id'
    />
  );
};

export default FilterCategoryAndBrandList;
