const DEMO_URL = "https://huggingface.co/spaces/snaptosize-app/snaptosize";
const PAY_URL_MONTHLY = "https://buy.stripe.com/cNi8wQf38cGYb8Wa1k7N601"; // bytt til monthly subscription link
const PAY_URL_YEARLY  = "https://buy.stripe.com/aFa14o2gmfTael8flE7N602";  // bytt til yearly subscription link

function wireLinks() {
  document.querySelectorAll('[data-href="demo"]').forEach((a) => {
    a.href = DEMO_URL;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });

  document.querySelectorAll('[data-href="pay-monthly"]').forEach((a) => {
    a.href = PAY_URL_MONTHLY;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });

  document.querySelectorAll('[data-href="pay-yearly"]').forEach((a) => {
    a.href = PAY_URL_YEARLY;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

wireLinks();
setYear();

(function heroVideoInit() {
  const v = document.getElementById("heroVideo");
  const playBtn = document.getElementById("heroPlay");
  const controlsWrap = document.getElementById("heroControls");
  if (!v || !playBtn) return;

  // Guard
  if (v.dataset.init === "1") return;
  v.dataset.init = "1";

  // Kill custom controls (vi bruker native scrub)
  if (controlsWrap) controlsWrap.style.display = "none";

  // Premium defaults
  v.controls = false;        // skrus på når vi faktisk spiller
  v.loop = false;            // hero bør ikke loop'e
  v.autoplay = false;        // click-to-play
  v.muted = true;            // safe default
  v.preload = "auto";

  let loading = false;

  const setOverlay = (mode) => {
    // mode: "play" | "loading" | "hide" | "replay"
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
    playBtn.textContent = (mode === "replay") ? "↻" : "▶";
  };

  const userPlay = async () => {
    if (v.ended) v.currentTime = 0;

    loading = true;
    v.controls = false;
    setOverlay("loading");

    try {
      await v.play();
      // overlay skjules på "playing"
    } catch (e) {
      loading = false;
      setOverlay("play");
    }
  };

  // Overlay click -> play
  playBtn.addEventListener("click", userPlay);

  // Klikk på video toggler play/pause (YT feel)
  v.addEventListener("click", () => {
    if (v.paused) userPlay();
    else v.pause();
  });

  // Når vi faktisk spiller: skru på scrub + skjul overlay
  v.addEventListener("playing", () => {
    loading = false;
    v.controls = true;
    setOverlay("hide");
  });

  // Buffer mid-play: vis loading overlay (uten å blurre video)
  v.addEventListener("waiting", () => {
    if (!v.paused) {
      loading = true;
      setOverlay("loading");
    }
  });

  // Når buffering er over og vi spiller igjen: hide overlay
  v.addEventListener("canplay", () => {
    if (!v.paused) {
      loading = false;
      setOverlay("hide");
    }
  });

  // Pause: vis play overlay igjen
  v.addEventListener("pause", () => {
    if (loading) return;
    setOverlay(v.ended ? "replay" : "play");
  });

  // Slutt: la scrub være på, vis replay overlay
  v.addEventListener("ended", () => {
    v.controls = true;
    setOverlay("replay");
  });

  // Pause når offscreen
  const io = new IntersectionObserver((entries) => {
    const ent = entries[0];
    if (!ent) return;
    if (!ent.isIntersecting && !v.paused) v.pause();
  }, { threshold: 0.25 });

  io.observe(v);

  // Initial state
  setOverlay("play");
})();
