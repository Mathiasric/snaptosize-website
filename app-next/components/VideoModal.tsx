"use client";

import { useEffect, useRef, useCallback } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-slide-down"
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose();
      }}
    >
      <div className="relative w-full max-w-4xl mx-4">
        <button
          onClick={handleClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-accent-light transition-colors text-2xl font-light cursor-pointer"
          aria-label="Close video"
        >
          ✕
        </button>
        <video
          ref={videoRef}
          src={videoSrc}
          controls
          autoPlay
          muted
          playsInline
          className="w-full rounded-xl border border-border"
        />
      </div>
    </div>
  );
}
