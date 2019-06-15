const statsLinks = require('../src/controller/stats');

const arrObj3 = [
	{
		href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
		text: 'Node.js y npm',
		file: "E:/LABORATORIA/LIM009-fe-md-links/README.md"
	},
	{
		href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
		text: 'Node.js y npm',
		file: "E:/LABORATORIA/LIM009-fe-md-links/README.md"
	},
	{
		href: 'https://github.com/Laboratoria/LIM009-data-lovers/blob/master/pokemongolive.com',
		text: 'Node.js y npm',
		file: "E:/LABORATORIA/LIM009-fe-md-links/README.md",

	}];
const arrObj5 = [{
	href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
	text: 'Node.js y npm',
	file: "E:/LABORATORIA/LIM009-fe-md-links/README.md",
	status: 200,
	statusText: 'OK'
},
{
	href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
	text: 'Node.js y npm',
	file: "E:/LABORATORIA/LIM009-fe-md-links/README.md",
	status: 200,
	statusText: 'OK'
},
{
	href: 'https://github.com/Laboratoria/LIM009-data-lovers/blob/master/pokemongolive.com',
	text: 'Node.js y npm',
	file: "E:/LABORATORIA/LIM009-fe-md-links/README.md",
	status: 404,
	statusText: 'FAIL'
}
];

describe('statsLinks', () => {
	it('Deberia ser una funcion', () => {
		expect(typeof statsLinks).toBe('function')
	});

	it('Deberia ser una funcion', () => {
		expect(statsLinks(arrObj3)).toEqual({ total: 3, unique: 2 })
	});

	it('Deberia ser una funcion', () => {
		expect(statsLinks(arrObj5)).toEqual({ total: 3, unique: 2, broken: 1 })
	});
})