import axios from 'axios'

let host = '/api'

function ajax(url, params, type = "GET", timeout = 1000) {
    return new Promise((resolve, reject) => {
        let data = {
            method: type,
            url: url,
            timeout: timeout
        };
        switch (type) {
            case "GET":
                data.params = params;
                break;
            case "POST":
                data.data = params
                break;
        }
        axios(data).then((resp)=>{
            resolve(resp.data);
        }).catch((err) => {
            reject(err);
            console.log(err)
        })
    })
}

export const AllReport = (params) => ajax(host + "/report/find", params, "GET");
export const addAlarm = (params) => ajax(host + "/alarm/add", params, "POST");
export const searchRoom = (params) => ajax(host + "/search/find", params, "GET");
export const getFactoryBySid = (params) => ajax(host + "/limit/findBySid", params, "GET");
export const postFactory = (params) => ajax(host + "/limit/postFactory", params, "POST");
