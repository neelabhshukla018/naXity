"use client";

export default function TestUpload() {
  const handleUpload = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("avatar", file);

    const res = await fetch(
      "http://localhost:5000/api/user/upload-avatar",
      {
        method: "POST",
        credentials: "include",
        body: formData,
      }
    );

    const data = await res.json();
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <div className="p-10">
      <input type="file" onChange={handleUpload} />
    </div>
  );
}