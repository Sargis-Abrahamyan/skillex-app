import { RATING } from '../../../../constants';
import { Box } from '../../../ui';
import { Text, Title, Image } from '../../../ui';
import styles from './productCard.module.css';

const ProductCard = ({ src, alt, price, brand, rating, cardTitle }) => (
  <Box className={styles.card}>
    <Box className={styles.imageBlock}>
      <Image src={src} alt={alt} />
    </Box>
    <Title as='h4' size='xs'>
      {cardTitle}
    </Title>
    <Text>{price} $</Text>
    <Text>{brand}</Text>
    <Text>
      {RATING} : {rating}
    </Text>
  </Box>
);

export default ProductCard;
