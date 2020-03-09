var formidable = require('formidable');

module.exports = function(options = {}){

  return function(req, res, next){
    if (req.method === 'GET' || req.method === 'DELETE')
      return next();
    if (!req.headers
        || !req.headers['content-type']
        || !req.headers['content-type'].includes('multipart/form-data'))
      return next();

    var form = new formidable.IncomingForm();

    for (var key in options) {
      form[key] = options[key];
    }

    form.parse(req, function(err, fields, files){
      if (err) next(err);
      req.body = fields;
      req.files = files;
      next();
    });
  }
}
