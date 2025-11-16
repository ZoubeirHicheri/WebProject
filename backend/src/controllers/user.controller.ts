import { Request,Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "../config/http.config";
import { getCurrentUserService } from "../services/user.service";

export const getCurrentUserController= asyncHandler(
    async ( req:Request , res : Response) => 
        {const userId = req.user?._id; // Extracts the current user’s ID from the request (set by auth middleware)
    const { user } = await getCurrentUserService(userId);
return res.status(HTTPSTATUS.OK).json({
    message:"User fetch Successfully  ",
    user,

});}
);