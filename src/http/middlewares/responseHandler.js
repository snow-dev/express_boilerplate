
export default (promise) => async (req, res, next) => {
	try {
		const result = await promise(req, res, next);
		return res.send(result);
		// return res.send({
		// 	results: result,
		// 	message: 'OK',
		// 	error: false,
		// 	statusCode: res.statusCode
		// });
	} catch (err) {
		next(err);
	}
};