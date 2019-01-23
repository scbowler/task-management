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
    },
    sumEach: async function(field, identifier, options = {}){
        try {
            if (!field || typeof field !== 'string') throw new Error('Invalid field value given');
            if (!identifier || typeof identifier !== 'string') throw new Error('Invalid identifier value given');

            const results = await this.findAll({
                ...options,
                attributes: [field, identifier]
            });

            const output = {};

            results.map(item => {
                const id = item[identifier];
                if(output[id]){
                    return output[id] += item[field];
                }

                return output[id] = item[field];
            });

            return output;
        } catch(err){
            return false;
        }
    }
}
