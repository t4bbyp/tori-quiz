import { Outlet } from "react-router";
import Header from "../components/Header";
import classes from "./rootLayout.module.css";

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
