const isProd = process.env.NODE_ENV;
const Root = isProd ? require('./Root.prod') : require('./Root.dev');

module.exports = Root;
