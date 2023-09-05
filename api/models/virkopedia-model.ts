import { Schema, model } from 'mongoose'

const virkopediaSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

export const Virkopedias = model('Virkopedias', virkopediaSchema)
