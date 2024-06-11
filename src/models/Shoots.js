/** @format */

import { Schema, model, models } from 'mongoose';

const ShootsSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    intro: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      required: true,
    },
    paragraph: [
      {
        type: String,
      },
    ],
    title: {
      type: String,
      required: true,
    },
    alt: [
      {
        type: String,
      },
    ],
    image: {
      type: String,
      required: true,
    },
    card: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    og: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Shoots = models.Shoots || model('Shoots', ShootsSchema);

export default Shoots;
