import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import ModalAmoForm from "../components/modalAmoForm/ModalAmoForm";
import AmoForm from "../components/AmoForm/AmoForm";
import { createPortal } from "react-dom";
import AmoFormMailingList from "../components/AmoFormMailingList/AmoFormMailingList";
import ModalMailingList from "../components/modalMailingList/ModalMailingList";

const AppLayout = () => {
  const [isOpenContact, setOpenContact] = useState(false);

  const handleToggleContact = (param?: string) => {
    if (param) {
      setOpenContact(false);
    } else {
      setOpenContact((prev) => !prev);
    }
  };

  useEffect(() => {
    document.title = "Season 5";
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header onContactOpen={handleToggleContact} />
      <Contact
        isOpenContact={isOpenContact}
        onContactClose={handleToggleContact}
      />
      <Outlet />
      <Footer />

      {createPortal(
        <ModalAmoForm>
          <div className="amoFormContainer">
            <AmoForm />
          </div>
        </ModalAmoForm>,
        document.body
      )}
      {createPortal(
        <ModalMailingList>
          <div className="amoFormContainerMailingList">
            <AmoFormMailingList />
          </div>
        </ModalMailingList>,
        document.body
      )}
    </>
  );
};

export default AppLayout;
