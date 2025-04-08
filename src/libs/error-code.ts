export class ErrorCode {
  static readonly UNAUTHORIZE = "ERR00007";
  static readonly PASSWORD_NOT_MATCHED: string = "ERR00009";
  static readonly DATA_NOT_FOUND: string = "ERR00010";
  static readonly EMAIL_IS_EXISTS: string = "ERR00011";
  static readonly EMAIL_DOES_NOT_EXISTS: string = "ERR00012";
  static readonly SOME_THING_WENT_WRONG: string = "ERR00038";
  static readonly INCORRECT_OTP_CODE: string = "ERR00039";
  static readonly INCORRECT_EMAIL_OR_PASSWORD: string = "ERR00040";
  static readonly PASSWORD_IS_NOT_CORRECT: string = "ERR00041";
  static readonly DATA_IS_EXISTS: string = "ERR00043";
  static readonly USER_INACTIVE = "ERR00059";
  static readonly HAS_FILM_DOWNLOADING: string = "ERR00042";
  static readonly PASSWORD_MATCH_OLD_PASSWORD: string = "ERR00044";
  static readonly INCORRECT_OLD_PASSWORD: string = "ERR00045";
}
