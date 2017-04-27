const isProd = process.env.NODE_ENV;
const store = isProd ? require('./configureStore.prod') : require('./configureStore.dev');

module.exports = store;
