const expect = require('chai').expect
const request = require('siwi-request')
describe('services.js', () => {
    it('test.test', async() => {
        const data = {
            method: 'test.test'
        }
        try {
            const res= await request.post('http://localhost:3000/services/gateway', data)
            console.log(res)    
        } catch (error) {
            console.log(error)
        }
    });
});