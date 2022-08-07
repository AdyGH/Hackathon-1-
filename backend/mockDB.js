// init a cache for us to save preferences into, as if it were a database
let cache = {};

exports.setCache = (newCache) => {
  cache = newCache;
};

exports.getCache = () => {
  return cache;
};
