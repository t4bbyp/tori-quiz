import { Outlet } from "react-router";
import Header from "../components/Header";
import classes from "./rootLayout.module.css";
import { useState } from "react";
import Loader from "../components/Loader";
import Footer from '../components/Footer';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
