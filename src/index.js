const fnRoutes = require('./controller/paths');
const fnLinks = require('./controller/links');
const validateLinks = require('./controller/validate');

const mdLinks = async (route, options) => {
	const routeValidate = fnRoutes.validatePathAbsolute(route)
	const routesArr = await fnRoutes.getPathsOfRoute(routeValidate)
	const routesMd = fnLinks.filesMd(routesArr)

	const linksRoute = await fnLinks.getLinksMd(routesMd)
	if (options.validate) {
		return validateLinks(linksRoute)
	} else {
		return linksRoute
	}
}

module.exports = mdLinks
