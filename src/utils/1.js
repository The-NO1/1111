export default class Http {

    static async request (method, url, data) {
        // 发送请求
        const response = await axios.request({
            method,
            url,
            // baseURL: HOST,
            params: method === 'GET' ? data : null,
            data: method === 'POST' ? data : null
        });
        // 判断是否成功
        return this.isSuccess(response);
    };

    // 判断响应结果是否成功
    static isSuccess (res) {
        if (res.status >= 200 && res.status < 300) {
            return res;
        } else {
            this.requestExpection(res);
        }
    };

    // 构建失败对象
    static requestExpection (res) {
        throw new Error(res);
    };

    // get便捷方法
    static get (url, data) {
        return this.request('GET', url, data);
    };

    // post便捷方法
    static post (url, data) {
        return this.request('POST', url, data);
    }
}