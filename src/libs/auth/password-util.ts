import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;
export async function hashPassword(
  _plainPassword: string,
  _hashedSalt: number = SALT_ROUNDS
): Promise<string> {
  const salt = await bcrypt.genSalt(_hashedSalt);
  const _hashedPassword = await bcrypt.hash(_plainPassword, salt);
  return _hashedPassword;
}
export async function comparePassword(
  _plainPassword: string,
  _hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(_plainPassword, _hashedPassword);
}
