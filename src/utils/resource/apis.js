
import { host } from "./system";
const Apis = {
    login: `${host.api_user}/ps_user/login`,
    register: `${host.api_user}/ps_user/register`,
    getNewsType: is_type => `${host.api_user}/news/list_type?is_type=${is_type}`,
    getNewsDetail: id => `${host.api_user}/news/detail/${id}`,
}

export{Apis}