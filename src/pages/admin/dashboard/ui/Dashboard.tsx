import { 
  Users, 
  BookOpen, 
  MapPin, 
  TrendingUp,
  Calendar as CalendarIcon
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";

interface DashboardProps {
  title?: string; // The ? makes it optional
}

export const Dashboard = ({ title }: DashboardProps) => {
  return (
    <div className="space-y-8">
      {/* --- Header Section --- */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight"> {title || "Management Overview"}</h1>
        <p className="text-slate-500">Monitor your students, locations, and session performance.</p>
      </div>

      {/* --- Quick Stats --- */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Students" value="142" icon={<Users className="w-4 h-4" />} trend="+12% from last month" />
        <StatCard title="Active Subjects" value="4" icon={<BookOpen className="w-4 h-4" />} trend="Across 3 streams" />
        <StatCard title="Teaching Hubs" value="3" icon={<MapPin className="w-4 h-4" />} trend="Active today" />
        <StatCard title="Avg. Attendance" value="94%" icon={<TrendingUp className="w-4 h-4" />} trend="High engagement" />
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        {/* --- Recent Activity / Upcoming Sessions --- */}
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <SessionRow 
                subject="Pure Mathematics" 
                location="Central Hub" 
                time="16:00 - 18:00" 
                students={42} 
                status="Ready" 
              />
              <SessionRow 
                subject="Applied Physics" 
                location="North Plaza" 
                time="18:30 - 20:30" 
                students={28} 
                status="Exam Prep" 
              />
              <SessionRow 
                subject="Statistics" 
                location="West Side" 
                time="Tomorrow, 09:00" 
                students={35} 
                status="Pending" 
              />
            </div>
          </CardContent>
        </Card>

        {/* --- Location Breakdown --- */}
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Hub Utilization</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <HubProgress label="Central Avenue Hub" value={85} />
            <HubProgress label="North Plaza Center" value={60} />
            <HubProgress label="West Side Institute" value={45} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// --- Local Components ---

const StatCard = ({ title, value, icon, trend }: any) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-slate-500">{title}</CardTitle>
      <div className="text-slate-400">{icon}</div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-slate-400 mt-1">{trend}</p>
    </CardContent>
  </Card>
);

const SessionRow = ({ subject, location, time, status }: any) => (
  <div className="flex items-center justify-between border-b border-slate-50 pb-4 last:border-0 last:pb-0">
    <div className="space-y-1">
      <p className="text-sm font-medium leading-none">{subject}</p>
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <MapPin className="w-3 h-3" /> {location}
      </div>
    </div>
    <div className="text-right space-y-1">
      <div className="flex items-center gap-2 text-xs font-medium">
        <CalendarIcon className="w-3 h-3" /> {time}
      </div>
      <Badge variant="secondary" className="text-[10px] h-5">{status}</Badge>
    </div>
  </div>
);

const HubProgress = ({ label, value }: any) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs font-medium">
      <span>{label}</span>
      <span>{value}% Capacity</span>
    </div>
    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
      <div 
        className="h-full bg-blue-600 transition-all duration-500" 
        style={{ width: `${value}%` }} 
      />
    </div>
  </div>
);