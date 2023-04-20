import Head from "next/head";
import Image from "next/image";
import Menu from "@/Components/Layout/Menu";
import Main from "@/Components/Layout/Main";

export default function AboutEVAsiaExpo() {
  return (
    <>
      <Main
        seotitle="About EV ASIA Expo"
        title={
          <>
            About <span className="fw-semibold">EV ASIA Expo</span>
          </>
        }
      >
        <div className="container">
          <p>
            Organized by Messe Muenchen India, co-located with The smarter E
            India, EV Asia Expo will be India&apos;s most vibrant marketplace driving
            innovation in the EV Industry.{" "}
            <strong>
              EV Asia Expo, India&apos;s premium trade show for electric mobility,
              batteries, and charging infrastructure, provides an ideal platform
              for Asia&apos;s top manufacturers to showcase their most innovative
              solutions and network with key industry players in the electric
              vehicle segment from India and across the globe.
            </strong>
          </p>

          <p>
            In keeping with the Government of India&apos;s commitment to clean energy
            and sustainable mobility, EV Asia Expo is the meeting place of
            innovators and a launch pad for groundbreaking new technologies. EV
            Asia Expo, along with its customized B2B meetings, curated
            conferences, test drive zones, and start-up zones, provides an
            incomparable platform for face-to-face interactions. The show
            provides an opportunity to source the latest technologies, identify
            new partners, strengthen supply chains, and introduce advanced
            solutions. It is a comprehensive B2B event to get acquainted with
            new market trends and interact with like-minded individuals and
            unlock new business relationships and strengthen existing ones.
          </p>
          <picture>
            <img
              src="/about-ev.png"
              alt="About EV Asia"
              className="w-100 mb-5"
            />
          </picture>

          <div className="subtitle mb-3">Mission </div>
          <ul className="custom">
            <li>Make Asian Roads Pollution free.</li>
            <li>Lead Asia to Net Zero Carbon Emission</li>
            <li>Increase EV Trade in Asia</li>
            <li>Bring Entire EV Industry under One Roof</li>
          </ul>

          <div className="subtitle mb-3">EV ASIA HIGHLIGHTS </div>
          <ul className="custom">
            <li>
              <strong>International </strong>Pavilions
            </li>
            <li>
              Customized <strong>Pre-Fixed Business Matching</strong> at
              Platinum Lounge
            </li>
            <li>
              A <strong>Test Drive</strong> Zone
            </li>
            <li>
              Young Entrepreneur Hub (<strong>Start-Up Zone</strong>)
            </li>
            <li>
              Innovation Hub (<strong>Top 10 innovation</strong> will be
              displayed)
            </li>
            <li>
              Bout of <strong>New Product Launches</strong>
            </li>
            <li>
              International <strong>Buyer&rsquo;s Delegations</strong>
            </li>
            <li>
              <strong>Pan India Dealers &amp; Distributors</strong> Congregation
            </li>
            <li>
              Concurrently organized with &ldquo;
              <strong>
                The smarter E India Expo, Intersolar India &amp; Electrical
                Energy Storage expo&rdquo;.
              </strong>
            </li>
          </ul>

          <div className="subtitle mb-3">
            Indian Electric Vehicles Market Overview
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <p>
                The Indian automobile industry, currently among the top five
                largest in the world, is projected to become the third largest
                by 2030. The rising demand for electric vehicles (EVs) will
                propel a major portion of this growth
              </p>
              <p>
                The future of the EV industry is promising in India.
                <strong>
                  To reach the Net Zero carbon emissions target by 2070, India
                  aims to achieve EV sales penetration of 70% for commercial
                  cars, 30% for private cars, 40% for buses, and 80% for two and
                  three-wheelers by 2030
                </strong>
                . To realize this vision, the government has launched several
                initiatives such as consumer subsidies, 100% FDI, and
                production-linked incentives for EV manufacturing.
              </p>
              <p>
                Additionally, Green Growth is one of the top 7 priorities of the
                government as indicated in the Union Budget 2023 and the pro-EV
                stance by the government will further encourage investments in
                EV manufacturing and boost the demand for EVs in India.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <picture>
                <img
                  src="/market-overview.png"
                  alt="About EV Asia"
                  className="w-100 mb-5"
                />
              </picture>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-3">
              <picture>
                <img
                  src="/power-2-drive.png"
                  alt="Power2India"
                  className="w-100 mb-5"
                />
              </picture>
            </div>
            <div className="col-12 col-md-9">
              <p>
                One of the world&apos;s largest trade fairs for EV manufacturers,
                innovators, and policymakers,{" "}
                <strong>Power2Drive Europe</strong> is held every year in
                Munich, Germany, along with three other international
                exhibitions representing the new energy world - The smarter E
                Europe (Intersolar Europe, ees Europe and EM-Power Europe).{" "}
                <strong>
                  Last year, these fairs attracted 1,356 exhibitors from 46
                  countries and over 65,000 visitors from 149 countries with the
                  same theme & concept “EV Asia Expo”
                </strong>{" "}
                is being launched in India.
              </p>
            </div>
          </div>
          <div className="subtitle mb-3">Glimpse of Power2Drive India</div>
          <div className="row">
            <div className="col-12 col-md-3">
              <picture>
                <img
                  src="/power2drive/1.png"
                  alt="Power2India"
                  className="w-100 mb-5"
                />
              </picture>
            </div>
            <div className="col-12 col-md-3">
              <picture>
                <img
                  src="/power2drive/2.png"
                  alt="Power2India"
                  className="w-100 mb-5"
                />
              </picture>
            </div>
            <div className="col-12 col-md-3">
              <picture>
                <img
                  src="/power2drive/3.png"
                  alt="Power2India"
                  className="w-100 mb-5"
                />
              </picture>
            </div>
            <div className="col-12 col-md-3">
              <picture>
                <img
                  src="/power2drive/4.png"
                  alt="Power2India"
                  className="w-100 mb-5"
                />
              </picture>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
