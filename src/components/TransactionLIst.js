import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionLIst = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <>
            <h3>History</h3>

            {transactions.length !== 0 ? (
                <ul className="list">
                    {transactions.map((transaction) => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))}
                </ul>
            ) : (
                <span>Nothing to show, add new transaction</span>
            )}
        </>
    );
};
