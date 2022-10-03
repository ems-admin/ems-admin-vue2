import request from "../../utils/request";

/**
 * 获取角色列表
 * @param params
 * @returns {AxiosPromise}
 */
export function getRoleList(params){
    return request({
        url: '/sys/role/table',
        method: 'get',
        params
    })
}