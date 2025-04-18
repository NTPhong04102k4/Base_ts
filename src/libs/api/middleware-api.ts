import getErrorRes from "./get_Err";

function Middleware(handle) {
  return async (req, res, next) => {
    try {
      await handle(req, res, next);
    } catch (err) {
      const errorRes = getErrorRes(err);
      return res.send(errorRes);
    }
  };
}
export default Middleware;
