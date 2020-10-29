const medicineModel = require('./medicines.model');

module.exports.getMedicineById = async(req, res) => {
  const medId = req.query.id;
  const data = await medicineModel.findById(medId);
  res.status(200).send(data);
};

module.exports.getMedicines = async(req, res) => {
  const medId = req.query.id;
  const data = await medicineModel.findAll()
  res.status(200).send(data);
};