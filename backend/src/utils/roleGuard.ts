import { ErrorCodeEnum } from "../enums/error-code.enum";
import { PermissionType , Permissions} from "../enums/role.enum";
import { UnauthorizedException } from "./appError";
import { RolePermissions } from "./role-permission";

export const roleGuard = ( 
    role :keyof typeof RolePermissions,
    requiredPermissions : PermissionType[]
) => {
    const permissions = RolePermissions[role];
    const hasPermissions = requiredPermissions.every((permission) => permissions.includes(permission));
     if (!hasPermissions) { 
            throw new UnauthorizedException("you do not have the necssary permissions to perform this action",ErrorCodeEnum.ACCESS_UNAUTHORIZED);     
};
}
