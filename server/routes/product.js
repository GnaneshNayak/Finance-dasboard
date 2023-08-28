import express from 'express';
import Product from '../modal/Product.js';

const router = express.Router();
// console.log('hi');

router.get('/products', async (req, res) => {
  // console.log(hell);
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (er) {
    res.status(404).json({ er: error.message });
  }
});

export default router;
