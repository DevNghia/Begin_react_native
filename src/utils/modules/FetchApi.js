import {getUniqueId} from 'react-native-device-info';
import { Apis } from '../resource';
import { AccountService } from '../Account';
import { ResetFunction } from './ResetFunction';

const CommonCall = async (api, header) => {
    console.log('api', api);
    // const Strings = LanguageService.get();
    // const networkState = await NetInfo.fetch();
    // if (!networkState.isConnected) {
    //   throw new Error(CheckLogic.No_internet);
    // }
    const account = AccountService.get();
    console.log('account', account);
    try {
      let headers = {
        'Content-Type': 'application/json',
        deviceid: getUniqueId(),
       
      };
      if (header) {
        //overide Content-type
        headers = {
          ...headers,
          ...header.headers,
        };
      }
      if (account && account.api_token && !api.includes(Apis.login)) {
        headers = {
          ...headers,
          Authorization: 'Bearer ' + account.api_token,
        };
      }
      let head = {...header, headers};
      console.log('head', head);
      let response = await fetch(api, head);
  
      console.log('response', response);
  
      if (
        response.status === 500 ||
        response.status === 502 ||
        response.status === 404 ||
        response.status === 504
      ) {
        throw new Error("ERROR SERVER")
      }
  
      // if (response.status !== 200) {
      //   throw new Error(result.message);
      // }
      const result = await response.json();
      // console.log('result', result);
      if (result.message === 'Phiên làm việc đã hết. Bạn cần đăng nhập lại.') {
        ResetFunction.resetToLogin();
        console.log('Phiên làm việc đã hết hạn');
      }
  
      return result;
    } catch (error) {
      console.log('errorFetch', error);
      if (error.message === "No Internet") {
        throw new Error(Strings.Network_request_fail);
      }
      if (error.message === "JSON Parse error: Unrecognized token '<'") {
        throw new Error("Data_is_not_correct");
      }
      if (error.message === "Strings.Account_deactive") {
        throw new Error("Strings.Account_deactive");
      }
      throw new Error(error.message);
    }
  };
const CommonCallWithoutUseQuery = async (api, header) => {
    console.log('api', api);
    // const Strings = LanguageService.get();
    // const networkState = await NetInfo.fetch();
    // if (!networkState.isConnected) {
    //   throw new Error(CheckLogic.No_internet);
    // }
    const account = AccountService.get();
    console.log('account', account);
    try {
      let headers = {
        'Content-Type': 'application/json',
        deviceid: getUniqueId(),
      };
      if (header) {
        //overide Content-type
        headers = {
          ...headers,
          ...header.headers,
        };
      }
      if (account && account.api_token && !api.includes(Apis.login)) {
        headers = {
          ...headers,
          Authorization: 'Bearer ' + account.api_token,
        };
      }
      let head = {...header, headers};
      let response = await fetch(api, head);
  
      console.log('response', response);
  
      if (
        response.status === 500 ||
        response.status === 502 ||
        response.status === 404 ||
        response.status === 504
      ) {
        return {
          code: response.status,
          message: 'Lỗi kết nối đến server',
        };
      }
  
      const result = await response.json();
      console.log('result', result);
  
      if (result.message === 'Phiên làm việc đã hết. Bạn cần đăng nhập lại.') {
        ModalBase.error({
          message: 'Phiên làm việc đã hết. Bạn cần đăng nhập lại.',
        });
        // ResetFunction.resetToLogin();
      }
  
      return result;
    } catch (error) {
      console.log('errorFetch', error);    
      return {message: error.message};
      // if (error.message === CheckLogic.No_internet) {
      //   return {code: 500, message: Strings.Network_request_fail};
      // }
      // if (error.message === "JSON Parse error: Unrecognized token '<'") {
      //   return {code: 11, message: Strings.Data_is_not_correct};
      // }
      // if (error.message === Strings.Account_deactive) {
      // }
      // return {code: 12, message: Strings.something_wrong};
    }
  };
  const FetchApi = {
    login: async ({username, password, appcode}) => {
      try {
        const info = {
          password,
          username,
          appcode
        };
        const request = JSON.stringify(info);
        const header = {
          method: 'POST',
          body: request,
        };
        const api = Apis.login;
        const result = await CommonCallWithoutUseQuery(api, header);
        return result;
      } catch (error) {
        return {message: error.message};
      }
    },
    register: async obj => {
        try {
          const header = {
            method: 'POST',
            body: JSON.stringify(obj), //phone
          };
          const api = Apis.register;
          const result = await CommonCall(api, header);
          return result;
        } catch (error) {
          return {message: error.message};
        }
      },
      getNewsType: async is_type => {
        try {
          const header = {
            method: 'GET',
          };
          const api = Apis.getNewsType(is_type);
          const result = await CommonCall(api, header);
          if (result._msg_code === 1) {
            return result._data?.dsTin || [];
          }
          return result;
        } catch (error) {
          return {message: error.message};
        }
      },
      getNewsDetail: async id => {
        try {
          const header = {
            method: 'GET',
          };
          const api = Apis.getNewsDetail(id);
          const result = await CommonCall(api, header);
          return result;
        } catch (error) {
          return {message: error.message};
        }
      },
  };

  export {FetchApi}