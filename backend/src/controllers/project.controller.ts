import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { Request , Response} from "express"
import { workspaceIdSchema} from "../validation/workspace.validation";
import { getMemberRoleinWorkspace} from "../services/member.service";
import { roleGuard} from "../utils/roleGuard";
import { Permissions} from "../enums/role.enum";
import { createProjectService, deleteProjectService, getProjectAnalyticsService, getProjectsByIdAndWorkspaceIdService, getProjectsInWorkspaceService, updateProjectService } from "../services/project.service";
import { HTTPSTATUS } from "../config/http.config";
import { createProjectSchema, projectIdSchema, updateProjectSchema } from "../validation/project.validation";

export const createProjectController = asyncHandler(
    async(req: Request , res: Response)=>{
        const body = createProjectSchema.parse(req.body);
        //validate workspaceId
        const workspaceId = workspaceIdSchema.parse(req.params.workspaceId);
        const userId = req.user?._id;
        //get role and check if create permission is included in role
        const{ role } = await getMemberRoleinWorkspace(userId, workspaceId);
            roleGuard(role ,[Permissions.CREATE_PROJECT]);


            const{project} = await createProjectService(userId , workspaceId , body);

            return res.status(HTTPSTATUS.CREATED).json({
                message:"project created successfully",
                project,
            });
        }

);

export const getAllProjectsInWorkspaceController = asyncHandler(
    async(req: Request , res: Response)=>{
        const workspaceId = workspaceIdSchema.parse(req.params.workspaceId);
        const userId = req.user?._id;
        const{ role } = await getMemberRoleinWorkspace(userId, workspaceId);
            roleGuard(role ,[Permissions.VIEW_ONLY]);

            const pageSize = parseInt(req.query.pageSize as string) || 10 ;
            const pageNumber =parseInt(req.query.pageNumber as string) || 1 ;

            const {projects ,totalCount ,totalPages , skip} = await getProjectsInWorkspaceService(workspaceId,pageSize,pageNumber);
           
            return res.status(HTTPSTATUS.OK).json({
                message:"project fetched successfully",
                projects,
                pagination:{
                    totalCount,
                    pageSize,
                    pageNumber,
                    totalPages,
                    skip,
                    limit: pageSize,
                }
            });

        }
);

export const getProjectByIdAndWorkspaceIdController = asyncHandler(
    async (req: Request , res: Response) =>{
        const workspaceId = workspaceIdSchema.parse(req.params.workspaceId);
        const projectId = projectIdSchema.parse(req.params.id);
        const userId = req.user?._id;
        const{ role } = await getMemberRoleinWorkspace(userId, workspaceId);
            roleGuard(role ,[Permissions.VIEW_ONLY]);
        const{project} = await getProjectsByIdAndWorkspaceIdService(
            workspaceId,
            projectId);
        
        return res.status(HTTPSTATUS.OK).json({
                message:"project fetched successfully",
                project,
                }
            );
        }
);

export const getProjectAnalyticsController = asyncHandler(
     async (req: Request , res: Response) =>{
        const workspaceId = workspaceIdSchema.parse(req.params.workspaceId);
        const projectId = projectIdSchema.parse(req.params.id);
        const userId = req.user?._id;
        const{ role } = await getMemberRoleinWorkspace(userId, workspaceId);
            roleGuard(role ,[Permissions.VIEW_ONLY]);

            const { analytics } = await getProjectAnalyticsService(
                projectId, workspaceId  
            )
        return res.status(HTTPSTATUS.OK).json({
            message:"retrieved analytics successfully",
            analytics,
        });
     }
);

export const updateProjectcontroller = asyncHandler(
    async (req: Request , res: Response) => {
        const workspaceId = workspaceIdSchema.parse(req.params.workspaceId);
        const projectId = projectIdSchema.parse(req.params.id);
        const userId = req.user?._id;
        const body = updateProjectSchema.parse(req.body);
        const{ role } = await getMemberRoleinWorkspace(userId, workspaceId);
            roleGuard(role ,[Permissions.EDIT_PROJECT]);
        
            const{project}=await updateProjectService(
                workspaceId,
                projectId,
                body,
            );
        return res.status(HTTPSTATUS.OK).json({
            message: "project updated",
            project,
        });
    }
);


export const deleteProjectController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;

    const projectId = projectIdSchema.parse(req.params.id);
    const workspaceId = workspaceIdSchema.parse(req.params.workspaceId);

    const { role } = await getMemberRoleinWorkspace(userId, workspaceId);
    roleGuard(role, [Permissions.DELETE_PROJECT]);

    await deleteProjectService(workspaceId, projectId);

    return res.status(HTTPSTATUS.OK).json({
      message: "Project deleted successfully",
    });
  }
);