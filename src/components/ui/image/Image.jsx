import styles from './image.module.css';

export const Image = ({ src, alt, className, ...props }) => (
  <img src={src} alt={alt} className={`${className} ${styles.image}`} {...props} />
)