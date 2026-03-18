import { useEffect, useRef, memo, useState } from "react";

const VideoPlayer = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Defer video loading until browser is idle to prioritize LCP
    const loadVideo = () => {
      setLoaded(true);
    };

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(loadVideo, { timeout: 3000 });
      return () => cancelIdleCallback(id);
    } else {
      const timer = setTimeout(loadVideo, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const video = videoRef.current;
    if (!video) return;

    const src = "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8";

    // Dynamic import to avoid loading 100KB+ HLS.js on initial bundle
    import("hls.js").then(({ default: Hls }) => {
      if (Hls.isSupported()) {
        const hls = new Hls({ enableWorker: true });
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {});
        });
        // Store cleanup ref
        (video as any).__hls = hls;
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        video.addEventListener("loadedmetadata", () => {
          video.play().catch(() => {});
        });
      }
    });

    return () => {
      const hls = (video as any).__hls;
      if (hls) hls.destroy();
    };
  }, [loaded]);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      width={1920}
      height={1080}
    />
  );
});

VideoPlayer.displayName = "VideoPlayer";
export default VideoPlayer;
