import { Box, MapList } from '../../ui';
import ProductCard from './productCard/ProductCard';
import useFilteredProducts from '../../../hooks/useFilteredProducts';
import NotFound from '../notFound/NotFound';
import styles from './productlist.module.css';

const ProductList = () => {
  const filteredProducts = useFilteredProducts();

  if (!filteredProducts.length) return <NotFound />;

  return (
    <Box as='section' className={styles.productListContainer}>
      <MapList items={filteredProducts} renderItem={({ category, brand, price, rating, imageUrl }) => 
        <ProductCard brand={brand} price={price} rating={rating} src={imageUrl} cardTitle={category} />} getKey='id' />
    </Box>
  );
};

export default ProductList;
