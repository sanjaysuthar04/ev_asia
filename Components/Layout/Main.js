import Head from "next/head";
import Image from "next/image";
import Menu from "@/Components/Layout/Menu";
import Link from "next/link";

export default function Main(props) {
  return (
    <>
      <Head>
        <title>{props.seotitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="container">
          <div className="d-flex py-3">
            <div className="me-3">
              <Link href={"/"}><Image src={"/LOGO.png"} width={172} height={86} alt="Logo" /></Link>
            </div>
            <div className="fs_24">
              <div className="ev_my">
                <span className="date">12 | 13 | 14</span> Feb’24 <br />
              </div>
              <div className="venue">
                Helipad Exhibition Centre, Gandhinagar, <br />
                Gujarat, India
              </div>
            </div>

            <div className="d-flex flex-fill justify-content-end">
              <div className="text-center">
                <small className="d-block mb-1">CO-ORGANISER</small>
                <Image src={"/IESA.jpg"} width={168} height={50} alt="Logo" />
              </div>
              <div className="text-center ms-3">
              <small className="d-block mb-1">ORGANISER</small>
                <Image src={"/mm.png"} width={124} height={50} alt="Logo" />
              </div>
            </div>
          </div>

          <Menu />
        </div>
      </header>

      <main className="innerpage">
        <div className="bg_subheader">
          <div class="container pt-60 pb-5">
            <div className="title clr_green">{props.title}</div>
          </div>
        </div>

        <section className="py-5">{props.children}</section>
      </main>
      <footer className="mt-60">
        <picture>
          <img src="/footer.png" alt="footer wave" className="w-100 mt-5" />
        </picture>
      </footer>
    </>
  );
}
