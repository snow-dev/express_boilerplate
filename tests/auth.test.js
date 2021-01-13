import app from 'app';
import chai from 'chai';
import chaiHttp from 'chai-http';
import faker from 'faker'

chai.use(chaiHttp)
const expect = chai.expect;
const request = chai.request;

describe( 'HTTP Auth Tests ', () => {
	
	it( 'it should return Internal Server error for invalid user and password ', (done) => {
	    const firstName = faker.name.firstName();
	    const lastName = faker.name.lastName();
	    const user = {};
	    user.name = `${firstName} ${lastName}`;
	    user.email = 'badmail';
	    user.password = "12345";
	    user.conf_password = '12345';
	    user.status = 1;
	    
	    request(app).post('/api/auth/register').send(user).then(response => {
	      expect(response.body.statusCode).to.be.equal(500);
	      expect(response.body.data[0]?.message).to.be.equal('"email" must be a valid email')
	      done()
	    }).catch(err => {
	    	done(err);
	    })
	} );
} );