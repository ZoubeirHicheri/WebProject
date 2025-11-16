import UserModel from "../models/user.model";
import { BadRequestException } from "../utils/appError";

export const getCurrentUserService =async(userId: string)=>
     {const user = await UserModel.findById(userId)
        .populate("currentWorkspace") //fills related workspace data
        .select("-password"); // removes the password field(security)
if (!user) {
    throw new BadRequestException("User not found"); }

return {
    user,
}
     }