
export default (promise) => async (req, res, next) => {
	try {
		const result = await promise(req, res, next);
		// return res.status(200).send(result);
		return res.send({
			data: result,
			message: 'OK',
			error: false,
			statusCode: res.statusCode
		});
	} catch (err) {
		return res.send(err)
	}
};