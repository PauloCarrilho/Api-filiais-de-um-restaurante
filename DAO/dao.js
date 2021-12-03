class dao {
    constructor(dbFilial) {
        this.dbFilial = dbFilial
    }

    retornaFilial() {
        return new Promise((resolve, reject) => {
            this.dbFilial.all('SELECT * FROM Filial', (error, tabela) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "error": true
                    })
                }
                else {
                    resolve({
                        "loja": tabela,
                        "count": tabela.length,
                        "error": false
                    })
                }
            })
        })
    }
    retornaFilialId(id) {
        return new Promise((resolve, reject) => {
            this.dbFilial.all('SELECT * FROM Filial WHERE id =?', id, (error, tabela) => {

                if (error) {
                    reject({
                        "mensagem": error.message,
                        "error": true
                    })
                }
                else {
                    resolve({
                        "loja": tabela,
                        "count": tabela.length,
                        "error": false
                    })
                }
            })
        })
    }
    incluiFilial(body) {
        return new Promise((resolve, reject) => {
            this.dbFilial.run(`INSERT INTO Filial(nmFilial, nmEnd, nmCidade, sgEstado, nrTel, nrCep, hrFunc)VALUES (?,?,?,?,?,?,?)`,
                [body.nmFilial, body.nmEnd, body.nmCidade, body.sgEstado, body.nrTel, body.nrCep, body.hrFunc],
                (error) => {
                    if (error) {
                        reject({
                            "loja": error.message,
                            "erro": true
                        })
                    } else {
                        resolve({
                            "loja": body,
                            "erro": false
                        })
                    }
                })
        })
    }
    removeFilial(id) {
        return new Promise((resolve, reject) => {
            this.dbFilial.all('DELETE FROM Filial WHERE id =?', id, (error) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "error": true
                    })
                }
                else {
                    resolve({
                        "loja": id,
                        "count": id.length,
                        "error": false
                    })
                }
            })
        })
    }
    updateFilial(id, body) {
        return new Promise((resolve, reject) => {
            this.dbFilial.run('UPDATE Filial SET (nmFilial, nmEnd, nmCidade, sgEstado, nrTel, nrCep, hrFunc)VALUES (?,?,?,?,?,?,?)=(?,?,?,?,?,?,?) WHERE id =?',
                [body.nmFilial, body.nmEnd, body.nmCidade, body.sgEstado, body.nrTel, body.nrCep, body.hrFunc],
                (error) => {
                    if (error) {
                        reject({
                            "loja": error.message,
                            "erro": true
                        })
                    } else {
                        resolve({
                            "loja": body,
                            "erro": false
                        })
                    }
                })
        })
    }
}
module.exports = dao