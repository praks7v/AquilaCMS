const {fs} = require('aql-utils');

(async () => {
    try {
        console.log('Tests setup script launched');

        const dotEnvContent = 'NODE_ENV=test\nAQUILA_ENV=test\nPORT=3050';
        await fs.writeFile('.env', dotEnvContent);

        const envJsonContent = {
            test : {
                db      : 'mongodb://aquila-db-service:27017/test',
                devMode : {
                    mailTo  : 'testenv0@gmail.com',
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