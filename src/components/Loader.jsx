import classes from './Loader.module.css';

export default function Loader() {
  return (
    <div className={classes.loader_container}>
      <div className={classes.loader}></div>
    </div>
  );
}
