import { string } from "zod";
import WorkspaceModel from "../models/workspace.model";
import { BadRequestException, NotFoundException, UnauthorizedException } from "../utils/appError";
import MemberModel from "../models/member.model";
import { ErrorCodeEnum } from "../enums/error-code.enum";
import TaskModel from "../models/task.model";
import { TaskStatusEnum } from "../enums/task.enum";
import RoleModel from "../models/roles-permission.model";
import { Roles } from "../enums/role.enum";

export const getMemberRoleinWorkspace= async (
    userId:string,workspaceId:string) => {
        const workspace = await WorkspaceModel.findById(workspaceId);
    
        if (!workspace) { 
        throw new NotFoundException("User not found");
    }
    const member = await MemberModel.findOne({
        userId,
        workspaceId,}).populate("role")
        if (!member) { 
            throw new UnauthorizedException("User not You are not a member of this workspace",ErrorCodeEnum.ACCESS_UNAUTHORIZED);
        
       
        }
        const roleName = member.role?.name ;
        return {role: roleName};

    };

export const joinWorkspaceByInviteService =async (
    userId:string,
    InviteCode: string
) => {const workspace = await WorkspaceModel.findById(InviteCode);
    
        if (!workspace) { 
        throw new NotFoundException("User not found");
    }

    const existingmember = await MemberModel.findOne({
        userId,
        workspaceId:workspace._id,}).exec()
        if (existingmember) { 
            throw new BadRequestException(" You are already a member of this workspace ");
        }
        const role = await RoleModel.findOne({ name : Roles.MEMBER})
if (!role) {
    throw new NotFoundException("Role not found");
}
const newMember = new MemberModel({
    userId ,
    workspaceId: workspace._id,
    role:role._id,});

    await newMember.save();
    return { workspaceId: workspace._id, role:role.name};
    }

