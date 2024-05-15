const _ = require("lodash");


const CaseModel = require("../models/cases.model");

const caseController = {
  getAllCases: async (req, res) => {
    console.log(req.body);
    
    const cases = await CaseModel.find();

    res.json({ cases });
  },
  createCase: async (req, res) => {
    const bodyParams = _.pick(req.body, ["case", "lawyer", "duration", "cost"]);

    console.log(req.body);
  
    let cases = new CaseModel({ ...bodyParams });
 cases = await cases.save();
 
    return res.json(cases);
  },
  
};

module.exports = caseController;
