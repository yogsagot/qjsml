var parser = require('./parser.js');
var fs = require('fs').promises;
var path = require('path');

(async () => {
    data = await fs.readFile(path.join(__dirname, 'src', "index.qjsml"));
    console.log(parser.parse(data.toString()));
})();

