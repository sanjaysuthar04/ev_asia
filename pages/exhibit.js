import Main from "@/Components/Layout/Main";
import Link from "next/link";

export default function Exhibit() {
  return (
    <>
      <Main
        seotitle="Exhibit"
        title={<>Exhibit at The smarter E India - Join Us in Gujarat!</>}
      >
        <div className="container">
          <div className="subtitle">
            Be part of EV Asia and present your innovative products and services
          </div>

          <p>Book your booth now and secure a great location!</p>
          <Link
            href={"https://mmiconnect.in/app/tse-2022/auth/login"}
            target="_blank"
            className="btn btn-primary"
          >
            Apply Now
          </Link>
        </div>
      </Main>
    </>
  );
}
