"use client";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Save,
} from "lucide-react";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

interface Props {
  formData: any;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => void;

  handleSave: () => void;
}

export default function ProfileForm({
  formData,
  handleChange,
  handleSave,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        bg-white/80
        dark:bg-[#0B1220]/80
        backdrop-blur-xl
        shadow-xl
        border
        border-white/20
        dark:border-slate-800
        p-8
      "
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        <InputField
          icon={<User size={18} />}
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <InputField
          icon={<Mail size={18} />}
          label="Email"
          name="email"
          value={formData.email}
          disabled
        />

        <InputField
          icon={<Phone size={18} />}
          label="Phone"
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
        />

        <InputField
          icon={<MapPin size={18} />}
          label="City"
          name="city"
          value={formData.city || ""}
          onChange={handleChange}
        />

        {/* State Dropdown */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            State
          </label>

          <div className="flex items-center gap-3 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 bg-white dark:bg-slate-900">
            <MapPin
              size={18}
              className="text-gray-500 dark:text-gray-400"
            />

            <select
              name="state"
              value={formData.state || ""}
              onChange={handleChange}
               className="
              w-full
              rounded-xl
              border
              border-gray-200
              dark:border-slate-700
              px-4
              py-3
              bg-white
              dark:bg-slate-900
              text-gray-800
              dark:text-white
            "
            >
              <option value="">
                Select State
              </option>

              {indianStates.map((state) => (
                <option
                  key={state}
                  value={state}
                >
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Gender Dropdown */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Gender
          </label>

          <select
            name="gender"
            value={formData.gender || ""}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-gray-200
              dark:border-slate-700
              px-4
              py-3
              bg-white
              dark:bg-slate-900
              text-gray-800
              dark:text-white
            "
          >
            <option value="">
              Select Gender
            </option>

            <option value="MALE">
              Male
            </option>

            <option value="FEMALE">
              Female
            </option>

            <option value="OTHER">
              Other
            </option>

            <option value="PREFER_NOT_TO_SAY">
              Prefer not to say
            </option>
          </select>
        </div>

        <InputField
          icon={<Calendar size={18} />}
          label="Date Of Birth"
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth || ""}
          onChange={handleChange}
        />
      </div>

      {/* Address */}
      <div className="mt-5">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Address
        </label>

        <textarea
          rows={3}
          name="address"
          value={formData.address || ""}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-gray-200
            dark:border-slate-700
            p-3
            bg-white
            dark:bg-slate-900
            text-gray-800
            dark:text-white
          "
        />
      </div>

      {/* Bio */}
      <div className="mt-5">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Bio
        </label>

        <textarea
          rows={4}
          name="bio"
          value={formData.bio || ""}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-gray-200
            dark:border-slate-700
            p-3
            bg-white
            dark:bg-slate-900
            text-gray-800
            dark:text-white
          "
        />
      </div>

      <button
        onClick={handleSave}
        className="
          mt-8
          flex
          items-center
          gap-2
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-6
          py-3
          rounded-xl
          transition
        "
      >
        <Save size={18} />
        Save Changes
      </button>
    </div>
  );
}

function InputField({
  icon,
  label,
  name,
  value,
  onChange,
  type = "text",
  disabled = false,
}: any) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      <div
        className="
          flex
          items-center
          gap-3
          border
          border-gray-200
          dark:border-slate-700
          rounded-xl
          px-4
          py-3
          bg-white
          dark:bg-slate-900
        "
      >
        {icon}

        <input
          type={type}
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          className="
            w-full
            bg-transparent
            outline-none
            text-gray-800
            dark:text-white
          "
        />
      </div>
    </div>
  );
}