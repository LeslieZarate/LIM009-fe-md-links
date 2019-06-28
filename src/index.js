const fnRoutes = require('./controller/paths');
const fnLinks = require('./controller/links');
const validateLinks = require('./controller/validate');

const mdLinks = async(route, options) => {
  const routeValidate = fnRoutes.validatePathAbsolute(route); // convertir a abosulta la ruta
  const routesArr = await fnRoutes.getPathsOfRoute(routeValidate); // un array archivos 
  const routesMd = fnLinks.filesMd(routesArr);
  const linksRoute = await fnLinks.getLinksMd(routesMd); // extraendo links [{},..,{}]]
  if (options.validate) {
    return validateLinks(linksRoute);
  } else {
    return linksRoute;
  }
};

module.exports = mdLinks;
