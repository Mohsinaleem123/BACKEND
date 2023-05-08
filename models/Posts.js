const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    uid: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    quantity: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    long: {
      type: Number,
      required: true
    },
    lat: {
      type: Number,
      required: true
    },
    nid: {
      type: String,
      required: true
    },
    nname: {
      type: String,
      required: true
    },
    nnumber: {
      type: String,
      required: true
    },
    accepted: {
      type: Number,
      required: true
    }
  });
  const Posts = mongoose.model('Posts', PostSchema,'Posts');
  
  module.exports=Posts;