import Link from "next/link";
import Image from "next/image";

const transfer = () => {
  return (
    <div className="container py-4 bg-light">
      <div className="row justify-content-center my-5">
        <div className="col-lg-10 my-5 bg-white p-5">
          <h3 className="display-5">Where do you want to send money to?</h3>

          <div className="row p-3 mt-3 justify-content-center">
            <div className="col-md-5 m-3 card shadow p-4">
              <h3 className="fw-bold mb-3">Nigeria</h3>
              <Link href="/creditor_ng">
                <Image
                  src="/ng-flag.png"
                  alt="Nigeria"
                  width="300"
                  height="200"
                />
              </Link>
            </div>
            <div className="col-md-5 m-3 card shadow p-4">
              <h3 className="fw-bold mb-3 ">Other Countries</h3>
              <Link href="/creditor_ab">
                <Image
                  src="/globe.jpg"
                  alt="Nigeria"
                  width="300"
                  height="200"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transfer;
