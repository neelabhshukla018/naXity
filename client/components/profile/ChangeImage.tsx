"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

import { useImageEditor } from "@/context/ImageEditorContext";

interface ChangeImageProps {
  children: (props: {
    openFilePicker: () => void;
    uploading: boolean;
  }) => React.ReactNode;
}

export default function ChangeImage({
  children,
}: ChangeImageProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const { setImage } = useImageEditor();

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
     router.replace("/profile/image-editor");
    };

    reader.readAsDataURL(file);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      {children({
        openFilePicker,
        uploading: false,
      })}

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg,image/webp"
        className="hidden"
        onChange={handleFileChange}
      />
    </>
  );
}