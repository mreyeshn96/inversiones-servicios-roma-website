import * as React from 'react';
import { useTranslation, Link } from 'gatsby-plugin-react-i18next';	

import SelectLanguage from './../shared/SelectLanguage';

import AppContext from '../../contexts/AppContext';

const Header = ({ data }) => {

  const { t } = useTranslation();
  const { lang } = React.useContext(AppContext);
  const [ responsiveMenu, setResponsiveMenu ] = React.useState(false);

  const onClickMenu = () => {
    setResponsiveMenu(!responsiveMenu);
  }
  
  return (
    <div className="phStickyWrap ">
      <header id="pageHeader" className="headerFixer">
        <div className="hdTopBar bg-dark position-relative">
          <div className="container">
            <div className="row">
              <div className="col-9 d-none d-md-flex align-items-center">
                <ul className="list-unstyled d-flex mb-0 hdScheduleList fwMedium fontAlter mb-0">
                  <li>
                    <span className="icnWrap  d-flex align-items-center justify-content-center text-white flex-shrink-0 mr-1 mr-lg-3">
                      <i className="bx bx-support">
                        <span className="sr-only">icon</span>
                      </i>
                    </span>
                    <div className="descrWrap">
                      <strong className="title  fwMedium text-white">
                        {t("PhoneNumber")}
                      </strong>
                      <p>
                        <Link to="/contactus">{data.companyPhone}</Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="icnWrap  d-flex align-items-center justify-content-center text-white flex-shrink-0 mr-1 mr-lg-3">
                      <i className="bx bx-at">
                        <span className="sr-only">icon</span>
                      </i>
                    </span>
                    <div className="descrWrap">
                      <strong className="title d-block fwMedium text-white">
                      {t("EmailUs")}:
                      </strong>
                      <p>
                        <a href="mailto:Mail@Example.com">{data.companyEmail}</a>
                      </p>
                    </div>
                  </li>
            
                  
                </ul>
              </div> 
              <div className="col-12 col-md-3 d-md-flex justify-content-md-end position-static">

								<div href="/" className="hdBtn d-flex align-items-center justify-content-center fwMedium fontAlter"><SelectLanguage /></div>
							</div>
            </div>
          </div>
        </div>
        <div className="hdHolder clearfix pt-2 pb-2 pt-lg-5 pb-lg-5 position-relative">
          <div className="container">
            <div className="logo">
              <Link to="/" >
                <img
                  src="/images/logo.png"
                  className="img-fluid"
                  alt="logo"
                />
              </Link>
            </div>
            <nav
              id="pageNav"
              className="navbar navbar-expand-md navbar-light justify-content-end position-static"
            >
              <div
                className={`collapse navbar-collapse pageMainNavCollapse justify-content-end  ${responsiveMenu ? 'show' : ''}`}	
                id="pageMainNavCollapse"
              >
                <ul className="navbar-nav mainNavigation fwSemi fontAlter">
                  <li className="nav-item" >
                    <Link className="nav-link" to="/" activeClassName='active'>
                      {t("Home")}
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/aboutus" activeClassName='active' language={lang}>
                      {t("AboutUs")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ourservices" language={lang}>
                      {t("OurServices")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contactus" language={lang}>
                    {t("ContactUs")}
                    </Link>
                  </li>
                </ul>
              </div>
              
              <button
                className="navbar-toggler pageNavOpener position-relative"
                type="button"
                data-toggle="collapse"
                data-target="#pageMainNavCollapse"
                aria-controls="pageMainNavCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={onClickMenu}
              >
                <span className="navbar-toggler-icon">
                  <span className="sr-only">menu</span>
                </span>
              </button>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
