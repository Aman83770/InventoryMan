const mongoose = require('mongoose');

const mongoConnection = require('../mongoose.connection');

// const pastDate = new Date(+new Date() - 24 * 60 * 60 * 1000);
const MedicinesModelSchema = mongoose.Schema(
  {
    name: String,
    price: Number,
    quantity: Number
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'modified_at' } },
);

const medicinesModel = mongoConnection.model('medicines', MedicinesModelSchema);

async function findById(id) {
  return medicinesModel.findOne({ _id: id })
    .then((result) => {
      delete result.__v;
      return result;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

async function findAll() {
  return medicinesModel.find({ })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

async function addMedicine(data) {
  return medicinesModel.create(data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

async function getMedicineByName(name) {
  return medicinesModel.findOne({name})
    .then((result) => {
      delete result.__v;
      return result;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

module.exports = {
  model: medicinesModel,
  findById,
  findAll,
  addMedicine,
  getMedicineByName
};
