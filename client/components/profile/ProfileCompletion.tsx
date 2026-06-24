"use client";

interface Props {
  formData: any;
}

export default function ProfileCompletion({
  formData,
}: Props) {
  const fields = [
    formData.imageUrl,
    formData.name,
    formData.phone,
    formData.city,
    formData.state,
    formData.bio,
    formData.address,
    formData.gender,
  ];

  const completed = fields.filter(Boolean).length;

  const percentage = Math.round(
    (completed / fields.length) * 100
  );

  return (
    <div
      className="
      rounded-3xl
      bg-white/70
dark:bg-[#0B1220]/70
backdrop-blur-2xl
      shadow-xl
      border
      border-white/20
      dark:border-slate-800
      p-6
    "
    >
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold text-gray-800 dark:text-white">
          Profile Completion
        </h3>

        <span className="font-bold text-blue-600">
          {percentage}%
        </span>
      </div>

      <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}