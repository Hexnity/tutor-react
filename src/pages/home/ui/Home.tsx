import { Link } from "react-router-dom";
import {
  MapPin,
  BookOpen,
  Calendar,
  Users,
  Clock,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/shared/ui/card";

interface HomeProps {
  title?: string;
}

export const Home = ({ title }: HomeProps) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">

      {/* --- Hero: The Individual Expert --- */}
      <section className="grid lg:grid-cols-2 gap-12 items-center pt-10">
        <div className="space-y-6">
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50/50">
            Enrolling for 2026 Academic Year {title}
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Advanced Sciences & Mathematics with <span className="text-blue-600">John Doe</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Professional private instruction for high-achieving students.
            Structured lessons, comprehensive resources, and localized
            learning centers designed for academic excellence. c
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="rounded-full shadow-lg shadow-blue-200" asChild>
              <Link to="/admin">Student Dashboard</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <a href="#schedule">View Schedule</a>
            </Button>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="aspect-[4/5] bg-slate-100 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
            {/* Profile Image Placeholder */}
            <div className="w-full h-full flex items-center justify-center bg-slate-50">
              <Users className="w-24 h-24 text-slate-200" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Subject Tracks --- */}
      <section className="space-y-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight">Available Subjects</h2>
          <p className="text-slate-500">Comprehensive syllabus coverage for competitive examinations.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <SubjectCard
            title="Pure Mathematics"
            desc="Calculus, Algebra, and Geometry focus for senior levels."
            count="12 Modules"
          />
          <SubjectCard
            title="Applied Physics"
            desc="Mechanics, Thermodynamics, and Modern Physics theory."
            count="10 Modules"
          />
          <SubjectCard
            title="Statistics"
            desc="Data analysis and probability for specialized streams."
            count="8 Modules"
          />
        </div>
      </section>

      {/* --- Location & Schedule (The Marketing Focus) --- */}
      <section id="schedule" className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
        <div className="relative z-10 space-y-10">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-bold italic">Session Schedule</h2>
            <p className="text-slate-400">Find the most convenient location for your weekly physical or hybrid sessions.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <LocationRow day="Monday & Wednesday" time="4:00 PM - 7:00 PM" location="Central Avenue Hub" />
            <LocationRow day="Tuesday & Thursday" time="3:30 PM - 6:30 PM" location="North Plaza Center" />
            <LocationRow day="Friday" time="5:00 PM - 8:00 PM" location="West Side Institute" />
            <LocationRow day="Saturday" time="8:00 AM - 12:00 PM" location="Downtown Library Wing" />
          </div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full -mr-20 -mt-20" />
      </section>

      {/* --- Simple Footer --- */}
      <footer className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
        <p>© 2026 John Doe Education. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-600 transition-colors">Resources</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
};

// --- Local Components ---

const SubjectCard = ({ title, desc, count }: any) => (
  <Card className="border-slate-100 shadow-none hover:border-blue-200 transition-all group cursor-default">
    <CardHeader>
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
        <BookOpen className="w-5 h-5" />
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </CardContent>
    <CardFooter className="flex items-center justify-between border-t border-slate-50 pt-4 mt-2">
      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{count}</span>
      <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-colors" />
    </CardFooter>
  </Card>
);

const LocationRow = ({ day, time, location }: any) => (
  <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-blue-400">
        <Calendar className="w-4 h-4" />
        <span className="text-sm font-medium">{day}</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-slate-500" />
        <span className="text-base font-semibold">{location}</span>
      </div>
    </div>
    <div className="flex items-center gap-2 text-slate-400">
      <Clock className="w-4 h-4" />
      <span className="text-sm">{time}</span>
    </div>
  </div>
);