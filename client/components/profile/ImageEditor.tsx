// "use client";

// import { useCallback, useState } from "react";
// import Cropper, { Area } from "react-easy-crop";
// import {
//   RotateCcw,
//   RotateCw,
//   RefreshCcw,
//   ZoomIn,
//   Check,
//   X,
// } from "lucide-react";

// import getCroppedImg from "./cropImage";

// interface ImageEditorProps {
//   image: string;
//   onCancel: () => void;
//   onSuccess: () => void;
// }

// export default function ImageEditor({
//   image,
//   onCancel,
//   onSuccess,
// }: ImageEditorProps) {
//   const [crop, setCrop] = useState({
//     x: 0,
//     y: 0,
//   });

//   const [zoom, setZoom] = useState(1);

//   const [rotation, setRotation] =
//     useState(0);

//   const [croppedAreaPixels, setCroppedAreaPixels] =
//     useState<Area | null>(null);

//   const [uploading, setUploading] =
//     useState(false);

//   const onCropComplete = useCallback(
//     (
//       _: Area,
//       croppedArea: Area
//     ) => {
//       setCroppedAreaPixels(croppedArea);
//     },
//     []
//   );

//   const handleSave = async () => {
//     if (!croppedAreaPixels) return;

//     try {
//       setUploading(true);

//       const croppedFile =
//         await getCroppedImg(
//           image,
//           croppedAreaPixels,
//           rotation
//         );

//       const formData = new FormData();

//       formData.append(
//         "avatar",
//         croppedFile
//       );

//       const res = await fetch(
//         "http://localhost:5000/api/user/upload-avatar",
//         {
//           method: "POST",
//           credentials: "include",
//           body: formData,
//         }
//       );

//       const data = await res.json();

//       if (!res.ok || !data.success) {
//         throw new Error(
//           data.message
//         );
//       }

//       onSuccess();

//     } catch (err) {
//       console.error(err);

//       alert(
//         "Failed to upload image."
//       );

//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#020817] flex items-center justify-center p-8">

//       <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">

//         {/* Header */}

//         <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">

//           <div>

//             <h1 className="text-2xl font-bold text-white">
//               Edit Profile Photo
//             </h1>

//             <p className="mt-1 text-gray-400">
//               Crop, zoom and rotate your
//               profile picture.
//             </p>

//           </div>

//           <button
//             onClick={onCancel}
//             className="rounded-xl p-2 text-white transition hover:bg-white/10"
//           >
//             <X size={22} />
//           </button>

//         </div>

//         <div className="relative h-[600px] bg-black">

//           <Cropper
//             image={image}
//             crop={crop}
//             zoom={zoom}
//             rotation={rotation}
//             aspect={1}
//             cropShape="round"
//             showGrid={false}
//             objectFit="contain"
//             onCropChange={setCrop}
//             onZoomChange={setZoom}
//             onCropComplete={
//               onCropComplete
//             }
//           />

//         </div>

//         <div className="space-y-6 p-8">          {/* Zoom */}
//           <div>
//             <div className="mb-3 flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <ZoomIn
//                   size={18}
//                   className="text-blue-500"
//                 />

//                 <span className="font-medium text-white">
//                   Zoom
//                 </span>
//               </div>

//               <span className="text-sm text-gray-400">
//                 {zoom.toFixed(1)}x
//               </span>
//             </div>

//             <input
//               type="range"
//               min={1}
//               max={3}
//               step={0.1}
//               value={zoom}
//               onChange={(e) =>
//                 setZoom(Number(e.target.value))
//               }
//               className="
//                 h-2
//                 w-full
//                 cursor-pointer
//                 appearance-none
//                 rounded-full
//                 bg-slate-700
//                 accent-blue-600
//               "
//             />
//           </div>

//           {/* Rotate & Reset */}
//           <div className="flex flex-wrap items-center justify-between gap-4">

//             <div className="flex items-center gap-3">

//               <button
//                 type="button"
//                 onClick={() =>
//                   setRotation((r) => r - 90)
//                 }
//                 className="
//                   flex
//                   items-center
//                   gap-2
//                   rounded-xl
//                   border
//                   border-white/10
//                   bg-slate-800
//                   px-5
//                   py-3
//                   text-white
//                   transition
//                   hover:bg-slate-700
//                 "
//               >
//                 <RotateCcw size={18} />
//                 Rotate Left
//               </button>

//               <button
//                 type="button"
//                 onClick={() =>
//                   setRotation((r) => r + 90)
//                 }
//                 className="
//                   flex
//                   items-center
//                   gap-2
//                   rounded-xl
//                   border
//                   border-white/10
//                   bg-slate-800
//                   px-5
//                   py-3
//                   text-white
//                   transition
//                   hover:bg-slate-700
//                 "
//               >
//                 <RotateCw size={18} />
//                 Rotate Right
//               </button>

//             </div>

//             <button
//               type="button"
//               onClick={() => {
//                 setCrop({
//                   x: 0,
//                   y: 0,
//                 });

//                 setZoom(1);

//                 setRotation(0);
//               }}
//               className="
//                 flex
//                 items-center
//                 gap-2
//                 rounded-xl
//                 border
//                 border-red-500/30
//                 bg-red-500/10
//                 px-5
//                 py-3
//                 text-red-400
//                 transition
//                 hover:bg-red-500/20
//               "
//             >
//               <RefreshCcw size={18} />
//               Reset
//             </button>

//           </div>          {/* Footer */}
//           <div className="flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">

//             {/* Left Info */}
//             <div>
//               <h3 className="text-sm font-semibold text-white">
//                 Avatar Preview
//               </h3>

//               <p className="mt-1 text-sm text-gray-400">
//                 Your image will be cropped to a square and displayed
//                 as a circular profile picture throughout naXity.
//               </p>
//             </div>

//             {/* Actions */}
//             <div className="flex items-center gap-3">

//               <button
//                 type="button"
//                 disabled={uploading}
//                 onClick={onCancel}
//                 className="
//                   rounded-xl
//                   border
//                   border-white/10
//                   px-6
//                   py-3
//                   font-medium
//                   text-white
//                   transition
//                   hover:bg-white/10
//                   disabled:cursor-not-allowed
//                   disabled:opacity-50
//                 "
//               >
//                 Cancel
//               </button>

//               <button
//                 type="button"
//                 disabled={uploading}
//                 onClick={handleSave}
//                 className="
//                   flex
//                   items-center
//                   gap-2
//                   rounded-xl
//                   bg-blue-600
//                   px-6
//                   py-3
//                   font-semibold
//                   text-white
//                   transition
//                   hover:bg-blue-700
//                   disabled:cursor-not-allowed
//                   disabled:opacity-60
//                 "
//               >
//                 {uploading ? (
//                   <>
//                     <svg
//                       className="h-5 w-5 animate-spin"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                     >
//                       <circle
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="3"
//                         opacity=".25"
//                       />

//                       <path
//                         d="M22 12a10 10 0 0 0-10-10"
//                         stroke="currentColor"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                       />
//                     </svg>

//                     Uploading...
//                   </>
//                 ) : (
//                   <>
//                     <Check size={20} />
//                     Save Image
//                   </>
//                 )}
//               </button>

//             </div>

//           </div>        </div>
//       </div>

//       {/* Upload Overlay */}
//       {uploading && (
//         <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
//           <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-slate-900 px-10 py-8 shadow-2xl">

//             <svg
//               className="h-10 w-10 animate-spin text-blue-500"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <circle
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="3"
//                 opacity="0.25"
//               />

//               <path
//                 d="M22 12a10 10 0 0 0-10-10"
//                 stroke="currentColor"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//               />
//             </svg>

//             <div className="text-center">

//               <h3 className="text-lg font-semibold text-white">
//                 Uploading Image...
//               </h3>

//               <p className="mt-1 text-sm text-gray-400">
//                 Please wait while we update your profile picture.
//               </p>

//             </div>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useCallback, useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import {
  ZoomIn,
  RotateCcw,
  RotateCw,
  RefreshCcw,
  Check,
  X,
} from "lucide-react";

import getCroppedImg from "./cropImage";

interface ImageEditorProps {
  image: string;
  onCancel: () => void;
  onSuccess: () => void;
}

export default function ImageEditor({
  image,
  onCancel,
  onSuccess,
}: ImageEditorProps) {
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });

  const [zoom, setZoom] =
    useState(1);

  const [rotation, setRotation] =
    useState(0);

  const [
    croppedAreaPixels,
    setCroppedAreaPixels,
  ] = useState<Area | null>(
    null
  );

  const [uploading, setUploading] =
    useState(false);

  const onCropComplete =
    useCallback(
      (
        _: Area,
        croppedArea: Area
      ) => {
        setCroppedAreaPixels(
          croppedArea
        );
      },
      []
    );

  const handleSave =
    async () => {
      if (!croppedAreaPixels)
        return;

      try {
        setUploading(true);

        const croppedFile =
          await getCroppedImg(
            image,
            croppedAreaPixels,
            rotation
          );

        const formData =
          new FormData();

        formData.append(
          "avatar",
          croppedFile
        );

        const res =
          await fetch(
            "http://localhost:5000/api/user/upload-avatar",
            {
              method: "POST",
              credentials:
                "include",
              body: formData,
            }
          );

        const data =
          await res.json();

        if (
          !res.ok ||
          !data.success
        ) {
          throw new Error(
            data.message
          );
        }

        onSuccess();
      } catch (err) {
        console.error(err);

        alert(
          "Failed to upload image."
        );
      } finally {
        setUploading(false);
      }
    };

  return (
    <div className="min-h-screen bg-[#020817] p-8">

      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">

          <div>

            <h1 className="text-3xl font-bold text-white">
              Edit Profile Photo
            </h1>

            <p className="mt-1 text-gray-400">
              Crop, rotate and zoom your
              avatar.
            </p>

          </div>

          <button
            onClick={onCancel}
            className="rounded-xl p-2 hover:bg-white/10"
          >
            <X className="text-white" />
          </button>

        </div>

        {/* Main Layout */}

        <div className="flex h-[720px]">          {/* Left - Crop Area */}
          <div className="relative flex-1 bg-[#0f172a]">

            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              aspect={1}
              cropShape="round"
              showGrid={false}
              objectFit="contain"
              minZoom={1}
              maxZoom={3}
              zoomSpeed={0.15}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />

          </div>

          {/* Right - Controls */}
          <div
            className="
              w-[360px]
              border-l
              border-white/10
              bg-slate-900
              p-8
              flex
              flex-col
            "
          >

            <h2 className="text-xl font-semibold text-white">
              Image Controls
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Adjust your profile picture
              before uploading.
            </p>

            {/* Live Preview */}

            <div className="mt-8 flex justify-center">

              <img
                src={image}
                alt="Preview"
                className="
                  h-36
                  w-36
                  rounded-full
                  border-4
                  border-blue-500
                  object-cover
                  shadow-xl
                "
              />

            </div>

            <div className="mt-10 space-y-8">              {/* Zoom */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ZoomIn
                      size={18}
                      className="text-blue-500"
                    />

                    <span className="font-medium text-white">
                      Zoom
                    </span>
                  </div>

                  <span className="text-sm text-gray-400">
                    {zoom.toFixed(1)}x
                  </span>
                </div>

                <input
                  type="range"
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(e) =>
                    setZoom(
                      Number(e.target.value)
                    )
                  }
                  className="
                    h-2
                    w-full
                    cursor-pointer
                    appearance-none
                    rounded-full
                    bg-slate-700
                    accent-blue-600
                  "
                />
              </div>

              {/* Rotate */}
              <div>

                <p className="mb-3 font-medium text-white">
                  Rotate
                </p>

                <div className="grid grid-cols-2 gap-3">

                  <button
                    type="button"
                    onClick={() =>
                      setRotation(
                        (prev) => prev - 90
                      )
                    }
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-slate-800
                      px-4
                      py-3
                      text-white
                      transition
                      hover:bg-slate-700
                    "
                  >
                    <RotateCcw size={18} />
                    Left
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setRotation(
                        (prev) => prev + 90
                      )
                    }
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-slate-800
                      px-4
                      py-3
                      text-white
                      transition
                      hover:bg-slate-700
                    "
                  >
                    <RotateCw size={18} />
                    Right
                  </button>

                </div>

              </div>

              {/* Reset */}

              <button
                type="button"
                onClick={() => {
                  setCrop({
                    x: 0,
                    y: 0,
                  });

                  setZoom(1);

                  setRotation(0);
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-red-500/20
                  bg-red-500/10
                  px-5
                  py-3
                  font-medium
                  text-red-400
                  transition
                  hover:bg-red-500/20
                "
              >
                <RefreshCcw size={18} />
                Reset Changes
              </button>              <div className="mt-auto border-t border-white/10 pt-8">

                <div className="flex gap-3">

                  <button
                    type="button"
                    onClick={onCancel}
                    disabled={uploading}
                    className="
                      flex-1
                      rounded-xl
                      border
                      border-white/10
                      px-5
                      py-3
                      font-medium
                      text-white
                      transition
                      hover:bg-white/10
                      disabled:opacity-50
                    "
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={uploading}
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-blue-600
                      px-5
                      py-3
                      font-semibold
                      text-white
                      transition
                      hover:bg-blue-700
                      disabled:opacity-50
                    "
                  >
                    {uploading ? (
                      <>
                        <svg
                          className="h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            opacity=".25"
                          />

                          <path
                            d="M22 12a10 10 0 0 0-10-10"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>

                        Uploading...
                      </>
                    ) : (
                      <>
                        <Check size={18} />
                        Save Image
                      </>
                    )}
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {uploading && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-md">

          <div className="rounded-2xl bg-slate-900 px-8 py-6 shadow-2xl border border-white/10">

            <div className="flex items-center gap-4">

              <svg
                className="h-8 w-8 animate-spin text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  opacity=".25"
                />

                <path
                  d="M22 12a10 10 0 0 0-10-10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <div>

                <h3 className="font-semibold text-white">
                  Uploading Profile Photo
                </h3>

                <p className="text-sm text-gray-400">
                  Please wait...
                </p>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}