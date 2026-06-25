"use client";

import { useEffect, useRef, useState } from "react";
import {
  Camera,
  MoreVertical,
  Eye,
  ImagePlus,
  Trash2,
} from "lucide-react";

import ChangeImage from "./ChangeImage";
import ImagePreviewModal from "./ImagePreviewModal";
import DeleteImageDialog from "./DeleteImageDialog";


interface AvatarUploaderProps {
  imageUrl?: string;
  onUploadSuccess: (imageUrl: string) => void;
}

export default function AvatarUploader({
  imageUrl,
  onUploadSuccess,
}: AvatarUploaderProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleOutside
      );
  }, []);

  const avatar =
    imageUrl ||
    "https://ui-avatars.com/api/?background=2563eb&color=fff&name=User";

  const handleDelete = async () => {
    onUploadSuccess("");
    setDeleteOpen(false);
  };

  return (
    <>
      <ChangeImage onSuccess={onUploadSuccess}>
        {({ openFilePicker, uploading }) => (
          <div
            ref={menuRef}
            className="relative w-fit"
          >

                        {/* Avatar */}
            <div className="relative group">

              {/* Gradient Border */}
              <div
                className="
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-indigo-600
                  p-1
                  shadow-2xl
                "
              >
                <div
                  className="
                    relative
                    h-44
                    w-44
                    overflow-hidden
                    rounded-full
                    bg-white
                    dark:bg-slate-900
                  "
                >
                  <img
                    src={avatar}
                    alt="Profile"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-all
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  {/* Hover Overlay */}
                  <button
                    type="button"
                    disabled={uploading}
                    onClick={() => setMenuOpen(true)}
                    className="
                      absolute
                      inset-0
                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-2
                      bg-black/60
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <Camera
                      size={30}
                      className="text-white"
                    />

                    <span className="text-sm font-medium text-white">
                      {uploading
                        ? "Uploading..."
                        : "Manage Photo"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Three Dots */}
              <button
                type="button"
                onClick={() =>
                  setMenuOpen((prev) => !prev)
                }
                className="
                  absolute
                  top-2
                  right-2
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  dark:bg-slate-800/90
                  backdrop-blur-xl
                  shadow-xl
                  transition
                  hover:scale-105
                "
              >
                <MoreVertical size={18} />
              </button>

              {/* Action Menu */}
              {menuOpen && (
                <div
                  className="
                    absolute
                    top-14
                    left-1/2
                    -translate-x-1/2
                    z-50
                    w-64
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/95
                    shadow-2xl
                    backdrop-blur-2xl
                    dark:border-slate-700
                    dark:bg-slate-900/95
                  "
                >                  {/* Preview */}
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewOpen(true);
                      setMenuOpen(false);
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      gap-4
                      px-5
                      py-4
                      transition
                      hover:bg-slate-100
                      dark:hover:bg-slate-800
                    "
                  >
                    <Eye
                      size={20}
                      className="text-blue-600"
                    />

                    <div className="text-left">
                      <p className="font-medium">
                        Preview Image
                      </p>

                      <p className="text-xs text-slate-500">
                        View full profile photo
                      </p>
                    </div>
                  </button>

                  <div className="mx-4 h-px bg-slate-200 dark:bg-slate-700" />

                  {/* Change */}
                  <button
                    type="button"
                    onClick={() => {
                      openFilePicker();
                      setMenuOpen(false);
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      gap-4
                      px-5
                      py-4
                      transition
                      hover:bg-slate-100
                      dark:hover:bg-slate-800
                    "
                  >
                    <ImagePlus
                      size={20}
                      className="text-emerald-600"
                    />

                    <div className="text-left">
                      <p className="font-medium">
                        Change Image
                      </p>

                      <p className="text-xs text-slate-500">
                        Upload another profile photo
                      </p>
                    </div>
                  </button>

                  <div className="mx-4 h-px bg-slate-200 dark:bg-slate-700" />

                  {/* Delete */}
                  <button
                    type="button"
                    onClick={() => {
                      setDeleteOpen(true);
                      setMenuOpen(false);
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      gap-4
                      px-5
                      py-4
                      transition
                      hover:bg-red-50
                      dark:hover:bg-red-900/20
                    "
                  >
                    <Trash2
                      size={20}
                      className="text-red-600"
                    />

                    <div className="text-left">
                      <p className="font-medium text-red-600">
                        Delete Image
                      </p>

                      <p className="text-xs text-slate-500">
                        Remove profile picture
                      </p>
                    </div>
                  </button>
                </div>
              )}

            </div>
          </div>
        )}
      </ChangeImage>      <ImagePreviewModal
        open={previewOpen}
        imageUrl={avatar}
        onClose={() => setPreviewOpen(false)}
      />

     <DeleteImageDialog
  open={deleteOpen}
  onClose={() => setDeleteOpen(false)}
  onDeleteSuccess={handleDelete}
/>
    </>
  );
}