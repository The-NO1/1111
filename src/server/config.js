// config.js

let env = ''
if ((/env=online/.test(window.location.href))) {
    env = 'online'
} else if ((/env=dev/.test(window.location.href))) {
    env = 'dev'
} else {
    env = 'dev' // 默认环境
}
const SERVER_URL = {
    online: { // 正式环境
        SERVER_URL1: '',
        SERVER_URL2: '',
        SERVER_URL3: ''
    },
    dev: { // 测试环境
        SERVER_URL1: '',
        SERVER_URL2: '',
        SERVER_URL3: ''
    }
}

//env为测试接口测试环境：http://127.0.0.1:8082/#/entry/entryIndex
//切换到
//正式环境：http://127.0.0.1:8082/?env=online/#/entry/entryIndex
export default SERVER_URL[env]