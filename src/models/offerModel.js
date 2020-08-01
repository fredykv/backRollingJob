const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  summary: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  categories: {
    type: String,
    required: true,
    trim: true,
  },
  profession: {
    type: String,
    required: true,
    trim: true,
  },
  availability: {
    type: String,
    required: true,
    trim: true,
  },
  workplace: {
    type: String,
    required: true,
    trim: true
  },
  active: {
    type: Boolean,
    default:true,
    trim: true,
  },
  quota:{
    type: Number,
    required: true,
    trim: true
  },
  publicationdate: {
    type: String,
    required: true,
    trim: true,
  },
  postulateRef:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Postulation' }],
  candidateRef:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' }],
}, { versionKey: false });

const OfferModel = mongoose.model("Offer", OfferSchema);

module.exports = OfferModel;
