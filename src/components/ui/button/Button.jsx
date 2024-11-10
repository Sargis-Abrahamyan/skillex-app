import styles from './button.module.css';

export const Button = ({ children, variant, ...props }) => (
  <button className={`${styles.button} ${styles[variant]}`} {...props}>
    {children}
  </button>
);
