//create and Export Config Variables

let environments = {};

//Staging
environments.staging = {
  port: 3000,
  envName: 'staging',
};

//Prodcution
environments.production = {
  port: 5000,
  envName: 'production',
};

//Determibe which environment was passed as a command line argument
let currrentEnvironment =
  typeof process.env.NODE_ENV == 'string'
    ? process.env.NODE_ENV.toLowerCase()
    : '';

let environmentToExport =
  typeof environmentToExport[currrentEnvironment] == 'object'
    ? environments[currrentEnvironment]
    : environments.staging;

module.exports = environmentToExport;
