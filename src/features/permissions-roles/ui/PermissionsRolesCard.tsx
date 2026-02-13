import { ListChecks } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";

type Role = {
    name: string;
    permissions: string[];
};

type PermissionsRolesCardProps = {
    roles?: Role[];
};

const defaultRoles: Role[] = [
    {
        name: "Administrator",
        permissions: ["Full Access", "User Management"],
    },
    {
        name: "Data Analyst",
        permissions: ["View Reports", "Create Dashboards"],
    },
    {
        name: "Support Agent",
        permissions: ["View User Data", "Reset Passwords"],
    },
];

export const PermissionsRolesCard = ({ roles = defaultRoles }: PermissionsRolesCardProps) => {
    return (
        <Card className="h-full">
            <CardHeader className="border-b pb-4 px-6">
                <CardTitle className="text-lg font-bold">Permissions & Roles</CardTitle>
            </CardHeader>
            <CardContent className="px-6 py-6">
                <div className="space-y-8">
                    {roles.map((role, index) => (
                        <div key={index} className="space-y-4">
                            <div className="flex items-center gap-2 text-slate-800 font-bold">
                                <ListChecks className="size-4 text-slate-400" />
                                <span>{role.name}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {role.permissions.map((permission, pIndex) => (
                                    <Badge
                                        key={pIndex}
                                        variant="secondary"
                                        className="bg-slate-100 text-slate-700 text-[11px] font-medium border-none px-3 py-1"
                                    >
                                        {permission}
                                    </Badge>
                                ))}
                            </div>
                            {index < roles.length - 1 && <div className="h-px bg-slate-50 mt-6" />}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
