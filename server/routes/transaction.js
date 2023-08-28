import express from 'express';
import Transaction from '../modal/Transaction.js';

const router = express.Router();
// console.log('hi');

router.get('/transactions', async (req, res) => {
  // console.log(hell);
  try {
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    res.status(200).json(transactions);
  } catch (er) {
    res.status(404).json({ er: error.message });
  }
});

export default router;
