import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Menu from "@/Components/Layout/Menu";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // changesa re done now git is pubhci
  return (
    <>
      <Head>
        <title>EV ASIA Expo</title>
        <meta
          name="description"
          content="A premium platform created with a vision to unite all the Asian EV stakeholders to showcase their innovative products to their respective buyers from all the neighboring countries which can aid their business to grow"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="container">
          <div className="d-flex py-3">
            <div className="me-3">
              <Image src={"/LOGO.png"} width={195} height={86} alt="Logo" />
            </div>
            <div className="fs_24">
              <div className="ev_my">
                <span className="date">12 | 13 | 14</span> Feb’25 <br />
              </div>
              <div className="venue">
                Helipad Exhibition Centre, Gandhinagar, <br />
                Gujarat, India
              </div>
            </div>

            <div className="d-flex flex-fill justify-content-end">
              <div className="text-center">
                <small className="d-block mb-1">CO-ORGANISER</small>
                <Image src={"/IESA.jpg"} width={168} height={50} alt="Logo" />
              </div>
              <div className="text-center ms-3">
                <small className="d-block mb-1">ORGANISER</small>
                <Image src={"/mm.png"} width={124} height={50} alt="Logo" />
              </div>
            </div>
          </div>
          <Menu />
        </div>
      </header>

      <main>
        <div className="bg_light_green ev_slider">
          <Slider {...settings}>
            <div className="ev_slider__img">
              <picture>
                <img
                  data-aos="zoom-in"
                  className="w-100"
                  src={"/slider/Lubi.jpg"}
                  alt="Banner"
                />
              </picture>
            </div>
            <div className="ev_slider__img">
              <picture>
                <img
                  data-aos="zoom-in"
                  className="w-100"
                  src={"/slider/Reliance.jpg"}
                  alt="Banner"
                />
              </picture>
            </div>
            <div className="ev_slider__img">
              <picture>
                <img
                  data-aos="zoom-in"
                  className="w-100"
                  src={"/slider/ThaiHuwai.jpg"}
                  alt="Banner"
                />
              </picture>
            </div>
            <div className="ev_slider__img">
              <picture>
                <img
                  data-aos="zoom-in"
                  className="w-100"
                  src={"/slider/Registration.jpg"}
                  alt="Banner"
                />
              </picture>
            </div>
          </Slider>
          {/* <div class="container pt-60">
            <div class="row g-0">
              <div class="col-9">
                <div className="slider">
                  <picture>
                    <img className="w-100" src={"/banner.png"} alt="Banner" />
                  </picture>
                </div>
              </div>
              <div class="col-3 bg_blue p-4 text-center">
                <div className="title text-white">
                  Concurrent <span className="fw-semibold">Events</span>
                </div>
                <div className="mt-3 mb-4 px-3">
                  <a href="https://www.thesmartere.in/home" target="_blank">
                    <picture>
                      <img
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="w-100"
                        src={"/tsi.png"}
                        alt="Banner"
                      />
                    </picture>
                  </a>
                </div>
                <div className="mb-4 px-3">
                  <a href="https://www.thesmartere.in/home" target="_blank">
                    <picture>
                      <img
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="w-100"
                        src={"/intersolar.png"}
                        alt="Banner"
                      />
                    </picture>
                  </a>
                </div>
                <div className="px-3">
                  <a href="https://www.thesmartere.in/home" target="_blank">
                    <picture>
                      <img
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="w-100"
                        src={"/ees.png"}
                        alt="Banner"
                      />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="mt-60">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <picture>
                  <img
                    data-aos="zoom-in"
                    className="w-100"
                    src={"/img1.png"}
                    alt="Banner"
                  />
                </picture>
              </div>
              <div className="col-md-8 p-3">
                <div data-aos="fade-up" className="title clr_green">
                  About <span className="fw-semibold">EV Asia</span>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="mt-3">
                  <p>
                    A premium EV trade show where Asia’s top manufacturers will
                    showcase their most innovative products to expand their
                    business in India and neighboring countries.
                  </p>
                  <p>
                    EV Asia expo enables business by connecting the world with
                    India and India with the world. It fuels growth through its
                    global platform by creating effective networking
                    opportunities for suppliers and converging buyers from
                    different regions onto one trading platform.
                  </p>

                  <div className="subtitle">Show Highlights</div>
                  <div className="row gap-5 mt-3 text-center">
                    <div className="col">
                      <picture>
                        <img
                          src="/show-highlights/international-pavilions.png"
                          className="w-100"
                          alt="International Pavilions"
                        />
                      </picture>
                      International <br />
                      Pavilions
                    </div>
                    <div className="col">
                      <picture>
                        <img
                          src="/show-highlights/hybrid-booths.png"
                          className="w-100"
                          alt="Hybrid Booths"
                        />
                      </picture>
                      Hybrid <br />
                      Booths
                    </div>
                    <div className="col">
                      <picture>
                        <img
                          src="/show-highlights/conferences.png"
                          className="w-100"
                          alt="Conferences"
                        />
                      </picture>
                      Conferences
                    </div>
                    <div className="col">
                      <picture>
                        <img
                          src="/show-highlights/buyer-seller-forum.png"
                          className="w-100"
                          alt="Buyer-seller forum"
                        />
                      </picture>
                      Buyer-seller <br />
                      forum
                    </div>
                    <div className="col">
                      <picture>
                        <img
                          src="/show-highlights/test-drive-zone.png"
                          className="w-100"
                          alt="Test Drive Zone"
                        />
                      </picture>
                      Test Drive <br />
                      Zone
                    </div>
                  </div>

                  <div className="row gap-5 mt-3 text-center">
                    <div className="col">
                      <picture>
                        <img
                          src="/show-highlights/start-up-zone.png"
                          className="w-100"
                          alt="Start-Up Zone"
                        />
                      </picture>
                      Start-Up <br />
                      Zone
                    </div>
                    <div className="col">
                      <picture>
                        <img
                          src="/show-highlights/innovation-hub.png"
                          className="w-100"
                          alt="Innovation Hub"
                        />
                      </picture>
                      Innovation <br />
                      Hub
                    </div>
                    <div className="col">
                      <picture>
                        <img
                          src="/show-highlights/new-product-launches.png"
                          className="w-100"
                          alt="New Product Launches"
                        />
                      </picture>
                      New Product Launches
                    </div>
                    <div className="col">
                      <picture>
                        <img
                          src="/show-highlights/international-buyers-delegations.png"
                          className="w-100"
                          alt="International Buyer's Delegations"
                        />
                      </picture>
                      International Buyer&apos;s Delegations
                    </div>
                    <div className="col">
                      <picture>
                        <img
                          src="/show-highlights/pan-india-dealers-distributors.png"
                          className="w-100"
                          alt="Pan India Dealers & Distributors"
                        />
                      </picture>
                      Pan India Dealers & Distributors
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-12 col-md-6">
                      <ul className="mt-3 sh custom">
                        <li>
                          <span className="fw-bold">International</span>{" "}
                          Pavilions
                        </li>
                        <li>
                          Customized{" "}
                          <span className="fw-bold">
                            Pre-Fixed Business Matching
                          </span>{" "}
                          at Platinum Lounge
                        </li>
                        <li>
                          A <span className="fw-bold">Test Drive</span> Zone
                        </li>
                        <li>
                          Young Entrepreneur Hub{" "}
                          <span className="fw-bold">(Start-Up Zone)</span>
                        </li>
                        <li>
                          Innovation Hub (
                          <span className="fw-bold">Top 10 innovation</span>{" "}
                          will be displayed)
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-6">
                      <ul className="mt-3 sh custom">
                        <li>
                          Bout of{" "}
                          <span className="fw-bold">New Product Launches</span>
                        </li>
                        <li>
                          International{" "}
                          <span className="fw-bold">Buyer’s Delegations</span>
                        </li>
                        <li>
                          <span className="fw-bold">
                            Pan India Dealers & Distributors
                          </span>{" "}
                          Congregation
                        </li>
                        <li>
                          Concurrently organized with{" "}
                          <span className="fw-bold">
                            “The smarter E India Expo, Intersolar India &
                            Electrical Energy Storage expo”
                          </span>
                          .
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <picture>
                  <img
                    data-aos="zoom-in"
                    className="w-100"
                    src={"/market-overview.jpg"}
                    alt="Banner"
                  />
                </picture>
              </div>
              <div className="col-md-8 p-3">
                <div data-aos="fade-up" className="title clr_green">
                  Indian Electric Vehicles{" "}
                  <span className="fw-semibold">Market Overview</span>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="mt-3">
                  <p>
                    The Indian automobile industry, currently among the top five
                    largest in the world, is projected to become the third
                    largest by 2030. The rising demand for electric vehicles
                    (EVs) will propel a major portion of this growth
                  </p>
                  <p>
                    The future of the EV industry is promising in India. To
                    reach the Net Zero carbon emissions target by 2070, India
                    aims to achieve EV sales penetration of 70% for commercial
                    cars, 30% for private cars, 40% for buses, and 80% for two
                    and three-wheelers by 2030. To realize this vision, the
                    government has launched several initiatives such as consumer
                    subsidies, 100% FOL and production-linked incentives for EV
                    manufacturing
                  </p>

                  <p>
                    Additionally, Green Growth is one of the top 7 priorities of
                    the government as indicated in the Union Budget 2023 and the
                    pro-EV stance by the government will further encourage
                    investments in EV manufacturing and boost the demand for EVs
                    in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exhibitor Profile Section */}
        {/* <section className="ex_profile mt-60 py-60">
          <div className="container">
            <div className="title text-light">
              <span className="fw-semibold">Exhibitors</span> Profile
            </div>
            <div className="row mt-5">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="col-12 col-md-2"
              >
                <div className="imgbox">
                  <picture>
                    <img
                      src="/ex1.png"
                      className="w-100"
                      alt="Exhibitor Profile"
                    />
                  </picture>
                </div>
                <div className="text-center text-light mt-3">
                  Electric Vehicle
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="col-12 col-md-2"
              >
                <div className="imgbox">
                  <picture>
                    <img
                      src="/ex2.png"
                      className="w-100"
                      alt="Exhibitor Profile"
                    />
                  </picture>
                </div>
                <div className="text-center text-light mt-3">
                  Automotive Component
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="col-12 col-md-2"
              >
                <div className="imgbox">
                  <picture>
                    <img
                      src="/ex1.png"
                      className="w-100"
                      alt="Exhibitor Profile"
                    />
                  </picture>
                </div>
                <div className="text-center text-light mt-3">
                  Electric Vehicle
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="col-12 col-md-2"
              >
                <div className="imgbox">
                  <picture>
                    <img
                      src="/ex1.png"
                      className="w-100"
                      alt="Exhibitor Profile"
                    />
                  </picture>
                </div>
                <div className="text-center text-light mt-3">
                  Electric Vehicle
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="col-12 col-md-2"
              >
                <div className="imgbox">
                  <picture>
                    <img
                      src="/ex1.png"
                      className="w-100"
                      alt="Exhibitor Profile"
                    />
                  </picture>
                </div>
                <div className="text-center text-light mt-3">
                  Electric Vehicle
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="col-12 col-md-2"
              >
                <div className="imgbox">
                  <picture>
                    <img
                      src="/ex1.png"
                      className="w-100"
                      alt="Exhibitor Profile"
                    />
                  </picture>
                </div>
                <div className="text-center text-light mt-3">
                  Electric Vehicle
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="show_facts mt-60 py-60">
          <div className="container">
            <div className="title clr_blue">
              Show <span className="fw-semibold">Facts</span>
            </div>
            <div className="d-flex justify-content-start my-5">
              <div data-aos="fade-up" data-aos-delay="100" className="pe-5">
                <div className="sf_counter">10,000+</div>
                <div className="text-dark mt-2">Trade Visitors</div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="px-5 devider"
              >
                <div className="sf_counter">150+</div>
                <div className="text-dark mt-2">No. of Exhibitors</div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="px-5 devider"
              >
                <div className="sf_counter">50+</div>
                <div className="text-dark mt-2">Speakers</div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="ps-5 devider"
              >
                <div className="sf_counter">5+</div>
                <div className="text-dark mt-2">Country Pavilion</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-60" style={{ display: "none" }}>
          <div className="container">
            <div className="row justify-content-md-center">
              {/* <div className="col-12 col-md-8">
                <div className="title fw-semibold clr_blue text-center">
                  Partners
                </div>
              </div> */}
              <div className="col-12 col-md-12">
                <div className="download_section">
                  <div className="ds_header title fw-semibold text-light text-center py-3">
                    Quick Links
                  </div>
                  <div className="ds_body p-4 px-5">
                    <div className="ds_list">
                      <picture className="me-3">
                        <img src="/download.svg" alt="download icon" />
                      </picture>
                      Brouchure
                    </div>
                    <div className="ds_list">
                      <picture className="me-3">
                        <img src="/download.svg" alt="download icon" />
                      </picture>
                      Factsheets
                    </div>
                    <div className="ds_list">
                      <picture className="me-3">
                        <img src="/download.svg" alt="download icon" />
                      </picture>
                      Exhibitor Enquiry
                    </div>
                    <div className="ds_list">
                      <picture className="me-3">
                        <img src="/download.svg" alt="download icon" />
                      </picture>
                      Visitor Enquiry
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-60 partner-section partners_wrapper">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-12 col-md-12 text-center">
                <div className="title w-100 clr_green">
                  <span className="fw-semibold">Partner</span> Of EV Asia 2024
                </div>
              </div>

              <div className="col-12 col-md-3 text-center">
                <div className="subtitle text-center mt-3">Diamond Partner</div>
                <div className="row justify-content-center mt-3">
                  <div className="col-6 col-md-12">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/reliance-new-energy.jpg"
                        alt="Reliance New Energy"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 text-center">
                <div className="subtitle text-center mt-3">
                  Conference Gold Partner
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-12 col-md-12">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/jsw-steel.jpg"
                        alt="JSW Steel"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 text-center">
                <div className="subtitle text-center mt-3">Lanyard Partner</div>
                <div className="row justify-content-center mt-3">
                  <div className="col-12 col-md-12">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/waree.png"
                        alt="WAREE"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 text-center">
                <div className="subtitle text-center mt-3">
                  Registration Partner
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-12 col-md-12">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/gautam-solar.jpg"
                        alt="Gautam Solar"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 text-center">
                <div className="subtitle text-center mt-3">
                  Visitor Bag Partner
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-12 col-md-12">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/sma.jpg"
                        alt="SMA"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 text-center">
                <div className="subtitle text-center mt-3">
                  Conference Branding Partner
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-12 col-md-12">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/grew.jpg"
                        alt="GREW"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 text-center">
                <div className="subtitle text-center mt-3">Badge Partner</div>
                <div className="row justify-content-center mt-3">
                  <div className="col-12 col-md-12">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/credence.jpg"
                        alt="Credence"
                      />
                    </picture>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-12 text-center">
                <div className="subtitle text-center mt-3">
                  Onsite Branding Partners
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/alishan.png"
                        alt="Alishan"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/credence.jpg"
                        alt="Credence"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/dhash.png"
                        alt="Dhash"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/gautam-solar.jpg"
                        alt="Gautam Solar"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/genx.jpg"
                        alt="Genx"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/grew.jpg"
                        alt="GREW"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/hioki.png"
                        alt="Hioki"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/k_solare.png"
                        alt="Ksolare"
                      />
                    </picture>
                  </div>
                </div>
              </div>

              
              <div className="col-12 col-md-12 text-center">
                <div className="subtitle text-center mt-3">
                Knowledge | Conference Partners
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/ahk.jpg"
                        alt="AHK"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/giz.jpg"
                        alt="GIZ"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/igef.jpg"
                        alt="IGEF"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/ISTE.jpg"
                        alt="ISTE"
                      />
                    </picture>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-12 text-center">
                <div className="subtitle text-center mt-3">
                Association Partners
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/AIREA.png"
                        alt="AIREA"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/IESA.jpg"
                        alt="IESA"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/MASMA.jpg"
                        alt="MASMA"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/NSEFI.png"
                        alt="NSEFI"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/RPA.jpg"
                        alt="RPA"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/SESI.jpg"
                        alt="SESI"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/STFI.jpg"
                        alt="STFI"
                      />
                    </picture>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-12 text-center">
                <div className="subtitle text-center mt-3">
                Supporters
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/BSW.jpg"
                        alt="BSW"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/easy-of-doing.png"
                        alt="Easy of Doing Business"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/FIA.jpg"
                        alt="FIA"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/GFSI.jpg"
                        alt="GFSI"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/MSME.jpg"
                        alt="MSME"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/nh-for-ev.png"
                        alt="#NHforEV"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/SMEV.png"
                        alt="SMEV"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/SolarPower.png"
                        alt="Solar Power Europe"
                      />
                    </picture>
                  </div>
                  <div className="col-12 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/VDMA.jpg"
                        alt="VDMA"
                      />
                    </picture>
                  </div>
                </div>
              </div>

              {/* <div className="col-12 col-md-6 text-center">
                <div className="subtitle text-center mt-3">
                  Pavilion Partner
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-6 col-md-4">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/msme.png"
                        alt="MSME"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 text-center">
                <div className="subtitle text-center mt-3">
                  Startup Pavilion Partner
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-6 col-md-4">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/logos/IITM.png"
                        alt="IITM"
                      />
                    </picture>
                  </div>
                </div>
              </div> */}

             
              <div className="subtitle text-center mt-3">Media Partner</div>
              <div className="row justify-content-center mt-3">
                <div className="col-6 col-md-2">
                  <picture>
                    <img
                      className="partner-logo"
                      src="/logos/99-media-group.png"
                      alt="99 Media Group"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-60 partner-section con-events">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-12 col-md-12 text-center">
                <div className="title w-100 clr_green">
                  <span className="fw-semibold">Concurrent</span> Events
                </div>
              </div>
              <div className="col-12 col-md-12 text-center">
                <div className="row justify-content-center mt-3">
                  <div className="col-6 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/con-events/EES.jpg"
                        alt="EES"
                      />
                    </picture>
                  </div>
                  <div className="col-6 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/con-events/Intersolar.jpg"
                        alt="Intersolar"
                      />
                    </picture>
                  </div>
                  <div className="col-6 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/con-events/power2drive.jpg"
                        alt="power2drive"
                      />
                    </picture>
                  </div>
                  <div className="col-6 col-md-3">
                    <picture>
                      <img
                        className="partner-logo"
                        src="/con-events/TSE_2023.jpg"
                        alt="TSE_2023"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-60">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="title clr_green">Organizer</div>

                <p className="mt-2">
                  <strong>Messe Muenchen India Pvt. Ltd.</strong>
                  <br />
                  762/862, Solitaire Corporate Park,
                  <br />
                  Building No. 7, 6th Floor, <br />
                  Andheri East, Mumbai – 400093, <br />
                  Maharashtra
                  <br />
                  Website: <a href="https://www.mm-india.in">www.mm-india.in</a>
                </p>
              </div>
              <div className="col-12 col-md-8">
                <div className="title clr_green">Contact</div>
                <div className="row mt-2">
                  <div className="col-12 col-md-4">
                    <p>
                      <strong>Brijesh Nair</strong>
                      <br />
                      Group Exhibition Director
                      <br />
                      Tel: <a href="tel:+912242554707">+91 22 4255 4707</a>
                      <br />
                      Handphone: <a href="tel:+918080844022">+91 8080844022</a>
                      <br />
                      <a href="mailto:brijesh.nair@mm-india.in">
                        brijesh.nair@mm-india.in
                      </a>
                    </p>
                  </div>
                  <div className="col-12 col-md-4">
                    <p>
                      <strong>Ajay Dhull</strong>
                      <br />
                      Business Manager - TSE
                      <br />
                      Tel: <a href="tel:+912242554725">+91 22 4255 4725</a>
                      <br />
                      Handphone: <a href="tel:+919323360992">+91 9323360992 </a>
                      <br />
                      <a href="mailto:ajay.dhull@mm-india.in">
                        ajay.dhull@mm-india.in
                      </a>
                    </p>
                  </div>

                  <div className="col-12 col-md-4">
                    <p>
                      <strong>Gurusharan Dhillon</strong>
                      <br />
                      Director eMobility Services
                      <br />
                      Tel: <a href="tel:+912027714000">+91 20 2771 4000</a>
                      <br />
                      Handphone: <a href="tel:+919975552481">+91 9975552481</a>
                      <br />
                      <a href="mailto:gurusharan.dhillon@ces-ltd.com">
                        gurusharan.dhillon@ces-ltd.com
                      </a>
                    </p>
                  </div>

                  <div className="col-12 col-md-6">
                    <u>
                      <strong>India Energy Storage Alliance (IESA) :</strong>
                    </u>
                    <p>
                      <strong>Prosanjit Singh</strong>
                      <br />
                      Senior Manager
                      <br />
                      Handphone: <a href="tel:+919911383679">+91 9911383679</a>
                      <br />
                      <a href="mailto:prosanjit.singh@ces-ltd.com">
                        prosanjit.singh@ces-ltd.com
                      </a>
                    </p>
                  </div>

                  {/* <div className="col-12 col-md-6">
                    <p>
                      <strong>Shweta Ojha</strong>
                      <br />
                      Director - Business Alliance (North)
                      <br />
                      Tel: <a href="tel:+912242554719">+91 22 4255 4719</a>
                      <br />
                      Handphone: <a href="tel:+919167934930">+91 9167934930</a>
                      <br />
                      <a href="mailto:shweta.ojha@mm-india.com">
                        shweta.ojha@mm-india.com
                      </a>
                    </p>
                  </div> */}

                  {/* <div className="col-12 col-md-6">
                    <p>
                      <strong>Souvik Sanyal</strong>
                      <br />
                      Deputy Project Director – TSE
                      <br />
                      Tel: <a href="tel:+912242554711">+91 22 4255 4711</a>
                      <br />
                      Handphone: <a href="tel:+918017503697">+91 8017503697</a>
                      <br />
                      <a href="mailto:souvik.sanyal@mm-india.in">
                        souvik.sanyal@mm-india.in
                      </a>
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-60">
        <picture>
          <img src="/footer.png" alt="footer wave" className="w-100 mt-5" />
        </picture>
      </footer>
    </>
  );
}
