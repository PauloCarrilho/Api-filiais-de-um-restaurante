const dbFilial = require('../database/sqlite')
class Filial {
    constructor(nmFilial, nmEnd, nmCidade, sgEstado, nrTel, nrCep, hrFunc) {
        this.nmFilial = nmFilial,
            this.nmEnd = nmEnd,
            this.nmCidade = nmCidade,
            this.sgEstado = sgEstado,
            this.nrTel = nrTel,
            this.nrCep = nrCep,
            this.hrFunc = hrFunc
    }
}
module.exports = Filial