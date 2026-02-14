import { useEffect, useState } from "react";
import { ListChecks, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { getPermissionsRoles } from "../api/handlers";
import type { PermissionsRoles } from "../model/types";

export const PermissionsRolesCard = () => {
    const [roles, setRoles] = useState<PermissionsRoles>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                setLoading(true);
                const data = await getPermissionsRoles();
                setRoles(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load roles');
            } finally {
                setLoading(false);
            }
        };

        fetchRoles();
    }, []);

    if (loading) {
        return (
            <Card className="h-full">
                <CardHeader className="border-b pb-4 px-6">
                    <CardTitle className="text-lg font-bold">Permissions & Roles</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center min-h-[200px]">
                    <Loader2 className="size-8 animate-spin text-blue-600" />
                </CardContent>
            </Card>
        );
    }

    if (error) {
        return (
            <Card className="h-full">
                <CardHeader className="border-b pb-4 px-6">
                    <CardTitle className="text-lg font-bold">Permissions & Roles</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center min-h-[200px]">
                    <p className="text-sm text-red-500">{error}</p>
                </CardContent>
            </Card>
        );
    }

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
