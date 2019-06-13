const fnRoutes = require('./controller/paths')
const fnLinks = require('./controller/links')
const validateLinks = require('./controller/validate')


const mdLinks = async (route, options) => {
	try {
		const routeValidate = fnRoutes.validatePathAbsolute(route)
		const routeArr = await fnRoutes.getPathsOfRoute(routeValidate)
		const linksRoute = await fnLinks.getLinksMd(routeArr)
		if (options.validate) {
			return validateLinks(linksRoute)
		} else {
			return linksRoute
		}
	}
	catch (err) {
		return err
	}
}

mdLinks('/home/leslie/Documents/LIM009-fe-md-links/README.md', { validate: false})
	.then(res => console.log(res))
	.catch(err => console.log(err))

module.exports = mdLinks

