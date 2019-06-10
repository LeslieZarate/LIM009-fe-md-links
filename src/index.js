const pathAboslute = require('./controller/path')
const fnLink = require('./controller/links')
const fnRead = require('./controller/readLinks')
//const validateLinks = require('./controller/validate')


const mdlinks = async(route,options)=>{
    try{
    const routeValidate = pathAboslute(route)
    const routeArr =  await fnLink.getPathsOfRoute(routeValidate)
    const linksRoute = await fnRead.getLinksMd(routeArr)
    if(options.validate){
       //return  validateLinks(linksRoute)
    }else{
        return linksRoute
    }
    
    }
    catch(err){
        console.log(err)
    }
    
}





mdlinks('E:/LABORATORIA/LIM009-fe-md-links/README.md',{validate:false})
.then(res=>{
    console.log(res)
})
