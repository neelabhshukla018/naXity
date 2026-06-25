"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

interface ImageEditorContextType {
  image: string | null;
  setImage: (image: string | null) => void;
}

const ImageEditorContext =
  createContext<ImageEditorContextType | null>(null);

export function ImageEditorProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [image, setImage] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      image,
      setImage,
    }),
    [image]
  );

  return (
    <ImageEditorContext.Provider value={value}>
      {children}
    </ImageEditorContext.Provider>
  );
}

export function useImageEditor() {
  const context = useContext(ImageEditorContext);

  if (!context) {
    throw new Error(
      "useImageEditor must be used inside ImageEditorProvider"
    );
  }

  return context;
}