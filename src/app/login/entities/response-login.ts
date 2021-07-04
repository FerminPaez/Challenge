export interface ResponseLogin {


        user: {
            status: string,
            name: string,
            email: string,
            role: string,
            uid: string
        };
        token: string;

}
