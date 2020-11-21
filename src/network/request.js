import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:8000',
        timeout: 5000//毫秒，超过时间没有获取到就报错
    })

    //某些服务器获取到的数据不符合我们的需求，可以在这里进行一些更改
    //比如发送网络请求时，会出现等待的图片显示
    //某些网络请求必须携带一些特殊的数据

    //请求拦截
    instance.interceptors.request.use(config => {
            // console.log(config)
            return config
        },
        error => {
            console.log(error)
        })

    //响应拦截
    instance.interceptors.response.use(res => {
            // console.log(config)
            return res.data
        },
        error => {
            console.log(error)
        })

    //发送真正的网络请求
    return instance(config)
}
