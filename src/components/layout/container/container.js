import styles from './container.module.scss'

export const Container = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
};