const {fs} = require('aql-utils');

(async () => {
    try {
        console.log('Tests setup script launched');

        const dotEnvContent = 'NODE_ENV=test\nAQUILA_ENV=test\nPORT=3050';
        await fs.writeFile('.env', dotEnvContent);

        const envJsonContent = {
            test : {
                db      : 'mongodb://10.10.4.67:27017/test',
                devMode : {
                    mailTo  : 'testaquila@yopmail.com',
                    compile : false,
                    active  : true
                }
            }
        };
        await fs.writeFile('./config/env.json', JSON.stringify(envJsonContent));

        console.log('Tests setup script ended');
    } catch (err) {
        console.error(err);
    }
})();