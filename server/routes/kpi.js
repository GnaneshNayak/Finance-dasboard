import express from 'express';
import KPI from '../modal/KPI.js';

const router = express.Router();
// console.log('hi');

router.get('/kpis', async (req, res) => {
  // console.log(hell);
  try {
    const kpis = await KPI.find();

    res.status(200).json(kpis);
  } catch (er) {
    res.status(404).json({ er: error.message });
  }
});

export default router;
