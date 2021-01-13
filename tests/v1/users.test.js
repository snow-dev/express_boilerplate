import app from 'app';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp)
const expect = chai.expect
const request = chai.request

describe( '/POST user login', () => {
	
	// const user = {
	// 	"email": "snow@mail.com",
	// 	"password": "sesamo"
	// };
	
	it( 'should login the user', (done) => {
		request(app).post('/api/auth/login').send({
			"username": "snow@mail.com",
			"password": "sesamo"
		}).then(response => {
			expect(response.statusCode).to.equal(200)
			expect(response.body).to.have.property('error')
			done()
		}).catch(err => {
			done(err);
		})
	} );
	
	it( 'should return error for incomplete data', (done) => {
		request(app).post('/api/auth/login').send({
			"username": "snow@mail.com"
		}).then(response => {
			expect(response.statusCode).to.equal(200)
			expect(response.body).to.have.property('error').to.equal(false)
			done()
		}).catch(err => {
			done(err);
		})
	} );
} );


// describe( 'GET /users without credentials', () => {
// 	it( 'should should return a 500 internal server error trying to sign in user with bad email', () => {
//
// 	} );
// } );

