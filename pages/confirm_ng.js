import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import axios from "axios";
import { TransactionContext } from "../contexts/TransactionContext";

// export const getStaticProps = async () => {
//   var data = JSON.stringify({
//     wallet_alias: "@eonuoha.01",
//     user_type: "user",
//     channel_code: "APISNG",
//   });

//   var config = {
//     method: "post",
//     url: "https://rgw.k8s.apis.ng/centric-platforms/uat/enaira-user/GetUserDetailsByWalletAlias",
//     headers: {
//       ClientId: "75354d5ad2981d9b27771b7470019997",
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };

//   axios(config)
//     .then(function (response) {
//       const data = JSON.stringify(response.data);
//       const user = data.response_data;
//       console.log(user);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   return {
//     props: { user },
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
                <p className="border p-2 bg-light">GH₵ {amount}</p>
                <label htmlFor="name" className="form-label">
                  Equivalent Amount
                </label>
                <p className="border p-2 bg-light">₦400</p>
                <label htmlFor="name" className="form-label">
                  Transaction Fee
                </label>
                <p className="border p-2 bg-light">GH₵ 10.00</p>
                <label htmlFor="name" className="form-label">
                  Description
                </label>
                <p className="border p-2 bg-light">{note}</p>
                <label htmlFor="name" className="form-label fw-bold">
                  To
                </label>
                <p className="border p-2 bg-light">EMMANUEL ONUOHA EZECHI</p>
                <label htmlFor="name" className="form-label">
                  e-Naira Wallet Alias
                </label>
                <p className="border p-2 bg-light">{walletAlias}</p>
                <label htmlFor="name" className="form-label">
                  e-Naira Wallet Address
                </label>
                <p className="border p-2 bg-light">
                  01G5P2NYVBPBK362FJK6X682CS
                </p>

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
