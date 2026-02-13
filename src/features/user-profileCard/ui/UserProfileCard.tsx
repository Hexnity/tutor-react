import {
    Mail,
    Phone,
    MapPin,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Card, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";

export const UserProfileCard = () => (
    <Card className="overflow-hidden">
        <CardContent className="pt-8 flex flex-col items-center text-center">
            <Avatar className="size-24 mb-4 ring-4 ring-slate-50">
                <AvatarImage src="" alt="profile pic" />
                <AvatarFallback>AJ</AvatarFallback>
            </Avatar>

            <div className="space-y-1 mb-6">
                <h2 className="text-xl font-bold text-slate-900">Alex Johnson</h2>
                <p className="text-sm text-slate-500 font-medium">Senior Admin & Data Analyst</p>
            </div>

            <div className="w-full h-px bg-slate-100 mb-6" />

            <div className="w-full space-y-3 mb-6">
                <DetailRow icon={<Mail />} label="alex.johnson@example.com" />
                <DetailRow icon={<Phone />} label="+1 (555) 123-4567" />
                <DetailRow icon={<MapPin />} label="New York, USA" />
            </div>

            <p className="text-sm text-slate-500 text-left leading-relaxed mb-8">
                Passionate about data-driven insights and optimizing operational workflows. I specialize in backend architecture and enjoy contributing to open-source projects in my free time.
            </p>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-xl shadow-sm">
                Edit Profile
            </Button>
        </CardContent>
    </Card>
);

const DetailRow = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
    <div className="flex items-center gap-3 text-sm text-slate-600">
        <div className="size-4 text-slate-400">{icon}</div>
        <span>{label}</span>
    </div>
);
