import Link from "next/link";
import { LogOut, FileText, LayoutDashboard, MessageSquare } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-6">
                    <h1 className="text-xl font-bold text-indigo-600">Abbasoğlu Admin</h1>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    <Link
                        href="/dashboard"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                        <LayoutDashboard className="mr-3 h-5 w-5" />
                        Dashboard
                    </Link>
                    <Link
                        href="/dashboard/blogs"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                        <FileText className="mr-3 h-5 w-5" />
                        Bloglar
                    </Link>
                    <Link
                        href="/dashboard/submissions"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                        <MessageSquare className="mr-3 h-5 w-5" />
                        Müraciətlər
                    </Link>
                </nav>
                <div className="p-4 border-t border-gray-200">
                    <form action="/api/logout" method="POST">
                        <button
                            type="submit"
                            className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <LogOut className="mr-3 h-5 w-5" />
                            Çıxış
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}
