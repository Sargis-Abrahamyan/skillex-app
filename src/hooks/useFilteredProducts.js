import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from './useDebounce';
import { productsThunk } from '../lib/store/slices/products/productsThunk';

const useFilteredProducts = () => {
  const { category, brand, priceRange } = useSelector((state) => state.fitlers);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsThunk());
  }, [dispatch]);

  const debouncedCategory = useDebounce(category, 500);
  const debouncedBrand = useDebounce(brand, 500);
  const debouncedPriceRange = useDebounce(priceRange, 500);

  const filteredProducts = useMemo(() => {
    if (!products.length) return [];
    return products.filter((product) => {
      const filterCategory = !debouncedCategory.length || debouncedCategory.includes(product.category);
      const filterBrand = !debouncedBrand.length || debouncedBrand.includes(product.brand);
      const filterPrice = debouncedPriceRange && product.price >= debouncedPriceRange[0] && product.price <= debouncedPriceRange[1];
      return filterCategory && filterBrand && filterPrice;
    });
  }, [debouncedCategory, debouncedBrand, debouncedPriceRange, products]);

  return filteredProducts;
};

export default useFilteredProducts;
