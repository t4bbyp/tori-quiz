import classes from './Loader.module.css';

export default function Loader() {
  return (
    <div className={classes.loader_container} role="status" aria-label="loading">
      <div className={classes.loader} aria-hidden="true"></div>
    </div>
  );
}
