import UserStore from './userstore'
export default interface UserResponse {
    data: UserStore[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}
