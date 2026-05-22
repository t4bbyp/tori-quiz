import { Outlet } from "react-router";
import Header from "../components/Header";
import classes from './rootLayout.module.css';
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
}
