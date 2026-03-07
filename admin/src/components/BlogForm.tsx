"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft } from "lucide-react";


import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogFormProps {
    initialData?: {
        id: string;
        title: string;
        slug: string;
        content: string;
        image?: string;
        published?: boolean;
    };
}

export default function BlogForm({ initialData }: BlogFormProps) {
    const [title, setTitle] = useState(initialData?.title || "");
    const [slug, setSlug] = useState(initialData?.slug || "");
    const [content, setContent] = useState(initialData?.content || "");
    const [image, setImage] = useState(initialData?.image || "");
    const [published, setPublished] = useState(initialData?.published ?? true);
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(false);
    const router = useRouter();

    const generateSlug = (text: string) => {
        return text
            .toLowerCase()
            .replace(/ə/g, "e")
            .replace(/ı/g, "i")
            .replace(/ç/g, "c")
            .replace(/ş/g, "s")
            .replace(/ğ/g, "g")
            .replace(/ü/g, "u")
            .replace(/ö/g, "o")
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        if (!initialData) {
            setSlug(generateSlug(e.target.value));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const url = initialData ? `/api/blogs/${initialData.id}` : "/api/blogs";
        const method = initialData ? "PATCH" : "POST";

        const res = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, slug, content, image, published }),
        });

        if (res.ok) {
            router.push("/dashboard/blogs");
            router.refresh();
        } else {
            alert("Xəta baş verdi");
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-5xl bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="text-gray-500 hover:text-gray-700 flex items-center"
                >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Geri
                </button>
                <h2 className="text-xl font-bold">{initialData ? "Bloqu redaktə et" : "Yeni blog"}</h2>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Başlıq</label>
                        <input
                            type="text"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Slug</label>
                        <input
                            type="text"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Şəkil URL</label>
                    <input
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-gray-700">Məzmun (Markdown dəstəyi ilə)</label>
                        <button
                            type="button"
                            onClick={() => setPreview(!preview)}
                            className="text-xs text-indigo-600 hover:text-indigo-800 font-bold uppercase tracking-wider"
                        >
                            {preview ? "Redaktə et" : "Ön baxış"}
                        </button>
                    </div>

                    {preview ? (
                        <div className="prose prose-indigo max-w-none border border-gray-200 p-4 rounded-md min-h-[300px] bg-gray-50">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                        </div>
                    ) : (
                        <textarea
                            rows={15}
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm font-mono"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Markdown formatında mətn bura daxil edin... \n\n# Başlıq \n## Alt başlıq \n**Qalın**, *maili* \n- Siyahı \n[Link](url)"
                        />
                    )}
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="published"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={published}
                        onChange={(e) => setPublished(e.target.checked)}
                    />
                    <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
                        Dərc edilsin
                    </label>
                </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
                <button
                    type="button"
                    onClick={() => router.push("/dashboard/blogs")}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-md"
                >
                    Ləğv et
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md flex items-center"
                >
                    <Save className="h-4 w-4 mr-2" />
                    {loading ? "Yadda saxlanılır..." : "Yadda saxla"}
                </button>
            </div>
        </form>
    );
}
