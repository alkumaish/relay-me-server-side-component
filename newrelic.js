/**
 * New Relic agent configuration.
 * 
 * See lib/config.defaults.js in the agent distribution for a more complete description of configuration variables and
 * their potential values.
 */
exports.config = {
    /**
     * Array of application names.
     */
    app_name : [ 'Relay ME, Server Side' ],
    /**
     * Your New Relic license key.
     */
    license_key : '496ec1d97d467fe21856bbdab5fc5aa3461f5256',
    logging : {
        /**
         * Level at which to log. 'trace' is most useful to New Relic when diagnosing issues with the agent, 'info' and
         * higher will impose the least overhead on production applications.
         */
        level : 'error'
    }
};
