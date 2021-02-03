import app from 'app';
import chai from 'chai';
import chaiHttp from 'chai-http';
import faker from 'faker'

chai.use(chaiHttp)
const expect = chai.expect;
const request = chai.request;

describe( 'HTTP Auth Tests ', () => {
	
	const firstName = faker.name.firstName();
	const lastName = faker.name.lastName();
	const email = `${firstName.toString().toLowerCase()}@${lastName.toString().toLowerCase()}.com`;
	let userId = null;
	
	it( 'should register a user successfully and return ist data', () => {
		const user = {};
		user.name = `${firstName} ${lastName}`;
		user.email = email
		user.password = "sesamo";
		user.conf_password = 'sesamo';
		user.status = 1;
		
		request(app).post('/api/auth/register').send(user).then(response => {
			userId = response.body.id;
			expect(response.body.statusCode).to.be.equal(200);
			expect(response.body.name).to.be.equal(user.name);
			expect(response.body.email).to.be.equal(user.email);
			expect(response.body.password).to.be.equal(user.password);
			expect(response.body.status).to.be.equal(user.status);
			done()
		}).catch(err => {
			done(err);
		});
	} );
	
	it( 'should delete given user by email', (done) => {
		request(app).post('/api/auth/delete').send( { email: email }).then(response => {
			expect(response.body.statusCode).to.be.equal(200);
			expect(response.body.error).to.be.equal(false);
			done();
		}).catch(err => {
			done(err);
		})
	} );
	
	it( 'should return 204 status for not registered email', (done) => {
		request(app).post('/api/auth/delete').send( { email: 'not@registered.com' }).then(response => {
			expect(response.body.statusCode).to.be.equal(204);
			expect(response.body.error).to.be.equal(true);
			expect(response.body.data.message).to.be.equal('No user found!');
			done();
		}).catch(err => {
			done(err);
		})
	} );
	
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