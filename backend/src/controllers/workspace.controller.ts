import { asyncHandler } from "../middlewares/asyncHandler.middleware"
import  { Request, Response } from "express"
import { changeRoleSchema, createWorkspaceSchema,  updateWorkspaceSchema, workspaceIdSchema } from "../validation/workspace.validation"
import { HTTPSTATUS } from "../config/http.config";
import { changeMemberRoleService
    , createWorkspaceService
    , deleteWorkspaceByIdService, getAllWorkspacesUserIsMemberService
    , getWorkspaceAnalyticsService,
     getWorkspaceByidService,
     getWorkspaceMemberService, 
     updateWorkspaceByIdService} from "../services/workspace.service";
import { getMemberRoleinWorkspace } from "../services/member.service";
import { RolePermissions } from "../utils/role-permission";
import { roleGuard } from "../utils/roleGuard";
import {Permissions} from "../enums/role.enum"


export const createWorkspaceController= asyncHandler(
    async(req:Request, res : Response) => {
        const body = createWorkspaceSchema.parse(req.body);
        const userId = req.user?._id;
        const {workspace} = await createWorkspaceService(userId,body);
        return res.status(HTTPSTATUS.CREATED).json({
            message : "Workspace created successfully ",
         workspace,   
        });
    }
);
export const getAllWorkspaceUserIsMemberController = asyncHandler (
    async(req:Request, res:Response)=> {
        const userId= req.user?._id;
        const { workspaces } = await getAllWorkspacesUserIsMemberService(userId);
        return res.status(HTTPSTATUS.OK).json({
            message : "User Workspaces fetched successfully ",
         workspaces,   
        });
    
    }
);
export const getWorkspaceByidController = asyncHandler(
    async(req:Request, res:Response)=> {
        const workspaceId= workspaceIdSchema.parse(req.params.id);
        const userId= req.user?._id;

        await getMemberRoleinWorkspace(userId,workspaceId);
        const { workspace } = await getWorkspaceByidService (workspaceId) 
        return res.status(HTTPSTATUS.OK).json ({
            message : "workspace fetched successfully",
            workspace ,
    });
    }
);
export const getWorkspaceMembersController =asyncHandler( async(req:Request, res:Response)=> {
        const workspaceId= workspaceIdSchema.parse(req.params.id);
        const userId= req.user?._id;
        const{role}=await getMemberRoleinWorkspace(userId,workspaceId)
   roleGuard(role, [Permissions.VIEW_ONLY]);
    const{members,roles} = await getWorkspaceMemberService(workspaceId)
    return res.status(HTTPSTATUS.OK).json({
        message: " Workspace members retrieved successfully ",
        members,
        roles ,

    })
}

   
    

);
export const getWorkspaceAnalyticsController = asyncHandler( async (req:Request, res : Response) =>
{const workspaceId= workspaceIdSchema.parse(req.params.id);
        const userId= req.user?._id;
         const{role}=await getMemberRoleinWorkspace(userId,workspaceId)
         roleGuard(role, [Permissions.VIEW_ONLY]);
         const {analytics} = await getWorkspaceAnalyticsService(workspaceId);
        
return res.status(HTTPSTATUS.OK).json ({
            message : "workspace analytics retrieved successfully ",
             analytics,
});

} );
export const changeWorkspaceMemberController = asyncHandler(async(req:Request, res:Response)=> {
        const workspaceId= workspaceIdSchema.parse(req.params.id);
        const {memberId, roleId}= changeRoleSchema.parse(req.body);
        const{role}=await getMemberRoleinWorkspace(memberId,workspaceId)
        roleGuard(role, [Permissions.CHANGE_MEMBER_ROLE]);
        const {member} = await changeMemberRoleService(
            workspaceId,
            memberId,
            roleId
        )
        return res.status(HTTPSTATUS.OK).json ({
            message : "Member Role changed successfully ",
             member,
    
    })
});
export const updateWorkspaceByIdController = asyncHandler(
    async(req:Request, res:Response

    ) =>{const workspaceId = workspaceIdSchema.parse(req.params.id);

        const {name,description} = updateWorkspaceSchema.parse(req.body);
        const userId= req.user?._id;
        const {role} = await getMemberRoleinWorkspace(userId,workspaceId)
                 roleGuard(role, [Permissions.EDIT_WORKSPACE]);
        const {workspace} = await updateWorkspaceByIdService(
            workspaceId,name,description
        );
        return res.status(HTTPSTATUS.OK).json ({
            message : "Workspace updated successfully ",
             workspace,
    
    });

    }
);
export const deleteWorkspaceByIdController =asyncHandler(
async(req:Request, res:Response) => 
    {const workspaceId =workspaceIdSchema.parse(req.params.id)
        const userId= req.user?._id;
        const {role} = await getMemberRoleinWorkspace(userId,workspaceId)
    roleGuard(role, [Permissions.DELETE_WORKSPACE]);
        const {currentWorkspace} = await deleteWorkspaceByIdService(
            workspaceId,
            userId
        );
      return res.status(HTTPSTATUS.OK).json ({
            message : "workspace deleted successfully ",
            currentWorkspace
            });
  

}
);
