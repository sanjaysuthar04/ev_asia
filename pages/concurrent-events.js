import Main from "@/Components/Layout/Main";

export default function ConcurrentEvents() {
  return (
    <>
      <Main
        seotitle="Concurrent Events"
        title={
          <>
            Concurrent <span className="fw-semibold">Events</span>
          </>
        }
      >
        <div className="container">
          <div className="subtitle">Conferences </div>
          <div>
            <p>Topics &ndash;</p>
            <ul className="custom">
              <li>
                <em>Fire Safety in EV </em>
              </li>
              <li>
                <em>
                  Export potential for Electric Vehicles &amp; EV Components
                  Manufacturers
                </em>
              </li>
              <li>
                <em>
                  India&rsquo;s plan for Electric Charging Facilities in 2 tier
                  &amp; 3 tier cities.
                </em>
              </li>
            </ul>

            <div className="subtitle">New Product Launches </div>
            <p>Description will share later</p>
            <div className="subtitle">Spot Check - A Test Drive Zone </div>
            <p>Description will share later</p>
            <div className="subtitle">Buyer - Seller Forum</div>
            <p>Description will share later</p>

            <div className="subtitle">The smarter E India</div>
            <p>
              The smarter E India is India&apos;s innovation hub for the new
              energy world. It presents cross-sector energy solutions and
              technologies and reflects the interaction of the solar, energy
              storage and electric mobility industry.
            </p>

            <div className="subtitle">Intersolar India </div>
            <p>
              Intersolar India in Gujarat is India&apos;s most pioneering
              exhibition and conference for India&apos;s solar industry. It
              takes place annually and has a focus on the areas of
              photovoltaics, PV production and solar thermal technologies.
            </p>
            <div className="subtitle">Electrical Energy Storage (EES) Expo</div>
            <p>
              EES India is India&apos;s leading electrical energy storage exhibition.
              ees India will focus on batteries, electrical energy storage
              technologies and systems attracting investors, utilities,
              installers, manufacturers and project developers from all over the
              world.
            </p>
          </div>
        </div>
      </Main>
    </>
  );
}
