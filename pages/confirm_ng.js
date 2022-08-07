import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import axios from "axios";
import { TransactionContext } from "../contexts/TransactionContext";

// export const getStaticProps = async () => {
//   const user = await axios({
//     method: "post",
//     url: "https://rgw.k8s.apis.ng/centric-platforms/uat/enaira-user/GetUserDetailsByWalletAlias",
//     headers: {
//       ClientId: "75354d5ad2981d9b27771b7470019997",
//     },
//     data: {
//       wallet_alias: "@eonuoha.01",
//       user_type: "user",
//       channel_code: "APISNG",
//     },
//   });
//   console.log(user);

//   return {
//     props: { hits, nbPages },
//   };
// };

const Confirm = () => {
  const router = useRouter();
  const { bank, amount, rAccNo, note, walletAlias, rCountry } =
    useContext(TransactionContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setTimeout(() => {
      router.push("/checkout");
    }, 1000);
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const user = await axios({
          method: "post",
          url: "https://rgw.k8s.apis.ng/centric-platforms/uat/enaira-user/GetUserDetailsByWalletAlias",
          headers: {
            ClientId: "75354d5ad2981d9b27771b7470019997",
          },
          data: {
            wallet_alias: "@eonuoha.01",
            user_type: "user",
            channel_code: "APISNG",
          },
        });
        console.log(user);
      };
      fetchData();
    } catch (error) {
      console.error;
    }
  });

  return (
    <section id="dashboard">
      <div className="container py-4 bg-light">
        <div className=" row justify-content-center">
          <div className="col-md-8 bg-white p-5">
            <div className="pb-5 mb-3">
              <h3 className="text-center text-primary fw-bold pb-3 mt-5">
                TRANSACTION DETAILS
              </h3>

              <div className="bg-light p-5">
                <label htmlFor="name" className="form-label fw-bold">
                  From
                </label>
                <p className="border p-2 bg-light">Mike Marmol</p>
                <label htmlFor="name" className="form-label">
                  Country
                </label>
                <p className="border p-2 bg-light">{rCountry}</p>
                <label htmlFor="name" className="form-label">
                  Account Number
                </label>
                <p className="border p-2 bg-light">{rAccNo}</p>
                <label htmlFor="name" className="form-label">
                  Bank
                </label>
                <p className="border p-2 bg-light">{bank}</p>
                <label htmlFor="name" className="form-label">
                  Amount
                </label>
                <p className="border p-2 bg-light">{amount}</p>
                <label htmlFor="name" className="form-label">
                  Transaction Fee
                </label>
                <p className="border p-2 bg-light">#10.00</p>
                <label htmlFor="name" className="form-label">
                  Note
                </label>
                <p className="border p-2 bg-light">{note}</p>
                <label htmlFor="name" className="form-label fw-bold">
                  To
                </label>
                <p className="border p-2 bg-light">Bola Mustapha</p>
                <label htmlFor="name" className="form-label">
                  e-Naira Wallet Alias
                </label>
                <p className="border p-2 bg-light">{walletAlias}</p>
                <label htmlFor="name" className="form-label">
                  e-Naira Wallet ID
                </label>
                <p className="border p-2 bg-light">{walletAlias}</p>

                <label htmlFor="name" className="form-label">
                  Please input your 4-digit pin to confirm your transaction
                </label>
                <input
                  type="text"
                  className="form-control mb-3 mb-3"
                  id="name"
                  required
                />

                <div className="text-center mt-4 px-5">
                  <button
                    type="submit"
                    className="btn btn-secondary px-5 py-2"
                    onClick={submitHandler}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirm;
