// This file was autogenerated by nSwagger 0.0.1 - changes made to it maybe lost if nSwagger is run again
namespace nSwagger {
    export module API {
        export class SignupRequest {
            Email: string;
            Password: string;
        }

        export class AdminResponse {
            Email: string;
            Id: string;
            Role: string;
            State: string;
        }

        export enum AdminResponseRole {
            User,
            Admin,
            Kitchen,
            Service
        }

        export enum AdminResponseState {
            Active,
            Disabled,
            WaitingForPinConfirmation
        }

        export class UpdateCartItemsRequest {
            CartItems: AddCartItemRequest[];
        }

        export class AddCartItemRequest {
            CartItem: number;
            Item: number;
            Quantity: number;
        }

        export class CartResponse {
            CartItems: CartItemResponse[];
            Id: number;
            OrderNumber: string;
        }

        export class CartItemResponse {
            Id: number;
            Item: ItemResponse;
            Price: number;
            Quantity: number;
        }

        export class ItemResponse {
            Description: string;
            Id: number;
            Image: string;
            Price: number;
            Title: string;
        }

        export class MenuCategoryRequest {
            ImageId: string;
            Title: string;
        }

        export class CategoryResponse {
            Id: number;
            ImageId: string;
            State: string;
            Title: string;
        }

        export enum CategoryResponseState {
            Active,
            Disabled
        }

        export class VerifyUserRequest {
            Email: string;
            Pin: string;
        }

        export class ItemRequest {
            Description: string;
            ImageId: string;
            Price: number;
            Title: string;
        }

        export class ResetPasswordRequest {
            Password: string;
            Pin: string;
        }

        export class LoginRequest {
            Email: string;
            Password: string;
        }

        export class LoginResponse {
            Role: string;
            Token: string;
        }

        export enum LoginResponseRole {
            User,
            Admin,
            Kitchen,
            Service
        }

        export class OrderResponse {
            Date: string;
            Id: number;
            Items: OrderItemResponse[];
            OrderId: string;
            State: string;
            TotalPrice: number;
        }

        export enum OrderResponseState {
            NotSubmitted,
            Pending,
            Cancelled,
            Ready,
            Collected,
            Abandoned
        }

        export class OrderItemResponse {
            Id: number;
            item: ItemResponse;
            OrderId: number;
            Price: number;
            Quantity: number;
        }

        export class ReportingRequest {
            EndDate: string;
            OrderStates: string;
            StartDate: string;
        }

        export enum ReportingRequestOrderStates {
            NotSubmitted,
            Pending,
            Cancelled,
            Ready,
            Collected,
            Abandoned
        }

        export class TradingHourResponse {
            Closing: string;
            Date: string;
            Id: number;
            Openning: string;
        }

        export class TradingHoursRequest {
            Closing: string;
            Date: string;
            Openning: string;
        }

        export class UpdateUserRequest {
            Password: string;
        }

        export interface Admin_PostNewAdminRequest {
            request: SignupRequest;
        }

        export interface Admin_PostNewKitchenRequest {
            request: SignupRequest;
        }

        export interface Admin_DeleteAdminRequest {
            id: string;
        }

        export interface Cart_DeleteRequest {
            itemId: number;
        }

        export interface Cart_PostChangeOrderStateRequest {
            orderId: number;
            state: string;
        }

        export interface Cart_PutCartItemsRequest {
            id: number;
            request: UpdateCartItemsRequest;
        }

        export interface Cart_PostCartItemsRequest {
            request: AddCartItemRequest;
        }

        export interface Category_DeleteMenuCategoryRequest {
            id: number;
        }

        export interface Category_EnableMenuCategoryRequest {
            id: number;
        }

        export interface Category_PutAdminMenuCategoryRequest {
            id: number;
            request: MenuCategoryRequest;
        }

        export interface Category_PostAdminMenuCategoryRequest {
            request: MenuCategoryRequest;
        }

        export interface ConfirmUser_PostRequest {
            request: VerifyUserRequest;
        }

        export interface Item_GetMenuItemsRequest {
            category: number;
        }

        export interface Item_PutEnableMenuItemRequest {
            id: number;
        }

        export interface Item_PutItemRequest {
            id: number;
            request: ItemRequest;
        }

        export interface Item_DeleteMenuItemRequest {
            id: number;
        }

        export interface Item_PostMenuItemRequest {
            request: ItemRequest;
        }

        export interface Login_PostForgotPasswordRequest {
            email: string;
        }

        export interface Login_PostResetPasswordRequest {
            request: ResetPasswordRequest;
        }

        export interface Login_PostLoginRequest {
            request: LoginRequest;
        }

        export interface Order_GetOrdersByStateRequest {
            state: string;
        }

        export interface Order_GetUserOrderHistoryRequest {
            userId?: string;
        }

        export interface Reporting_PostRequest {
            request: ReportingRequest;
        }

        export interface Signup_PostResendPinRequest {
            request: SignupRequest;
        }

        export interface Signup_PostSignupRequest {
            request: SignupRequest;
        }

        export interface TradingHours_PostAddTradingHoursRequest {
            request: TradingHoursRequest;
        }

        export interface TradingHours_PutUpdateTradingHoursRequest {
            id: number;
            request: TradingHoursRequest;
        }

        export interface User_PutDisableAdminRequest {
            id: string;
        }

        export interface User_PutEnableAdminRequest {
            id: string;
        }

        export interface User_PutUserRoleRequest {
            id: string;
            role: string;
        }

        export interface User_PutUserRequest {
            request: UpdateUserRequest;
        }

        export interface User_GetUserRequest {
            id: string;
        }

        export interface API {
            setToken(value:string, headerOrQueryName:string, isQuery:boolean):void;
            Admin_PostNewAdmin(parameters: Admin_PostNewAdminRequest): PromiseLike<void>;
            Admin_PostNewKitchen(parameters: Admin_PostNewKitchenRequest): PromiseLike<void>;
            Admin_DeleteAdmin(parameters: Admin_DeleteAdminRequest): PromiseLike<any>;
            Admin_GetAdmins(): PromiseLike<AdminResponse>;
            Cart_Delete(parameters: Cart_DeleteRequest): PromiseLike<void>;
            Cart_PostChangeOrderState(parameters: Cart_PostChangeOrderStateRequest): PromiseLike<void>;
            Cart_PutCartItems(parameters: Cart_PutCartItemsRequest): PromiseLike<any>;
            Cart_Get(): PromiseLike<CartResponse>;
            Cart_PostCartItems(parameters: Cart_PostCartItemsRequest): PromiseLike<any>;
            Category_DeleteMenuCategory(parameters: Category_DeleteMenuCategoryRequest): PromiseLike<void>;
            Category_EnableMenuCategory(parameters: Category_EnableMenuCategoryRequest): PromiseLike<void>;
            Category_PutAdminMenuCategory(parameters: Category_PutAdminMenuCategoryRequest): PromiseLike<void>;
            Category_GetCategories(): PromiseLike<CategoryResponse>;
            Category_PostAdminMenuCategory(parameters: Category_PostAdminMenuCategoryRequest): PromiseLike<void>;
            ConfirmUser_Post(parameters: ConfirmUser_PostRequest): PromiseLike<void>;
            Item_GetMenuItems(parameters: Item_GetMenuItemsRequest): PromiseLike<ItemResponse>;
            Item_PutEnableMenuItem(parameters: Item_PutEnableMenuItemRequest): PromiseLike<void>;
            Item_PutItem(parameters: Item_PutItemRequest): PromiseLike<any>;
            Item_DeleteMenuItem(parameters: Item_DeleteMenuItemRequest): PromiseLike<void>;
            Item_PostMenuItem(parameters: Item_PostMenuItemRequest): PromiseLike<void>;
            Login_PostForgotPassword(parameters: Login_PostForgotPasswordRequest): PromiseLike<void>;
            Login_PostResetPassword(parameters: Login_PostResetPasswordRequest): PromiseLike<void>;
            Login_PostLogin(parameters: Login_PostLoginRequest): PromiseLike<LoginResponse>;
            Logout_PostLogout(): PromiseLike<void>;
            Order_GetOrdersByState(parameters: Order_GetOrdersByStateRequest): PromiseLike<OrderResponse>;
            Order_GetTodayOrders(): PromiseLike<OrderResponse>;
            Order_GetUserOrderHistory(parameters?: Order_GetUserOrderHistoryRequest): PromiseLike<OrderItemResponse>;
            Reporting_Post(parameters: Reporting_PostRequest): PromiseLike<any>;
            Signup_PostResendPin(parameters: Signup_PostResendPinRequest): PromiseLike<any>;
            Signup_PostSignup(parameters: Signup_PostSignupRequest): PromiseLike<void>;
            TradingHours_GetTradingHours(): PromiseLike<TradingHourResponse>;
            TradingHours_PostAddTradingHours(parameters: TradingHours_PostAddTradingHoursRequest): PromiseLike<TradingHourResponse>;
            TradingHours_PutUpdateTradingHours(parameters: TradingHours_PutUpdateTradingHoursRequest): PromiseLike<TradingHourResponse>;
            User_PutDisableAdmin(parameters: User_PutDisableAdminRequest): PromiseLike<any>;
            User_PutEnableAdmin(parameters: User_PutEnableAdminRequest): PromiseLike<any>;
            User_PutUserRole(parameters: User_PutUserRoleRequest): PromiseLike<any>;
            User_GetAllUsers(): PromiseLike<AdminResponse>;
            User_PutUser(parameters: User_PutUserRequest): PromiseLike<any>;
            User_GetUser(parameters: User_GetUserRequest): PromiseLike<any>;
        }
    }
}
