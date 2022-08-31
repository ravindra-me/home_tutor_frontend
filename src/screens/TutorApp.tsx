import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import About from "./About/About";
import ContactUs from "./ContactUs/ContactUs";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./SignUp/Signup";
type TutorAppProps = {
  isAuth: boolean;
};

type Params = {
  tab?: string;
};
export default function TutorApp(props: TutorAppProps) {
  const { tab } = useParams<Params>();
  const tabMapping: any = {
    login: <Login />,
    signup: <Signup />,
    about: <About />,
    contact: <ContactUs />,
    home: <Home />,
  };

  return (
    <div>
      <Header />
      <main>
        {tab != undefined ? (
          tabMapping[tab] ? (
            tabMapping[tab]
          ) : (
            <div>Page not found</div>
          )
        ) : (
          <div>Page not found</div>
        )}
      </main>
      <Footer />
    </div>
  );
}
