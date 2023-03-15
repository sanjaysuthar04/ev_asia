import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Menu from "@/Components/Layout/Menu";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
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
              <Image src={"/LOGO.png"} width={172} height={86} alt="Logo" />
            </div>
            <div className="fs_24">
              <div className="ev_my">
                <span className="date">17 | 18 | 19</span> Jan’24 <br />
              </div>
              <div className="venue">
                Helipad Exhibition Centre, Gandhinagar, <br />
                Gujarat, India
              </div>
            </div>
          </div>
          <Menu />
        </div>
      </header>

      <main>
        <div className="bg_light_green">
          <div class="container pt-60">
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
                <div className="mt-3 mb-4">
                  <a href="https://www.thesmartere.in/" target="_blank">
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
                <div className="mb-4">
                  <picture>
                    <img
                      data-aos="fade-up"
                      data-aos-delay="200"
                      className="w-100"
                      src={"/intersolar.png"}
                      alt="Banner"
                    />
                  </picture>
                </div>
                <div>
                  <picture>
                    <img
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="w-100"
                      src={"/ees.png"}
                      alt="Banner"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-60 pt-60">
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

                  <div className="row">
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
                  </div>
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
            <div className="title text-light">
              Show <span className="fw-semibold">Facts</span>
            </div>
            <div className="row my-5">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="col-12 col-md-4"
              >
                <div className="sf_counter">150+</div>
                <div className="text-center text-light mt-3">
                  No. of Exhibitors
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="col-12 col-md-4"
              >
                <div className="sf_counter">10,000+</div>
                <div className="text-center text-light mt-3">
                  Trade Visitors
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="col-12 col-md-4"
              >
                <div className="sf_counter">50+</div>
                <div className="text-center text-light mt-3">Speakers</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-60">
          <div className="container">
            <div className="row justify-content-md-center">
              {/* <div className="col-12 col-md-8">
                <div className="title fw-semibold clr_blue text-center">
                  Partners
                </div>
              </div> */}
              <div className="col-12 col-md-4">
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
      </main>
      <footer className="mt-60">
        <picture>
          <img
            src="/bottom_wave.svg"
            alt="footer wave"
            className="w-100 mt-5"
          />
        </picture>
      </footer>
    </>
  );
}
