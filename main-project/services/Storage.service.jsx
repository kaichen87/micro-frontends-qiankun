
export class StorageService {
    static setItem(key, value) {
        localStorage.setItem(key, value);
    }

    static getItem(key) {
        return localStorage.getItem(key);
    }

    static removeItem(key) {
        localStorage.removeItem(key);
    }

    static setToken(token) {
        this.setItem('AccessToken', token);
    }

    static  getToken() {
        return this.getItem('AccessToken')
    }

    // setUserStorage(value: ILoginParam): void {
    //     if (!!value) {
    //         localStorage.setItem('user', JSON.stringify(value));
    //     }
    // }

    // getUserStorage(): ILoginParam | undefined {
    //     const userStr: string | null = localStorage.getItem('user');
    //     return !!userStr ? JSON.parse(userStr) : undefined;
    // }
}