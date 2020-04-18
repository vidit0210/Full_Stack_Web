//Library for storing and editing data

let fs = require('fs');
let path = require('path');

let lib = {};

//base  directory of data folder
lib.baseDir = path.join(__dirname, '/../.data/');
lib.create = (dir, file, data, callback) => {
  //open file for writing
  fs.open(
    lib.baseDir + dir + '/' + file + '.json',
    'wx',
    (err, fileDecriptor) => {
      if (!err && fileDecriptor) {
        let stringData = JSON.stringify(data);
        fs.writeFile(fileDecriptor, stringData, (err) => {
          if (!err) {
            fs.close(fileDecriptor, (err) => {
              if (!err) {
                callback(false);
              } else {
                callback('Error Closing Files');
              }
            });
          } else {
            ('Error Writing false');
          }
        });
      } else {
        callback('Could not create file,May already exists');
      }
    }
  );
};

//Read datad from file

lib.read = (dir, file, callback) => {
  fs.readFile(lib.baseDir + dir + '/' + file + '.json', 'utf8', (err, data) => {
    callback(err, data);
  });
};

lib.update = (dir, fileName, data, callback) => {
  fs.open(
    lib.baseDir + dir + '/' + fileName + '.json',
    'r+',
    (err, fileDecriptor) => {
      if (!err && fileDecriptor) {
        let stringData = JSON.stringify(data);

        fs.truncate(fileDecriptor, (err) => {
          if (!err) {
            fs.writeFile(fileDecriptor, stringData, (err) => {
              if (!err) {
                fs.close(fileDecriptor, (err) => {
                  if (!err) {
                    callback(false);
                  } else {
                    callback('error Closing File');
                  }
                });
              } else {
                callback('Error writing to existing File');
              }
            });
          } else {
            callback('Error truncating the file');
          }
        });
      } else {
        callback('Could not open File  it may not exist');
      }
    }
  );
};

lib.delete = (dir, file, callback) => {
  fs.unlink(lib.baseDir + dir + '/' + file + '.json', (err) => {
    if (!err) {
      callback(false);
    } else {
      callback('Error Deleting the file');
    }
  });
};

module.exports = lib;
