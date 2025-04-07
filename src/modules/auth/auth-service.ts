import {
  UserInput,
  UserOutput,
  UserRequest,
} from "@repositories/user/user-type";

export interface iAuthService {
  register(input: UserRequest): Promise<UserOutput>;
}

export class AuthService {
  public async register(input: UserRequest): Promise<UserOutput> {
    return;
  }
}
