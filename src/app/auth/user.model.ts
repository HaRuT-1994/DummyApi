export class User {
  
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public confirmpassword: string,
    public id: number
    ) {}

}