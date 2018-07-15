class Services {
    constructor() {

    }

    async distrubute(data) {
        const method = data['method']

        switch (method) {
            case 'test.test':
                return await this.test(data)
                break;
        
            default:
                break;
        }
    }

    async test(data) {
        return data
    }
}
module.exports = new Services()