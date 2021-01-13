import app from 'app';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp)
const expect = chai.expect
const request = chai.request

describe( '/GET pong /pong', () => {
	
	it( 'Must return message: Pong is alive!', (done) => {
		request(app).get('/api/v1/pong').then(response => {
			expect(response.statusCode).to.equal(200)
			expect(response.body).to.have.property('message');
			expect(response.body.message).to.have.equal('Pong is alive :v');
			done()
		}).catch(err => {
			done(err);
		})
	} );
} );