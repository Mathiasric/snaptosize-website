"use client";

import { useEffect } from "react";

export default function HeroVideo() {
  useEffect(() => {
    const v = document.getElementById("heroVideo") as HTMLVideoElement | null;
    const playBtn = document.getElementById("heroPlay") as HTMLButtonElement | null;
    const controlsWrap = document.getElementById("heroControls") as HTMLElement | null;
    if (!v || !playBtn) return;

    if (v.dataset.init === "1") return;
    v.dataset.init = "1";

    if (controlsWrap) controlsWrap.style.display = "none";

    v.controls = false;
    v.loop = false;
    v.autoplay = false;
    v.muted = true;
    v.preload = "auto";

    let loading = false;

    const setOverlay = (mode: "play" | "loading" | "hide" | "replay") => {
      if (mode === "hide") {
        playBtn.style.display = "none";
        playBtn.classList.remove("is-loading");
        playBtn.textContent = "▶";
        return;
      }

      playBtn.style.display = "inline-flex";

      if (mode === "loading") {
        playBtn.classList.add("is-loading");
        playBtn.textContent = "Loading";
        return;
      }

      playBtn.classList.remove("is-loading");
      playBtn.textContent = mode === "replay" ? "↻" : "▶";
    };

    const userPlay = async () => {
      if (v.ended) v.currentTime = 0;

      loading = true;
      v.controls = false;
      setOverlay("loading");

      try {
        await v.play();
      } catch {
        loading = false;
        setOverlay("play");
      }
    };

    playBtn.addEventListener("click", userPlay);

    v.addEventListener("click", () => {
      if (v.paused) userPlay();
      else v.pause();
    });

    v.addEventListener("playing", () => {
      loading = false;
      v.controls = true;
      setOverlay("hide");
    });

    v.addEventListener("waiting", () => {
      if (!v.paused) {
        loading = true;
        setOverlay("loading");
      }
    });

    v.addEventListener("canplay", () => {
      if (!v.paused) {
        loading = false;
        setOverlay("hide");
      }
    });

    v.addEventListener("pause", () => {
      if (loading) return;
      setOverlay(v.ended ? "replay" : "play");
    });

    v.addEventListener("ended", () => {
      v.controls = true;
      setOverlay("replay");
    });

    const io = new IntersectionObserver(
      (entries) => {
        const ent = entries[0];
        if (!ent) return;
        if (!ent.isIntersecting && !v.paused) v.pause();
      },
      { threshold: 0.25 }
    );

    io.observe(v);

    setOverlay("play");
  }, []);

  return null;
}
