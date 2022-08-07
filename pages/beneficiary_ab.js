import { useRouter } from "next/router";
import { useContext } from "react";
import { TransactionContext } from "../contexts/TransactionContext";

const CreditorNG = () => {
  const router = useRouter();
  const { setRCountry, setBank, setRAccNo, setNote } =
    useContext(TransactionContext);
  const submitHandler = (e) => {
    e.preventDefault();
    setTimeout(() => {
      router.push("/confirm_ab");
    }, 1000);
  };

  return (
    <section id="signup">
      <div className="container py-4 bg-light">
        <div className="row justify-content-center my-5">
          <div className="col-lg-10 my-5 bg-white p-5">
            <form onSubmit={submitHandler}>
              <h2 className="py-3">Beneficiary&apos;s Details</h2>
              <label htmlFor="name" className="form-label">
                Resident Country
              </label>
              <select
                className="form-select"
                id="subject"
                onChange={(e) => setRCountry(e.target.value)}
              >
                <option value="Ghana" defaultValue="Ghana">
                  Ghana
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Spain">Spain</option>
              </select>

              <label htmlFor="email" className="form-label">
                Bank
              </label>
              <select
                className="form-select"
                id="subject"
                onChange={(e) => setBank(e.target.value)}
              >
                <option value="G Bank" defaultValue="G Bank">
                  G Bank
                </option>
                <option value="Bank of Accra">Bank of Accra</option>
                <option value="United Bank of Africa">
                  United Bank of Africa
                </option>
              </select>

              <label htmlFor="password" className="form-label mt-3">
                Account Number
              </label>
              <input
                type="text"
                className="form-control mb-3"
                required
                onChange={(e) => setRAccNo(e.target.value)}
              />

              <label htmlFor="password" className="form-label">
                Add a Note
              </label>
              <input
                type="text"
                className="form-control mb-3"
                required
                onChange={(e) => setNote(e.target.value)}
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

export default CreditorNG;
