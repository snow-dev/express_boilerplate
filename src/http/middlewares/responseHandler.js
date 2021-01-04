
export default (promise) => async (req, res, next) => {
	try {
		const result = await promise(req, res, next);
		// return res.send(result);
		return res.send({
			data: result,
			message: 'OK',
			error: false,
			statusCode: res.statusCode
		});
	} catch (err) {
		next(err);
	}
};