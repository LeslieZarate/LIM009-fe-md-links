const statsLinks = (arraysLinks) => {
  const stats = new Object;
  stats.total = arraysLinks.length;    // Total de Links 
  // links Unicos 
  const arrayHref = arraysLinks.map(link => link.href);
  //const uniqueHref =(new Set(arrayHref)).size
  const uniqueHref = [...new Set(arrayHref)].length;    
  stats.unique = uniqueHref
  // Links Rotos  solo en caso de que el array se haya validado
  if (arraysLinks.length !== 0 && arraysLinks[0].hasOwnProperty('statusText')) {
    const brokenlinks = arraysLinks.filter(link => link.statusText === 'FAIL');
    stats.broken = brokenlinks.length;
  }
  return stats
}
module.exports = statsLinks