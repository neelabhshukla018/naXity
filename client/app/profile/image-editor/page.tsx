"use client";

import { useRouter } from "next/navigation";
import ImageEditor from "@/components/profile/ImageEditor";
import { useImageEditor } from "@/context/ImageEditorContext";

export default function ImageEditorPage() {
  const router = useRouter();

  const {
    image,
    setImage,
  } = useImageEditor();

  if (!image) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-8 text-center">
          <h2 className="text-xl font-semibold text-white">
            No image selected
          </h2>

          <p className="mt-2 text-gray-400">
            Please choose an image first.
          </p>

          <button
            onClick={() => router.push("/profile")}
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Back to Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#020817]">
      <ImageEditor
        image={image}
        onCancel={() => {
          setImage(null);
          router.push("/profile");
        }}
        onSuccess={() => {
          setImage(null);
          router.push("/profile");
        }}
      />
    </main>
  );
}