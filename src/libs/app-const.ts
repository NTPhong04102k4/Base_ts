export class AppConst {
  static readonly COMMON_STATUS = {
    ACTIVE: 1,
    INACTIVE: 2,
    REMOVE: 0,
  };
  static readonly OTP_TYPE = {
    FORGET_PASSWORD: "forget-password",
    REGISTER: "register",
  };
  static readonly REGEX = {
    EMAIL: /^[a-zA-Z0-9._-]+@[a-z]+\.[a-z]{2,6}$/,
    PHONE: /^[+][0-9]{7,13}$/,
    UUID: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    DATE: /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/,
    OBJECT_ID: /^[a-fA-F0-9]{24}$/,
    ADMIN_PASSWORD:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?^+$%"&()^_!&"-])[A-Za-z\d@$!%*#?^+$%"&()^_!&"-]{8,}$/,
    VIETNAMESE:
      /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯưẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỳỲỴỵỶỷỸỹ\s]+$/,
  };
}
