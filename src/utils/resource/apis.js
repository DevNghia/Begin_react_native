import {host} from './system';
const Apis = {
  login: `${host.api_mamnon}/ps_user/login`,
  logout: `${host.api_mamnon}/ps_user/logout`,
  register: `${host.api_user}/ps_user/register`,
  profile: `${host.api_mamnon}/ps_user/profile`,
  home_relative: `${host.api_mamnon}/ps_user/home_relative`,
  home: `${host.api_mamnon}/ps_user/home`,
  registerDeviceid: `${host.api_mamnon}/ps_user/active`,
  getNews: student_id =>
    `${host.api_mamnon}/ps_articles/list/global/1?student_id=${student_id}`,
  getNewsDetail: ({id, student_id}) =>
    `${host.api_mamnon}/ps_articles/${id}?student_id=${student_id}`,
  getTableHeight: student_id =>
    `${host.api_mamnon}/ps_student/${student_id}/growth_height`,
  getTableWeight: student_id =>
    `${host.api_mamnon}/ps_student/${student_id}/growth_weight`,
  getCharHeight: student_id =>
    `${host.api_mamnon}/ps_student/${student_id}/growth_chart/height`,
  getCharWeight: student_id =>
    `${host.api_mamnon}/ps_student/${student_id}/growth_chart/weight`,
};

export {Apis};
