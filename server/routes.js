const express = require('express');
const controller = require('./controller');

const router = express.Router();

// router.param('id', controller.checkID);
router.route('/names').get(controller.customerName, controller.getAllCustomers);

router
  .route('/')
  .get(controller.getAllCustomers)
  .post(controller.createCustomer);

router
  .route('/:id')
  .get(controller.getCustomer)
  .patch(controller.updateCustomer)
  .delete(controller.deleteCustomer);

module.exports = router;
