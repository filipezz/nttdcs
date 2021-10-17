export interface AuthenticationModel {

  email: string;
  password: string;

}
export interface Authentication {
  auth: (AthenticationModel: AuthenticationModel) => Promise<string>
}
