const express = require('express');
const router = express.Router();

const controller = require('./medicines.controller');

router.get('/', [controller.getMedicines]);
// router.post('/', [controller.addMedicines]);
router.get('/:id', [controller.getMedicineById])

// export this router to use in our index.js
module.exports = router;
