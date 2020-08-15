// import Qs from 'qs';
// import axios from 'axios';

// axios.defaults.timeout = 30000;
// axios.defaults.baseURL = 'http://localhost:3000';

// //http request 拦截器
// axios.interceptors.request.use(
// 	config => {
// 		config.data._client_ = 'web';
// 		config.data._version_ = '1.0.0';
// 		// 更多参数~

// 		config.data = Qs.stringify(config.data);

// 		config.headers = {
// 			'Content-Type': 'application/x-www-form-urlencoded'
// 		}

// 		return config;
// 	},
// 	error => {
// 		return Promise.reject(err);
// 	}
// );

// //http response 拦截器
// axios.interceptors.response.use(
// 	response => {
// 		// 业务逻辑处理
// 		if (response.status == 200) {
// 			return response;
// 		}

// 		return response;
// 	},
// 	error => {
// 		return Promise.reject(error)
// 	}
// )

// export default {
// 	post (url, data = {}, callback, errCallback) {
// 		return new Promise((resolve, reject) => {
// 			axios.post(url, data).then(response => {
// 				resolve(response);
// 			}, err => {
// 				reject(err)
// 			});
// 		}).then(response => {
// 			typeof (callback) == "function" && callback(response);
// 		}).catch(err => {
// 			typeof (errCallback) == "function" && errCallback(err);
// 		});
// 	},

// 	get (url, data = {}, callback, errCallback) {
// 		return new Promise((resolve, reject) => {
// 			axios.post(url, data).then(response => {
// 				resolve(response);
// 			}, err => {
// 				reject(err)
// 			});
// 		}).then(response => {
// 			typeof (callback) == "function" && callback(response);
// 		}).catch(err => {
// 			typeof (errCallback) == "function" && errCallback(err);
// 		});
// 	}
// }