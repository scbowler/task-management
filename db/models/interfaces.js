const { Op } = require('sequelize');

module.exports = {
    findByMid: function (mid, options = {}) {
        return this.findOne({
            ...options,
            where: { mid }
        });
    },
    findByPid: function(pid, options = {}){
        return this.findOne({
            ...options,
            where: { pid }
        });
    },
    getIdsByMids: async function(){
        if(!arguments.length){
            return null
        }
        try{
            const mids = Object.keys(arguments).map(k => ({ mid: arguments[k] }));

            const results = await this.findAll({
                attributes: ['id', 'mid'],
                where: {
                    [Op.or]: mids
                }
            });

            const output = {};

            results.map(result => {
                output[result.mid] = result.id
            });

            return output;
        } catch(err){ return false }
    }
}
