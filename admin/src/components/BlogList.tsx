"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";

interface Blog {
    id: string;
    title: string;
    slug: string;
    published: boolean;
    createdAt: string;
}

export default function BlogList({ initialBlogs }: { initialBlogs: Blog[] }) {
    const [blogs, setBlogs] = useState(initialBlogs);

    const handleDelete = async (id: string) => {
        if (!confirm("Bu bloqu silmək istədiyinizə əminsiniz?")) return;

        const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
        if (res.ok) {
            setBlogs(blogs.filter((b) => b.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Bloglar</h2>
                <button
                    onClick={() => (window.location.href = "/dashboard/blogs/new")}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center transition-colors"
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Yeni Blog
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                        <tr>
                            <th className="px-6 py-3">Başlıq</th>
                            <th className="px-6 py-3">Slug</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Tarix</th>
                            <th className="px-6 py-3 text-right">Əməliyyatlar</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {blogs.map((blog) => (
                            <tr key={blog.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{blog.title}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{blog.slug}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-2 py-1 rounded text-xs ${blog.published
                                                ? "bg-green-100 text-green-700"
                                                : "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {blog.published ? "Dərc edilib" : "Qaralama"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {new Date(blog.createdAt).toLocaleDateString("az-AZ")}
                                </td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button
                                        onClick={() => (window.location.href = `/dashboard/blogs/edit/${blog.id}`)}
                                        className="text-indigo-600 hover:text-indigo-900 p-1"
                                        title="Düzəliş et"
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(blog.id)}
                                        className="text-red-600 hover:text-red-900 p-1"
                                        title="Sil"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {blogs.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                                    Hələ ki, blog yoxdur.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
