"use client";

import { useState } from "react";
import { AlertTriangle, Loader2, Trash2, X } from "lucide-react";

interface DeleteImageDialogProps {
  open: boolean;
  onClose: () => void;
  onDeleteSuccess?: () => void;
}

export default function DeleteImageDialog({
  open,
  onClose,
  onDeleteSuccess,
}: DeleteImageDialogProps) {
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleDelete = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/user/delete-avatar",
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to delete image");
      }

      onDeleteSuccess?.();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Unable to delete profile image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/10
          bg-white
          dark:bg-slate-900
          shadow-2xl
          overflow-hidden
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-700 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-100 dark:bg-red-500/20 p-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>

            <div>
              <h2 className="text-lg font-semibold">
                Delete Profile Picture
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                This action cannot be undone.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            disabled={loading}
            className="
              rounded-full
              p-2
              transition
              hover:bg-gray-100
              dark:hover:bg-slate-800
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <div className="rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Your current profile picture will be permanently removed from
              your account and cloud storage.

              <br />
              <br />

              A default avatar will automatically be used until you upload a
              new picture.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-gray-200 dark:border-slate-700 px-6 py-5">
          <button
            disabled={loading}
            onClick={onClose}
            className="
              rounded-xl
              border
              border-gray-300
              dark:border-slate-700
              px-5
              py-2.5
              font-medium
              transition
              hover:bg-gray-100
              dark:hover:bg-slate-800
            "
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={handleDelete}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-red-600
              px-5
              py-2.5
              font-medium
              text-white
              transition
              hover:bg-red-700
              disabled:opacity-60
            "
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 size={17} />
                Delete
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}