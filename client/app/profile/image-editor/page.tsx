"use client";

import { useRouter } from "next/navigation";
import ImageEditor from "@/components/profile/ImageEditor";
import { useImageEditor } from "@/context/ImageEditorContext";
import { useEffect } from "react";

export default function ImageEditorPage() {
  const router = useRouter();

  const {
    image,
    setImage,
  } = useImageEditor();

 useEffect(() => {
  if (!image) {
    router.replace("/profile");
  }
}, [image, router]);

if (!image) {
  return null;
}

  return (
    <main className="min-h-screen bg-[#020817]">
      <ImageEditor
        image={image}
        onCancel={() => {
          setImage(null);
         router.replace("/profile");
        }}
        onSuccess={() => {
          setImage(null);
          router.replace("/profile");
        }}
      />
    </main>
  );
}