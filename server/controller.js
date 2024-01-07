const fs = require('fs');
const Customer = require('./model');

exports.customerName = (req, res, next) => {
  req.query.fields = 'name, phone';
  next();
}

class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  
}

exports.getAllCustomers = async (req, res) => {
  try {
    console.log(req.query);
    //Filtering
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);
    //console.log(req.query, queryObj)

    //Advanced filter
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    //console.log(JSON.parse(queryStr));
    let query = Customer.find(JSON.parse(queryStr));

    //Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    //Fieldsd
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }

    //Pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;
    //page=3&limit=10, 1-10, page=1, 1-20, page=2, 21-30, page=3
    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numCustomers = await Customer.countDocuments();
      if(skip >= numCustomers) throw new Error('This page does not exist')
    }

    //Execute Query
    const customers = await query;
    // query.sort().select().skip().limit()

    // Send response
    res.status(200).json({
      status: 'success',
      //requestedAt: req.requestTime,
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
      message: 'Invalid',
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
    res.status(400).json({
      status: 'fail',
      message: 'Invalid',
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
    res.status(400).json({
      status: 'fail',
      message: 'Invalid',
    });
  }
};
