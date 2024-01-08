const Customer = require('./model');
const APIFeatures = require('./utils/apiFeatures')

exports.customerName = (req, res, next) => {
  //req.query.limit
  //req.query.sort
  req.query.fields = 'name';   // phone, address...
  next();
};

exports.getAllCustomers = async (req, res) => {
  try {
    //Execute Query: query.sort().select().skip().limit()
    const features = new APIFeatures(Customer.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const customers = await features.query;
    
    // Send response
    res.status(200).json({
      status: 'success',
      results: customers.length,
      data: {
        customers,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        customer,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createCustomer = async (req, res) => {
  try {
    const newCustomer = await Customer.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        customer: newCustomer,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        customer,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// exports.getCustomerStatus = async (req, res) => {
//   try {
//     const status = Customer.aggregate([
//       {
//         $match: { statusAverage: { $gte: 4  } }
//       },
//       {
//         $group: {
//           _id: null,
//           avgStatus: { $avg: '$statusAverage' }
//         }
//       }
//     ])

//     res.status(200).json({
//       status: 'success',
//       data: {
//         status
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// }