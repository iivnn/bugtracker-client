import { Role } from "./enums/Role";

export class UserInfo {
  constructor(
    public name: string,
    public email: string,
    public role: Role,
){}
}
