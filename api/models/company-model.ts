import { Schema, model } from 'mongoose'

const companiesSchema = new Schema(
  {
    uid: {
      type: String,
      required: [true, 'Please enter a cvr number'],
    },
    cvrNumber: {
      type: String,
    },
    companyName: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    postNoCity: {
      type: String,
      required: false,
    },
    companyType: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

export const Companies = model('Companies', companiesSchema)
