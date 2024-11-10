import Collapsible from '../../components/collapsible/Collapsible';
import { categories } from '../../../../../../mock/categories';
import FilterCategoryAndBrandList from '../../components/filterCategoryAndBrandList/FilterCategoryAndBrandList';

const SideBarCategory = () => {
  return (
    <Collapsible title='Category'>
      <FilterCategoryAndBrandList items={categories} isSeleted='category' />
    </Collapsible>
  );
};

export default SideBarCategory;
