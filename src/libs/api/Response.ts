function Response(handle) {
  return async (req, res, next) => {
    try {
      let data = await handle(req, res, next);
      return res.send({
        signal: 1,
        code: 200,
        message: "SUCCESS",
        data: data,
      });
    } catch (err) {
      //   const errorRes = getErrorRes(err);
      return res.send({});
    }
  };
}

export default Response;
