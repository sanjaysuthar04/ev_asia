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
                    Electric vehicles
                  </h5>
                  <div className="card-text">
                    <ul className="custom">
                      <li>Buses, trucks</li>
                      <li>Commercial & special purpose vehicles</li>
                      <li>
                        Light vehicles (three-wheeler, bikes, scooters, etc.)
                      </li>
                      <li>Materials for electric vehicles</li>
                      <li>Mobility services</li>
                      <li>
                        Others All-Terrain Vehicle (ATVs), Electric Boats, Karts
                        & aircraft
                      </li>
                      <li>Passenger cars</li>
                      <li>Powertrain</li>
                      <li>Vehicle components</li>
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
                      <li>Advanced driver assistance systems (ADAS)</li>
                      <li>Automotive Ancillary </li>
                      <li>Automotive Motors</li>
                      <li>Battery Technology & Automation</li>
                      <li>Connectors, Harnesses</li>
                      <li>Controllers</li>
                      <li>Drive System</li>
                      <li>Passive Elements </li>
                      <li>Power Devices</li>
                      <li>Semi-Conductor & Passive Elements</li>
                      <li>For passenger cars</li>
                      <li>For light vehicles (scooters, bikes, etc.)</li>
                      <li>For commercial vehicles, buses, trucks</li>
                      <li>For railways, watercraft, aircraft</li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Charging Infrastructure/ Charging Stations</h5>
                </div>
              </div>
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
