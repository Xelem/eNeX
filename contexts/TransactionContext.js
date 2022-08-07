import React, { createContext, useState } from "react";

export const TransactionContext = createContext();

const TransactionContextProvider = (props) => {
  const [rCountry, setRCountry] = useState(null);
  const [bank, setBank] = useState(null);
  const [amount, setAmount] = useState(null);
  const [rAccNo, setRAccNo] = useState(null);
  const [note, setNote] = useState(null);
  const [walletAlias, setWalletAlias] = useState(null);

  return (
    <TransactionContext.Provider
      value={{
        rCountry,
        setRCountry,
        bank,
        setBank,
        amount,
        setAmount,
        rAccNo,
        setRAccNo,
        note,
        setNote,
        walletAlias,
        setWalletAlias,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;
