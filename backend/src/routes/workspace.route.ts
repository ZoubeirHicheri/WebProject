import { Router } from "express";
import { changeWorkspaceMemberController,
         createWorkspaceController, 
        deleteWorkspaceByIdController, 
        getAllWorkspaceUserIsMemberController, 
        getWorkspaceAnalyticsController, 
        getWorkspaceByidController, 
        getWorkspaceMembersController, 
        updateWorkspaceByIdController} from "../controllers/workspace.controller";
const workspaceRoutes = Router();

workspaceRoutes.post("/create/new", createWorkspaceController);
workspaceRoutes.put("/change/member/role/:id", changeWorkspaceMemberController);
workspaceRoutes.put("/update/:id", updateWorkspaceByIdController);
workspaceRoutes.delete("/delete/:id", deleteWorkspaceByIdController);

workspaceRoutes.get("/all",getAllWorkspaceUserIsMemberController);
workspaceRoutes.get("/:id",getWorkspaceByidController);
workspaceRoutes.get("/members/:id",getWorkspaceMembersController);

workspaceRoutes.get("/analytics/:id",getWorkspaceAnalyticsController);


export default workspaceRoutes ;
