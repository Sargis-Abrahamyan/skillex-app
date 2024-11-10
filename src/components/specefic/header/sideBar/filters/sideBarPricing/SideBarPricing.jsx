import RangeSlider from 'react-range-slider-input';
import { useSelector } from 'react-redux';
import { Price_Range } from '../../../../../../constants';
import { priceRanges } from '../../../../../../mock/priceRanges';
import { Box } from '../../../../../ui';
import Collapsible from '../../components/collapsible/Collapsible';
import useFilteredList from '../../../../../../hooks/useFilteredList';
import 'react-range-slider-input/dist/style.css';
import './sideBarPricing.css';

const SideBarPricing = () => {
  const { priceRange } = useSelector((state) => state.fitlers);
  const handleFltered = useFilteredList();

  return (
    <Collapsible className='priceContainer' title='Price'>
      <RangeSlider id='range-slider-yellow' min={priceRanges.min} max={priceRanges.max} step={1} value={priceRange} onInput={(val) => handleFltered(val)} />
      <Box className='selecedPrice'>
        {Price_Range} {priceRange[0]} - {priceRange[1]}
      </Box>
    </Collapsible>
  );
};

export default SideBarPricing;
