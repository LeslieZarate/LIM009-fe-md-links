const mdLinks = require('./index');
const fnStatsLinks = require('./controller/stats');

const optionsCli = (arrOptions) => {
  const options = {};
  arrOptions.forEach(opts => {
    if (opts === '--validate' || opts === '-v') {
      options.validate = true;
    } else if (opts === '--stats' || opts === '-s') {
      options.stats = true;
    } else if ((opts === '--validate' || opts === '-v') && (opts = '--stats' || opts === '-s')) {
      options.validate = true;
      options.stats = true;
    } else {
      console.log(`La opción "${opts}" no existe`);
    }
  });
  return options;
};

const mdLinksCli = async(path, options) => {
  try {
    let resultMdlinks = '';
    if (options.stats) {
      const result = await mdLinks(path, options);
      const stats = fnStatsLinks(result);
      options.validate
        ? resultMdlinks += `Total: ${stats.total}\nUnique: ${stats.unique}\nBroken: ${stats.broken}`
        : resultMdlinks += `Total: ${stats.total}\nUnique: ${stats.unique}`;
    } else {
      const result = await mdLinks(path, options);
      result.forEach(elemet => {
        !options.validate
          ? resultMdlinks += `${elemet.file} ${elemet.href} ${elemet.text.substring(0, 50)}\n`
          : resultMdlinks += `${elemet.file} ${elemet.href} ${elemet.text.substring(0, 50)} ${elemet.status} ${elemet.statusText}\n`;
      });
    }
    return resultMdlinks;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  mdLinksCli,
  optionsCli
};