// commit API
import extendsApi from 'services/extendsApi'

class SongServiceApi extends extendsApi {
    constructor() {
        super()
        this.demoUrl = ''
    }
    demoGet (params) {
        return this.sendGet(this.demoUrl, params).then(res => {
            return res.data
        })
    }
}

export default new SongServiceApi()