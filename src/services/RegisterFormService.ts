import axios from 'axios';
import {IRegisterForm} from '../models/IRegisterForm';
import log from '../utils/log'; //'@utils/log';
import {API} from '../config/index';

/**
 * @name ICreateUserResponse
 * @description Create user response 
 */
export interface ICreateUserResponse{
    isValid: boolean;
    isSuccess: boolean;
    err?: any|null;
    data?: IRegisterForm|null;
}

/**
 * @name IUserModel
 * @description User Model
 * @todo this should be the same as IRegisterForm 
 */
export interface IUserModel{
    firstName?:string;
    lastName?:string;
    email?:string;
    mobilePhone?:string;
}

/**
 * @class RegisterFormService
 * @description API wrapper to the BFF 
 * @requires Axios 
 * @returns {Promise<ICreateUserResponse>} Create User Response 
 */
class RegisterFormService{

    /**
     * @name post
     * @description Create user via API 
     *
     * @static
     * @param {IRegisterForm} register
     * @returns {Promise<ICreateUserResponse>}
     * @memberof RegisterFormService
     */
    static async post(register:IRegisterForm):Promise<ICreateUserResponse>{

        let resp;
        try{
            resp = await axios.post<IUserModel>(`${API}/user`, {
                firstName: register.firstname,
                lastName: register.lastname,
                email: register.email,
                mobilePhone: register.phone
            });
            

            const data:IUserModel = resp.data['data'];
            log.info('server.endpoint.post.users');
            log.log(data);
            console.log('resp--->', resp);
            console.log('data--->', data);

            return <ICreateUserResponse>{
                isValid: true,
                isSuccess: true,
                err: null,
                data: {
                    firstname: data.firstName,
                    lastname: data.lastName,
                    email: data.email,
                    phone: data.mobilePhone,
                }
            }
            
        }
        catch(err){

            /** 
             * @todo - handle validation and server errors
             *  switch on validation, integration, server, auth errors
            */
            log.error('💀'+err.message);

            return <ICreateUserResponse>{
                isValid: false,
                isSuccess: false,
                err: err,
                data: null
            }

        }

    }

}
export default RegisterFormService;