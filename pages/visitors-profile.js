import Main from "@/Components/Layout/Main";

export default function VisitorsProfile() {
  return (
    <>
      <Main seotitle="Visitor’s Profile" title={<>Visitor’s Profile</>}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <ul className="custom">
                <li>Automobile Engineers</li>
                <li>Automobile Sector Entrepreneurs</li>
                <li>End-users &amp; General visitors</li>
                <li>CEOs of Companies</li>
                <li>Certification &amp; Testing Agencies</li>
                <li>Components Suppliers</li>
                <li>Consultants</li>
                <li>Dealers</li>
                <li>Distributors</li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <ul className="custom">
                <li>Decision Makers</li>
                <li>Retailers</li>
                <li>Electric Vehicle Manufacturers</li>
                <li>Exporters</li>
                <li>Fleet operators</li>
                <li>Financial Institutes</li>
                <li>Government Department officials</li>
                <li>Industry Experts</li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <ul className="custom">
                <li>Insurance Companies</li>
                <li>Marketing Department officials</li>
                <li>Members of Associations</li>
                <li>Media Personnel</li>
                <li>NGO</li>
                <li>Press &amp; Magazines</li>
                <li>Purchase Department officials</li>
                <li>R &amp; D Organization</li>
              </ul>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
