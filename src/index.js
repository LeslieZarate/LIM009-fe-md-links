const pathAboslute = require('./controller/path')
const fnLink = require('./controller/links')
const fnRead = require('./controller/readLinks')
const validateLinks = require('./controller/validate')


const mdLinks = async (route, options) => {
	try {
		const routeValidate = pathAboslute(route)
		const routeArr = await fnLink.getPathsOfRoute(routeValidate)
		const linksRoute = await fnRead.getLinksMd(routeArr)
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
/*
mdLinks('E:/LABORATORIA/LIM009-fe-md-links/README.md', { validate: true })
	.then(res => console.log(res))
	.catch(err => console.log(err))*/

module.exports = mdLinks

