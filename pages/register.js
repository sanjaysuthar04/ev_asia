import Main from "@/Components/Layout/Main";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <Main
        seotitle="Registration for EV Asia"
        title={<>Registration for EV Asia</>}
      >
        <div className="container">
          <div className="subtitle">Get your ticket</div>

          <p>Registration for EV Asia is available.</p>
          <Link
            href={
              "https://mmiconnect.in/tse-2024/visitor/registration?source=evasiawebsite"
            }
            target="_blank"
            className="btn btn-primary me-3"
          >
            Visitor Registration
          </Link>

          <Link
            href={
              "https://mmiconnect.in/app/tse-2024/registration/delegate?source=evasiawebsite"
            }
            target="_blank"
            className="btn btn-primary"
          >
            Conference Registration
          </Link>
        </div>
      </Main>
    </>
  );
}
