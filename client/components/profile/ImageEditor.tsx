"use client";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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

    const previewCanvasRef =
  useRef<HTMLCanvasElement>(null);

const imageRef =
  useRef<HTMLImageElement | null>(null);

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

    useEffect(() => {
  const img = new Image();

  img.crossOrigin = "anonymous";
  img.src = image;

  img.onload = () => {
    imageRef.current = img;
  };
}, [image]);

useEffect(() => {
  if (
    !previewCanvasRef.current ||
    !imageRef.current ||
    !croppedAreaPixels
  ) {
    return;
  }

  const canvas = previewCanvasRef.current;
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  canvas.width = 160;
  canvas.height = 160;

  ctx.clearRect(0, 0, 160, 160);

  const scaleX =
    imageRef.current.width / 160;

  const scaleY =
    imageRef.current.height / 160;

  ctx.save();

  ctx.beginPath();
  ctx.arc(80, 80, 80, 0, Math.PI * 2);
  ctx.clip();

  ctx.drawImage(
    imageRef.current,
    croppedAreaPixels.x,
    croppedAreaPixels.y,
    croppedAreaPixels.width,
    croppedAreaPixels.height,
    0,
    0,
    160,
    160
  );

  ctx.restore();
}, [croppedAreaPixels]);

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
    <div className="min-h-screen bg-slate-100 dark:bg-[#020817] transition-colors duration-300 p-8">

<div
  className="
    mx-auto
    max-w-7xl
    overflow-hidden
    rounded-3xl
    border
    border-slate-200
    bg-white
    shadow-2xl
    transition-colors
    duration-300
    dark:border-white/10
    dark:bg-slate-900
  "
>
        {/* Header */}

       <div
  className="
    flex
    items-center
    justify-between
    border-b
    border-slate-200
    px-8
    py-6
    dark:border-white/10
  "
>

          <div>

            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-900 dark:text-white">
              Edit Profile Photo
            </h1>

            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Crop, rotate and zoom your
              avatar.
            </p>

          </div>

          <button
            onClick={onCancel}
            className="
rounded-xl
p-2
transition
hover:bg-slate-100
dark:hover:bg-white/10
"
          >
            <X className="text-slate-700 dark:text-slate-900 dark:text-white" />
          </button>

        </div>

        {/* Main Layout */}

        <div className="flex h-[720px]">          {/* Left - Crop Area */}
          <div className="
relative
flex-1
bg-slate-200
transition-colors
duration-300
dark:bg-[#0f172a]
">

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
border-slate-200
bg-white
p-8
flex
flex-col
transition-colors
duration-300
dark:border-white/10
dark:bg-slate-900
"
          >

            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-900 dark:text-white">
              Image Controls
            </h2>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Adjust your profile picture
              before uploading.
            </p>

           {/* Live Preview */}

<div className="mt-8">

  <h3 className="mb-4 text-center text-sm font-semibold text-slate-400">
    Live Preview
  </h3>

  <div className="flex justify-center">

    <div
      className="
        relative
        h-40
        w-40
        overflow-hidden
        rounded-full
        border-4
        border-blue-500
        bg-slate-950
        shadow-2xl
      "
    >
      <canvas
        ref={previewCanvasRef}
        width={160}
        height={160}
        className="h-full w-full"
      />
    </div>

  </div>

</div>
              {/* Rotate */}

<div>

  <p className="mb-3 font-medium text-white">
    Rotate
  </p>

  <div className="space-y-3">

    <button
      type="button"
      onClick={() =>
        setRotation(
          (prev) => prev - 90
        )
      }
      className="
        flex
        w-full
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
      Rotate Left
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
        w-full
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
      Rotate Right
    </button>

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
    </button>

  </div>

</div>

<div className="mt-auto border-t border-white/10 pt-8">

                <div className="flex gap-3">

                  <button
                    type="button"
                    onClick={onCancel}
                    disabled={uploading}
                    className="
                      flex-1
                      rounded-xl
                      border
                 border-slate-300
text-slate-900
hover:bg-slate-100
dark:border-white/10
dark:text-white
dark:hover:bg-white/10
                      px-5
                      py-3
                      font-medium
                      
                      transition
                      
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
                        Save Image
                      </>
                    )}
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div> );

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

    

}