"use client";

import { useEffect, useState } from "react";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileCompletion from "@/components/profile/ProfileCompletion";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileForm from "@/components/profile/ProfileForm";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    address: "",
    city: "",
    state: "",
    gender: "",
    dateOfBirth: "",
    imageUrl: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/user/me",
        {
          credentials: "include",
        }
      );

      const data = await res.json();

      if (data.success) {
        setFormData({
          ...data.user,
          dateOfBirth: data.user.dateOfBirth
            ? data.user.dateOfBirth.split("T")[0]
            : "",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/user/update-profile",
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="h-48 rounded-3xl animate-pulse bg-slate-200 dark:bg-slate-800" />
      </div>
    );
  }

 return (
  <div
    className="
    relative
    min-h-screen
    overflow-hidden
    bg-[#F4F7FC]
    dark:bg-[#07111F]
    p-6
    lg:p-8
  "
  >
    {/* Canvas Background */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(to_right,#64748b08_1px,transparent_1px),linear-gradient(to_bottom,#64748b08_1px,transparent_1px)]
        bg-[size:60px_60px]
      "
      />

      {/* Blue Orb */}
      <div
        className="
        absolute
        -top-32
        -left-32
        h-[500px]
        w-[500px]
        rounded-full
        bg-blue-500/15
        blur-[120px]
      "
      />

      {/* Purple Orb */}
      <div
        className="
        absolute
        top-1/2
        -right-40
        h-[500px]
        w-[500px]
        rounded-full
        bg-purple-500/15
        blur-[120px]
      "
      />

      {/* Cyan Orb */}
      <div
        className="
        absolute
        bottom-0
        left-1/3
        h-[400px]
        w-[400px]
        rounded-full
        bg-cyan-400/10
        blur-[120px]
      "
      />
    </div>

    {/* Main Content */}
    <div className="relative z-10 space-y-6">
      <ProfileHeader
        formData={formData}
        setFormData={setFormData}
      />

      <ProfileCompletion
        formData={formData}
      />

      <ProfileStats />

      <ProfileForm
        formData={formData}
        handleChange={handleChange}
        handleSave={handleSave}
      />
    </div>
  </div>
);
}