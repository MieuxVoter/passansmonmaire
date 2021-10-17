/* eslint react/prop-types: 0 */
import {useState} from "react";
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from "semantic-ui-react";
import Link from "next/link";
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => setOpen(!isOpen);

  return (
    <>
      <Head><title>Pas Son Mon Maire</title></Head>
      <header>
        <Link href="/">
          <a className="navbar-brand">
            <div className="d-flex flex-row">
              <div className="align-self-center">
                <img src="/logos/logo-color.svg" alt="logo" height="32" />
              </div>
              <div className="align-self-center ml-2">
                <div className="logo-text">
                  <h1>
                    Pas Sans Mon Maire
                    <small>Je mobilise mon maire pour un choix démocratique des parrainages.</small>
                  </h1>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </header>
    </>
  );
}

export default Header;
