import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '../components/layout';

const ContactUs = ({ location }) => {
    const { t } = useTranslation();
	const [success, setSuccess] = React.useState(false);

	React.useEffect(() => {
		if( location.search ) {
			const params = new URLSearchParams(location.search);
			const onSuccess = params.get('success');
			
			if( onSuccess === 'true' ) {
				setSuccess(true);
			}
		}
	}, [location.search]);
	

  return (
    <Layout>
		{success && <div className="alert alert-success">{t('contactussuccess')}</div>}
    <div id="scrollto5" className="scrolltoblock">
				<aside className="contactBlock pt-7 pb-6 pt-md-10 pb-md-10 pt-md-10 pb-lg-14 pt-xl-14 pb-xl-20 position-relative">
					<div className="container">
						<header className="headingHead hhv2 text-center mb-7 mb-md-10 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
							<h2>
								<strong className="d-block headingTitle fontBase font-weight-normal">{t('ContactUs')}</strong>
								<span className="d-block">{t('Get In Touch')}</span>
							</h2>
						</header>
						<div className="row wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s">
							<div className="col-12 col-md-10 offset-md-1">
								<form encType="multipart/form-data" action="/email.php" method="POST" id="contactformus" className="ctForm" data-toggle="validator">
									<div className="row">
										<div className="col-12 col-sm-6">
											<div className="form-group">
												<input type="text" className="form-control w-100 d-block" placeholder={t("Your Name")} required data-error="NEW ERROR MESSAGE" id="name" name="name"/>
											</div>
										</div>
										<div className="col-12 col-sm-6">
											<div className="form-group">
												<input type="email" className="form-control w-100 d-block" placeholder={t("Your Email")} required data-error="NEW ERROR MESSAGE" id="email" name="email" />
											</div>
										</div>
										<div className="col-12 col-sm-6">
											<div className="form-group">
												<input type="tel" className="form-control w-100 d-block" placeholder={t("Your Phone")} required data-error="NEW ERROR MESSAGE" id="tel" name="tel" />
											</div>
										</div>
									
										<div className="col-12">
											<div className="form-group">
												<textarea className="form-control w-100 d-block" placeholder={t("Your Message")} required data-error="NEW ERROR MESSAGE" id="message" name="message"></textarea>
											</div>
										</div>
										<div className="col-12 col-sm-12">
											<div className="form-group">
												<input type="file" className="form-control w-100 d-block" accept="image/png, image/gif, image/jpeg, .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" multiple id="file" name="file[]"/>
											</div>
										</div>
									
										<div className="col-12">
											<div id="msgSubmit" className="form-message hidden"></div>
										</div>
										
									</div>
									<div className="text-center">
										<button type='submit' id="form-submit" className="btn btnTheme btnNoOver">{t("Send Message")} <i className="bx bx-right-arrow-alt icn ml-1"><span className="sr-only">icon</span></i></button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<span className="bgMap position-absolute">
						<img src="/images/mapbg.png" className="img-fluid" alt="map" />
					</span>
				</aside>
			</div>
    </Layout>
  );
}

export default ContactUs;
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
