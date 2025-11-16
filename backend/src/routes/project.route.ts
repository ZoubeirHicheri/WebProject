import {Router} from "express";
import { createProjectController,getAllProjectsInWorkspaceController, getProjectAnalyticsController, getProjectByIdAndWorkspaceIdController, updateProjectcontroller} from "../controllers/project.controller";

const projectRoutes = Router();

projectRoutes.post("/workspace/:worspaceId/create",createProjectController);


projectRoutes.get("/workspace/:worspaceId/all",getAllProjectsInWorkspaceController);

projectRoutes.get("/:id/workspace/:worspaceId",getProjectByIdAndWorkspaceIdController);

projectRoutes.get("/:id/workspace/:worspaceId/analytics",getProjectAnalyticsController);

projectRoutes.put("/:id/workspace/:workspaceId/update",updateProjectcontroller);

projectRoutes.delete("/:id/workspace/:workspaceId/delete",updateProjectcontroller);

export default projectRoutes;