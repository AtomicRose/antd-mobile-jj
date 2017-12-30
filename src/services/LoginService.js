import HttpRequest from 'REQUEST';
import env from 'CONFIG/envs';

const API_URL = env.api_url;
let baseToDo = {
    successDo: (res) => {
        return res;
    },
    errorDo: (res) => {
        // maybe you could dialog the res.message
        return res;
    }
};
let LoginService = {
    getPhoneAndVerifyCode: (params) => {
        return HttpRequest.post({
            url: API_URL + '/CM_WorkbenchLogin/WD_COMM_AskVCode',
            params: params
        }, baseToDo);
    },
    doLogin: (params) => {
        return HttpRequest.post({
            url: API_URL + '/CM_WorkbenchLogin/WD_COMM_WorkbenchLogin',
            params: params
        }, baseToDo);
    },
    getSystemAccountListByEmpId: (roleApiPath, params) => {
        return HttpRequest.post({
            url: API_URL + roleApiPath,
            params: params
        }, baseToDo);
    }
};
export default LoginService;