export default interface User {
    email: string;
    id: string;
    name: string;
    userName: string;
    token: string | null; 
    logged: boolean
}