import { authenticator } from "otplib";

export function gennerate_secret(): string {
  return authenticator.generateSecret();
}

export function generate_otp(secret: string, digits: number = 6): string {
  authenticator.options = { digits };
  return authenticator.generate(secret);
}

export function verify_otp(token: string, secret: string): boolean {
  return authenticator.check(token, secret);
}
