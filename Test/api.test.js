const request = require('supertest')
const app = require('../app')

describe('Teste rota Usuario GET', () => {
    test('Testando status 200', () => {
        return request(app).get('/produtos')
            .then((response) => {
                expect(response.status).toBe(200)
            })

    })
})
describe('Teste rota Usuario POST', () => {
    test('Testando status 201', () => {
        return request(app).post('/produtos')
            .then((response) => {
                expect(response.status).toBe(201)
            })

    })
})
