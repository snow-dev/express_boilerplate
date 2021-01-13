
export const loggerMiddleware = function(req, res, next) {
	console.log("My Logger!");
	next();
}