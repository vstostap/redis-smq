'use strict';

const redis = require('redis');

const clients = [];

module.exports = {
    /**
     *
     * @param {object} config
     * @return {object}
     */
    getNewInstance(config = {}) {
        const { redis: options = {} } = config;
        const c = redis.createClient(options);
        const pass = options.password;
        pass && c.auth(pass);
        clients.push(c);
        return c;
    },

    getAllClients() {
        return clients;
    },
};
