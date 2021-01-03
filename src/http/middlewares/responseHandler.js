
export default (promise) => async (req, res, next) => {
	try {
		let resp = {};
		const result = await promise(req, res, next);
		
		return res.send({
			...resp,
			results: result,
			message: 'OK',
			error: false,
			statusCode: res.statusCode
		});
		
	} catch (err) {
		next(err);
	}
};