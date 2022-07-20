import * as React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Parallax, Pagination, Navigation } from 'swiper';

const IndexPage = () => {
  const { t } = useTranslation();


  return (
    <Layout>
       <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=2000)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          </div>
          <div className="alignHolder d-flex align-items-center w-100">
							<div className="align w-100 py-7">
								<div className="container">
									<div className="row">
										<div className="col-12 col-md-8 col-xl-6">
											<h1 className="text-white mb-4 wow fadeInDown">{t('slider1.text')}</h1>
											<div className="wow fadeInDown" data-wow-delay="0.5s">
												<p>{t('We provide the best managing financial advice in the market and we are efficient in our services')}.</p>
											</div>
											<div className="d-flex flex-wrap ibBtnsWrap mx-n2 mx-md-n3 pt-3">
												<a href="/aboutus" className="btn smooth mb-3 btnThemeWhite position-relative border-0 p-0 mx-2 mx-md-3 wow bounceIn" data-wow-delay="1s" data-hover={t('AboutUs')}>
													<span className="d-block btnText">{t('AboutUs')}</span>
												</a>
												<a href="/ourservices" className="btn smooth mb-3 btnTheme position-relative border-0 p-0 mx-2 mx-md-3 wow bounceIn" data-wow-delay="1.5s" data-hover={t('OurServices')}>
													<span className="d-block btnText">{t('OurServices')}</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
          </div>
        </SwiperSlide>
     
      </Swiper>
    </Layout>
  );
};

export default IndexPage;

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
