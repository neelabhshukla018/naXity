"use client";

import { useRef, useState } from "react";
import { Camera, Loader2 } from "lucide-react";

interface AvatarUploaderProps {
  imageUrl?: string;
  onUploadSuccess?: (imageUrl: string) => void;
}

export default function AvatarUploader({
  imageUrl,
  onUploadSuccess,
}: AvatarUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("avatar", file);

      const response = await fetch(
        "http://localhost:5000/api/user/upload-avatar",
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        onUploadSuccess?.(data.user.imageUrl);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative">
      <img
        src={
          imageUrl ||
          "https://ui-avatars.com/api/?name=User"
        }
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
      />

      <button
        type="button"
        disabled={uploading}
        onClick={() => fileInputRef.current?.click()}
        className="absolute bottom-0 right-0 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
      >
        {uploading ? (
          <Loader2
            size={18}
            className="animate-spin"
          />
        ) : (
          <Camera size={18} />
        )}
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}