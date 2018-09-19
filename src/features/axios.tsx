import axios from 'axios';

interface IThenFunction {
    (res: any): void;
}

interface IThenSpreadFunction {
    (...res: any[]): void;
}


interface IErrorFunction {
    (error: any, next: any): void;
}

interface IRequestParams {
    [name: string]: string | number | null | undefined;
}

class AxiosHelper {
    private static error: any;
    private static endpoint: string;

    constructor() {
        AxiosHelper.endpoint = 'https://a076597c-3b68-4bdb-a19e-81abdb64831f.mock.pstmn.io';
        axios.defaults.headers.common['x-api-key'] = 'be647e62513d4168aa786b26b054e785';
        axios.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            if (401 === error.response.status) {
                this.genericCatch(error);
            }
            return Promise.reject(error);
        });
    }

    public get(url: string, cb: IThenFunction, er?: IErrorFunction): void {
        axios.get(AxiosHelper.endpoint + url).then(res => cb(res)).catch(error => this.generalCatch(error, er));
    }

    public post<T = any>(url: string, data: T, cb: IThenFunction, er?: IErrorFunction): void {
        axios.post(AxiosHelper.endpoint + url, data).then(res => cb(res)).catch(error => this.generalCatch(error, er));
    }

    public put<T = any>(url: string, data: T, cb: IThenFunction, er?: IErrorFunction): void {
        axios.put(AxiosHelper.endpoint + url, data).then(res => cb(res)).catch(error => this.generalCatch(error, er));
    }

    public all<T>(fn: (T | Promise<T>)[], cb: IThenSpreadFunction, er?: IErrorFunction): Promise<any> {
        return axios.all(fn).then(axios.spread((...res) => cb(...res))).catch(error => this.generalCatch(error, er));
    }

    public catch(error: any) {
        this.catchFn(error);
    }

    public paramBuilder(params: IRequestParams) {
        return Object.keys(params).reduce((paramString, param) => {
            return params[param] !== undefined ? paramString + `${param}=${params[param]}&` : paramString;
        }, '?').slice(0, -1);
    }

    private generalCatch(error: any, er?: IErrorFunction) {
        AxiosHelper.error = error;
        return er ? er(error, this.next) : this.genericCatch(error);
    }

    private next(error: any = AxiosHelper.error) {
        this.genericCatch(error);
    }

    private genericCatch(error: any) {
        console.warn('Generic Catch' , { ...error });
        this.catchFn(error);
    }

    private catchFn (error: any) {
        console.log(error);
        if (error.response.status === 401) {
            window.location.replace(`/`);
        } else {
            window.location.replace(`/error/${error.response.status}`);
        }
    }
}

const NAxios: AxiosHelper = new AxiosHelper();

export default NAxios;
