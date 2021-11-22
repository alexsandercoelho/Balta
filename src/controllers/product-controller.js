'use strict';

const mongoose = required('mongoose');
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {
  res.status(201).send(req.body);
};


exports.put = (req, res, next) => {
  const id = req.params.id;  //recuperar da url (params)
  res.status(200).send({ 
    id: id, 
    item: req.body
  });
};

exports.delete = (req, res, next) => {
  res.status(200).send(req.body);
};