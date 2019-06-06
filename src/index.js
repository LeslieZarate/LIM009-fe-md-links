import {validatePathAbsolute} from "./controller/path.js"
import {} from "./controller/links.js"

const mdlinks = (route)=>{
    const routeValidate = validatePathAbsolute(route)
   // const routeArr =  getPathsOfRoute(routeValidate)
    return routeValidate
}
console.log(mdlinks('E:/LABORATORIA/LIM009-fe-md-links/prueba'))
