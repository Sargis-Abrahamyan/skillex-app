import { brands } from '../../../../../../mock/brands';
import Collapsible from '../../components/collapsible/Collapsible';
import FilterCategoryAndBrandList from '../../components/filterCategoryAndBrandList/FilterCategoryAndBrandList';

const SideBarBrend = () => {
  return (
    <Collapsible title='Brend'>
      <FilterCategoryAndBrandList items={brands} isSeleted='brand' />
    </Collapsible>
  );
};

export default SideBarBrend;
