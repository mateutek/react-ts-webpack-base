import trim = require('lodash/trim');

const prefixPath =  (path, prefix) => {
    return `/${prefix}/${trim(path, '/')}`;
};

export default prefixPath;
