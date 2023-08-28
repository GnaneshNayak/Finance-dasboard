import mongoose, { Schema, model } from 'mongoose';
import { loadType } from 'mongoose-currency';

loadType(mongoose);

const TransactionSchema = new Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } },
);

const Transaction = model('Transaction', TransactionSchema);

export default Transaction;
