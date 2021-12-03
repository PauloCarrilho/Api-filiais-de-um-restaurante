const rotas = (app) => {

    app.get('/', (req, res) => {
        res.send(`
        <input type="text style="color:green" placeholder="Bomdia" label="Oi"></input>
        <h1>Hello Word</h1>`)
    })
}

module.exports = rotas