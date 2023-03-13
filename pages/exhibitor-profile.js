import Main from "@/Components/Layout/Main";

export default function ExhibitorProfile() {
  return (
    <>
      <Main
        seotitle="Exhibitor Profile"
        title={
          <>
            Exhibitor <span className="fw-semibold">Profile</span>
          </>
        }
      >
        <div className="container inner_page__ex_profile">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Electric vehicles (BEV, PHEV, FCEV)
                  </h5>
                  <div className="card-text">
                    <ul className="custom">
                      <li>Passenger cars</li>
                      <li>
                        Light vehicles (three-wheeler, bikes, scooters, etc.)
                      </li>
                      <li>Commercial & special purpose vehicles,</li>
                      <li>buses, trucks</li>
                      <li>
                        Others All-Terrain Vehicle (ATVs), Electric Boats, Karts
                        & aircraft
                      </li>
                      <li>Materials for electric vehicles</li>
                      <li>Powertrain</li>
                      <li>Vehicle components</li>
                      <li>Mobility services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Automotive Component</h5>
                  <div className="card-text">
                    <ul className="custom">
                      <li>Automotive Ancillary </li>
                      <li>Connectors, Harnesses</li>
                      <li>Drive System</li>
                      <li>Automotive Motors</li>
                      <li>Controllers</li>
                      <li>Battery Technology & Automation</li>
                      <li>Semi-Conductor & Passive Elements</li>
                      <li>Power Devices</li>
                      <li>Passive Elements </li>
                      <li>Advanced driver assistance systems (ADAS)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Infotainment Systems</h5>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Lighting systems LED</h5>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Measurement and Simulation</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
