import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Label } from "@/shared/ui/label";
import { Badge } from "@/shared/ui/badge";




export const Login = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-5">
            {/* Login Section */}
            <section className="grid lg:grid-cols-2 gap-12 items-center pt-10">
                {/* Left Column */}
                <div className="space-y-6 text-center lg:text-left order-last lg:order-first">
                    <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50/50">
                        Welcome Back
                    </Badge>
                    <h1 className="text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                        Continue Your <span className="text-blue-600">Learning Journey</span>
                    </h1>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        Log in to access your dashboard, view upcoming sessions, and explore new course materials.
                    </p>
                </div>

                {/* Right Column: Login Form */}
                <div className="w-full max-w-md mx-auto">
                    <Card className="border-slate-100 shadow-2xl shadow-blue-100/50">
                        <CardHeader>
                            <CardTitle className="text-2xl">Student Login</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="student@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" />
                            </div>
                            <Button size="lg" className="w-full rounded-full shadow-lg shadow-blue-200 mt-2">
                                Login
                            </Button>
                            <div className="mt-4 text-center text-sm text-slate-500">
                                Don't have an account?{" "}
                                <a href="/register" className="font-medium text-blue-600 hover:text-blue-500 hover:underline transition-colors">
                                    Register
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
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
    )
}
