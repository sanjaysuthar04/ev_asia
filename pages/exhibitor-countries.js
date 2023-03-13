import Main from "@/Components/Layout/Main";

export default function ExhibitorCountries() {
  return (
    <>
      <Main
        seotitle="Exhibitor Countries"
        title={
          <>
            Exhibitor <span className="fw-semibold">Countries</span>
          </>
        }
      >
        <div className="container inner_page__ex_countries">
          <div className="row">
            <div className="col-12 col-md-2">
              <div className="ex_country_box">
                <div className="ex_country_box__inner">India</div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="ex_country_box">
                <div className="ex_country_box__inner">China</div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="ex_country_box">
                <div className="ex_country_box__inner">Taiwan</div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="ex_country_box">
                <div className="ex_country_box__inner">Indonesia</div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="ex_country_box">
                <div className="ex_country_box__inner">Japan</div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="ex_country_box">
                <div className="ex_country_box__inner">Thailand</div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="ex_country_box">
                <div className="ex_country_box__inner">Malaysia</div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="ex_country_box">
                <div className="ex_country_box__inner">South Korea</div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="ex_country_box">
                <div className="ex_country_box__inner">Germany</div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="ex_country_box">
                <div className="ex_country_box__inner">Many More..</div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
