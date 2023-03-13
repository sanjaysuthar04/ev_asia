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
            <div className="subtitle">Intersolar India expo </div>
            <p>Description will share later</p>
            <div className="subtitle">Electrical Energy Storage (EES) Expo</div>
            <p>Description will share later</p>
          </div>
        </div>
      </Main>
    </>
  );
}
