"use client";

import { useEffect, useState } from "react";

import AnimatedBackground from "@/components/backgrounds/AnimatedBackground";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileCompletion from "@/components/profile/ProfileCompletion";
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
    {/* Animated Smart City Background */}
    <AnimatedBackground />

    {/* Content */}
    <div className="relative z-10 mx-auto max-w-7xl space-y-8">

      <ProfileHeader
        formData={formData}
        setFormData={setFormData}
      />

      <ProfileCompletion
        formData={formData}
      />

      {/* Uncomment after redesign */}
      {/* <ProfileStats /> */}

      <ProfileForm
        formData={formData}
        handleChange={handleChange}
        handleSave={handleSave}
      />

    </div>
  </div>
);
}