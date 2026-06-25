"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Download } from "lucide-react";

interface ImagePreviewModalProps {
  open: boolean;
  imageUrl?: string;
  userName?: string;
  onClose: () => void;
}

export default function ImagePreviewModal({
  open,
  imageUrl,
  userName = "User",
  onClose,
}: ImagePreviewModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const avatar =
    imageUrl ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      userName
    )}&background=2563eb&color=fff&size=512`;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      onClick={onClose}
    >
<div
  onClick={(e) => e.stopPropagation()}
  className="
    relative
    w-full
    max-w-3xl
    max-h-[90vh]
    rounded-3xl
    overflow-hidden
    border
    border-white/10
    bg-slate-900/95
    backdrop-blur-2xl
    shadow-2xl
    flex
    flex-col
  "
>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <h2 className="text-xl font-semibold text-white dark:text-white">
              Profile Picture
            </h2>

            <p className="text-sm text-gray-300">
              {userName}
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              rounded-full
              p-2
              transition
              hover:bg-white/10
            "
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 overflow-auto bg-black p-6">
    <div className="flex justify-center">
  <img
    src={avatar}
    alt="Profile"
    className="
      max-h-[65vh]
      w-auto
      max-w-full
      rounded-2xl
      object-contain
      shadow-2xl
    "
  />
</div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-end gap-3 border-t border-white/10 px-6 py-4">
          <a
            href={avatar}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:bg-blue-700
            "
          >
            <Download size={18} />
            Download
          </a>

          <button
            onClick={onClose}
            className="
              rounded-xl
              border
              border-white/10
              px-5
              py-2.5
              text-sm
              font-medium
              transition
              hover:bg-white/10
              dark:text-white
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}