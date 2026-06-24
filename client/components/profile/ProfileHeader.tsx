"use client";

import AvatarUploader from "./AvatarUploader";
import { ShieldCheck, Mail } from "lucide-react";

interface Props {
  formData: {
    name: string;
    email: string;
    imageUrl: string;
  };

  setFormData: React.Dispatch<
    React.SetStateAction<any>
  >;
}

export default function ProfileHeader({
  formData,
  setFormData,
}: Props) {
  return (
    <div
      className="
      relative overflow-hidden
      rounded-3xl
      bg-white/70
dark:bg-[#0B1220]/70
backdrop-blur-2xl
      shadow-xl
      border
      border-white/20
      dark:border-slate-800
      p-8
    "
    >
      {/* Smart City Background Image */}
      <img
        src="/images/profile-bg.png"
        alt="Smart City"
        className="
          absolute
          right-0
          top-0
          h-full
          w-[55%]
          object-cover
         opacity-[0.75]
dark:opacity-[0.45]
          pointer-events-none
          select-none
        "
      />

      {/* Decorative Glow Effects */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-24 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
        <AvatarUploader
          imageUrl={formData.imageUrl}
          onUploadSuccess={(newImageUrl) =>
            setFormData((prev: any) => ({
              ...prev,
              imageUrl: newImageUrl,
            }))
          }
        />

        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {formData.name}
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-2 mt-3 text-gray-500 dark:text-gray-400">
            <Mail size={16} />
            <span>{formData.email}</span>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
            <ShieldCheck size={18} />
            Verified Citizen
          </div>
        </div>
      </div>
    </div>
  );
}