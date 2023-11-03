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
                <span className="date">21 | 22 | 23</span> Feb’24 <br />
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
                <div className="mt-3 mb-4 px-3">
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
                <div className="mb-4 px-3">
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
                <div className="px-3">
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

        <section className="mt-60">
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
                  <div className="col-12 col-md-6">
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
                  <div className="col-12 col-md-6">
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

                  <div className="col-12 col-md-6">
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
                  </div>

                  <div className="col-12 col-md-6">
                    <p>
                      <strong>Abhishek Gaurav</strong>
                      <br />
                      Senior Business Manager
                      <br />
                      Tel: <a href="tel:+912242554719">+91 22 4255 4719</a>
                      <br />
                      Handphone: <a href="tel:+919650958256">+91 9650958256</a>
                      <br />
                      <a href="mailto:abhishek.gaurav@mm-india.in">
                        abhishek.gaurav@mm-india.in
                      </a>
                    </p>
                  </div>

                  <div className="col-12 col-md-6">
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
                  </div>
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
