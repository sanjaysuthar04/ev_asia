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
            A premium platform created with a vision to unite all the Asian EV
            stakeholders to showcase their innovative products to their
            respective buyers from all the neighboring countries which can aid
            their business to grow.
          </p>

          <div className="subtitle mb-3">Mission </div>
          <ul className="custom">
            <li>Make Asian Roads Pollution free.</li>
            <li>Lead Asia to Net Zero Carbon Emission</li>
            <li>Increase EV Trade in Asia</li>
            <li>Bring Entire EV Industry under One Roof</li>
          </ul>

          <picture>
            <img src="/about-ev.png" alt="About EV Asia" className="w-100 mb-5" />
          </picture>

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

          <div className="subtitle mb-3">EV Market in India </div>
          <p>
            The Indian automobile industry ranked fifth largest globally and is
            expected to become the third largest by 2030 as the demand for EV is
            growing tremendously due to population rise. So dependence on
            conventional energy resources is not suitable as India imports
            nearly 80% of its crude oil requirements. Moreover, NITI Aayog aims
            to achieve 70% penetration of EVs in all types by 2030, intending to
            attain net zero carbon emissions by 2070. According to the Ministry
            of Heavy Industries, around 0.6 million EVs were registered in India
            in the last three years.
          </p>
          <p>
            There have been several reputed studies (NITI Aayog, CEEW-CEF, RBSA
            Advisors, KPMG, etc.) conducted internationally on the EV industry
            scenario and here are some of the projections to meet India&rsquo;s
            EV ambition:
          </p>
          <ul className="custom">
            <li>
              India electric vehicle market is projected to grow from $3.21
              billion in 2022 to $113.99 billion by 2029, at a CAGR of 67% in
              the forecast period, 2022-2030.
            </li>
            <li>39% of new vehicles sold will be electric vehicles by 2030.</li>
            <li>
              The Cumulative EV sales is to cross over 100 million by FY 2030
            </li>
            <li>
              An estimated annual battery capacity of 158 GWh is required by FY
              2030
            </li>
            <li>
              The cumulative investment needed is over US$ 180 &ndash; 200
              billion &ndash; Rs 12,50,000 crore.
            </li>
            <li>
              The BEV segment dominated in 2020 &amp; is anticipated to be US$
              116.80 billion by 2030
            </li>
            <li>
              India needs about 400,000 charging stations for 2 million EVs that
              could ply on the roads by 2026.
            </li>
          </ul>
          <picture>
            <img src="/market-overview.png" alt="About EV Asia" className="w-100 mb-5" />
          </picture>
        </div>
      </Main>
    </>
  );
}
