export interface AuthenticationModel {

  email: string;
  password: string;

}
export interface Authentication {
  auth: (authenticationModel: AuthenticationModel) => Promise<string>
}
