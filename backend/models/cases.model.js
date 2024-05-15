const { required } = require("joi");
const mongoose = require("mongoose");

const caseSchema = mongoose.Schema({

  case: {
    type:String,
    required:true,
    },
   lawyer: {
    type: String,
    required: true,
   },
   duration: {
    type: String,
    required: true,
    },
    cost: {
    type: Number,
    required: true,
    },
});

const CaseModel = mongoose.model("cases", caseSchema);

module.exports = CaseModel;
