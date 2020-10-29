const medicineModel = require('./medicines.model');

module.exports.getMedicineById = async(req, res) => {
  const medId = req.query.id;
  const data = await medicineModel.findById(medId);
  res.status(200).send(data);
};

module.exports.getMedicines = async(req, res) => {
  const data = await medicineModel.findAll()
  res.status(200).send(data);
};

module.exports.getMedicineByName = async(req, res) => {
  const medName = req.params.name;
  if (!medName) {
    return res.status(400).send({ error: 'Medicine name is missing in query params'});
  }
  const data = await medicineModel.getMedicineByName(medName.toLowerCase());
  res.status(200).send(data);
};

module.exports.addMedicine = async(req, res) => {
  try {
    const data = req.body;
    if (!data.name || !data.quantity || !data.price) {
      return res.status(400).send({ error: 'Medicine name, quantity and price are required'});
    }
    const existingMed = await medicineModel.getMedicineByName(data.name.toLowerCase());
    if (existingMed && existingMed.name) {
      return res.status(400).send({ error: 'Medicine already exist with same name'});
    }
    await medicineModel.addMedicine(data);
    res.status(200).send({data});
  } catch(err) {
    res.status(500).send({ error: err.message});
  }
};