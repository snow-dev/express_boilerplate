import env from 'env';  // eslint-disable-line
import path from 'path';
import glob from 'glob';

// import chai from 'chai';
// import chaiHttp from 'chai-http';
//
// chai.use(chaiHttp);
// require('../tests/auth.test')

const test = path.join(process.env.ROOT_PATH, 'tests')
console.debug("Test directory: ", test)

glob.sync(`${test}/**/*.test.js`).forEach(file => {
	require(path.resolve(file))
})