

function log(message) {
  console.log(__filename + ': ' + message);
  console.log(message);

}

module.exports.log = log;