import { db } from "@/lib/db";
import { submissions } from "@/lib/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function SubmissionsPage() {

    const allSubmissions = await db.query.submissions.findMany({
        orderBy: [desc(submissions.createdAt)],
    });

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Müraciətlər</h2>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                        <tr>
                            <th className="px-6 py-3">Adı</th>
                            <th className="px-6 py-3">Email / Telefon</th>
                            <th className="px-6 py-3">Xidmət</th>
                            <th className="px-6 py-3">Ünvan / Tarix</th>
                            <th className="px-6 py-3">Göndərildi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {allSubmissions.map((s) => (
                            <tr key={s.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <p className="font-bold text-gray-900">{s.name}</p>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <p>{s.email}</p>
                                    <p className="text-gray-500">{s.phone}</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs">
                                        {s.service}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <p>{s.location || "-"}</p>
                                    <p className="text-gray-500">{s.date || "-"}</p>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {new Date(s.createdAt).toLocaleString("az-AZ")}
                                </td>
                            </tr>
                        ))}
                        {allSubmissions.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                                    Hələ ki, müraciət yoxdur.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
