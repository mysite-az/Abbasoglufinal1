import { db } from "@/lib/db";
import { blogs, submissions } from "@/lib/db/schema";
import { count } from "drizzle-orm";
import { FileText, MessageSquare, Clock } from "lucide-react";

export default async function DashboardPage() {
    const [blogsCount] = await db.select({ value: count() }).from(blogs);
    const [submissionsCount] = await db.select({ value: count() }).from(submissions);
    const recentSubmissions = await db.query.submissions.findMany({
        limit: 5,
        orderBy: (submissions, { desc }) => [desc(submissions.createdAt)],
    });

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Xülasə</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
                    <div className="p-3 bg-indigo-100 rounded-full mr-4">
                        <FileText className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Bloglar</p>
                        <p className="text-2xl font-bold">{blogsCount.value}</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
                    <div className="p-3 bg-green-100 rounded-full mr-4">
                        <MessageSquare className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Müraciətlər</p>
                        <p className="text-2xl font-bold">{submissionsCount.value}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-bold flex items-center uppercase text-xs tracking-wider text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        Son Müraciətlər
                    </h3>
                </div>
                <div className="p-0">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                            <tr>
                                <th className="px-6 py-3">Ad</th>
                                <th className="px-6 py-3">Xidmət</th>
                                <th className="px-6 py-3">Tarix</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {recentSubmissions.map((s) => (
                                <tr key={s.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">{s.name}</td>
                                    <td className="px-6 py-4">{s.service}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {new Date(s.createdAt).toLocaleDateString("az-AZ")}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
