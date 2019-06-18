const fnRoutes = require('./controller/paths');
const fnLinks = require('./controller/links');
const validateLinks = require('./controller/validate');

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
		//err = `ENOENT: no such file or directory,${route}`;
		return err
	}
}

/*
mdLinks('E:/LABORATORIA/LIM009-fe-md-links/prueba', { validate: true})
	.then(res => console.log(res))
	.catch(err => console.log(err))*/

module.exports = mdLinks

