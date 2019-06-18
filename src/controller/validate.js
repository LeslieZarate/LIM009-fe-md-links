const fetch = require("node-fetch");
const validateLinks = (arraylinks) => {
	const arrValidate = arraylinks.map(async link => {
		try {
			const response = await fetch(link)
			link.status = response.status                           // estado de respuesta http(n°)
				if (link.status >= 200 && link.status < 400) {
			  link.statusText = response.statusText;			 	       // ok /fail
			} else {
			  link.statusText = 'FAIL';
			}
			return link
		}
		catch (error) {
			link.status = error.code
			link.statusText = 'FAIL'
			return link
		}
	});

	const result = Promise.all(arrValidate)
	return result
}

module.exports = validateLinks