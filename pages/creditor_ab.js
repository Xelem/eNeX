import { useRouter } from "next/router";
import { useContext } from "react";
import { TransactionContext } from "../contexts/TransactionContext";

const BeneficiaryNG = () => {
  const router = useRouter();
  const { setWalletAlias, setAmount } = useContext(TransactionContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setTimeout(() => {
      router.push("/beneficiary_ab");
    }, 1000);
  };

  return (
    <section id="signup">
      <div className="container py-4 bg-light">
        <div className="row justify-content-center my-5">
          <div className="col-lg-10 my-5 bg-white p-5">
            <form onSubmit={submitHandler}>
              <h2 className="py-3">Sender&apos;s Details</h2>
              <label htmlFor="name" className="form-label">
                e-Naira Wallet alias
              </label>
              <input
                type="text"
                className="form-control mb-3 mb-3"
                id="name"
                required
                onChange={(e) => setWalletAlias(e.target.value)}
              />
              <label htmlFor="name" className="form-label mt-3">
                Amount
              </label>
              <input
                type="number"
                className="form-control mb-3 mb-3"
                id="name"
                onChange={(e) => setAmount(e.target.value)}
                required
              />

              <div className="text-center mt-4 px-5">
                <button type="submit" className="btn btn-secondary px-5 py-2">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiaryNG;
