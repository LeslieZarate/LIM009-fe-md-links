const fnRoutes = require('./controller/paths');
const fnLinks = require('./controller/links');
const validateLinks = require('./controller/validate');

const mdLinks = async (route, options) => {
	try {
		const routeValidate = fnRoutes.validatePathAbsolute(route)
		const routesArr = await fnRoutes.getPathsOfRoute(routeValidate)
		const routesMd =  fnLinks.filesMd(routesArr)
		if(routesMd.lenght !== 0){
			const linksRoute = await fnLinks.getLinksMd(routesMd)
			if (options.validate) {
				return validateLinks(linksRoute)
			} else {
				return linksRoute
			}
		}		
	}
	catch (err) {
		return err
	}
}
module.exports = mdLinks

/* mdLinks('E:/LABORATORIA/LIM009-fe-md-links/src', { validate: true})
	.then(res => console.log(res))
	.catch(err => console.log(err)) 
*/