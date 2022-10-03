import request from "../../utils/request";

/**
 * 获取用户列表
 * @param params
 * @returns {AxiosPromise}
 */
export function getUserList(params){
    return request({
        url: '/sys/user/table',
        method: 'get',
        params
    })
}

/**
 * 编辑用户
 * @param data
 * @returns {AxiosPromise}
 */
export function editUser(data){
    return request({
        url: '/sys/user/edit',
        method: 'post',
        data
    })
}

/**
 * 删除用户
 * @param params
 * @returns {AxiosPromise}
 */
export function delUser(params){
    return request({
        url: '/sys/user/del',
        method: 'delete',
        params
    })
}