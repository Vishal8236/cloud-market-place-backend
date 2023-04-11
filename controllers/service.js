const Service = require("../models/service");

exports.createService = (req, res) => {
  const service = new Service(req.body);
  service.save((err, service) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save category in DB!"
      });
    }
    res.json({ service , 'message': 'service create successfully'});
  });
};

exports.getCSPServices = (req, res) => {
  var query = {csp_id : req.body['csp_id']};
  Service.find(query).exec((err, services) => {
    if (err) {
      return res.status(400).json({
        error: "services not found!"
      });
    }
    res.json(services);
  });
};
