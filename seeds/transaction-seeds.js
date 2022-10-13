const { Transaction } = require('../models');

const transactionData = 
[
    {
        id: 1,
        date: "01/01/01",
        balance: 200,
        type: "withdrawal",
        amount: 1000,
        user_id: 1,
        account_id: 1,
    },
    {
        id: 2,
        date: "01/01/01",
        balance: 200,
        type: "deposit",
        amount: 1000,
        user_id: 2,
        account_id: 2,
    },
    {
        id: 3,
        date: "01/01/01",
        balance: 200,
        type: "withdrawal",
        amount: 1000,
        user_id: 3,
        account_id: 3,
    },
    {
        id: 4,
        date: "01/01/01",
        balance: 200,
        type: "deposit",
        amount: 1000,
        user_id: 4,
        account_id: 4,
    },
]

const seedTransactions = () => Transaction.bulkCreate(transactionData);

module.exports = seedTransactions;
