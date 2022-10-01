import request from "../../utils/request";

/**
 * 拉取当前用户的所有菜单
 * @returns {AxiosPromise}
 */
export function queryAllMenu(){
    return request({
        url: '/sys/menu/all',
        method: 'get'
    })
}
