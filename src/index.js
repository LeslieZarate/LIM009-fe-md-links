const pathAboslute = require('./controller/path')
const fnLink = require('./controller/links')
const fnRead = require('./controller/readLinks')

const mdlinks = async(route)=>{
    try{
    const routeValidate = pathAboslute(route)
    const routeArr =  await fnLink.getPathsOfRoute(routeValidate)
    const linksRoute = await fnRead.getLinksMd(routeArr)
    return linksRoute
    }
    catch(err){
        console.log(err)
    }
    
}
mdlinks('E:/LABORATORIA/LIM009-fe-md-links/README.md').then(res=>console.log(res))
