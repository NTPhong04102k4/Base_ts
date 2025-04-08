import { ErrorCode } from "@libs/error-code";
import message_key from "@libs/message-key";

function getErrorRes(err) {
  return {
    signal: 0,
    code: 400,
    errorCode: err ? err : ErrorCode.SOME_THING_WENT_WRONG,
    message: message_key[err],
  };
}
export default getErrorRes;
