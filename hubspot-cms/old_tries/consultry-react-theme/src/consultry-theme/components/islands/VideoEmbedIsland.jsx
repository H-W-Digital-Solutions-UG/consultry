import { useState } from 'react';
import styles from '../../styles/videoEmbedIsland.module.css';

function parseVideoUrl(url) {
  if (!url) return null;

  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
  );
  if (youtubeMatch) {
    return { type: 'youtube', id: youtubeMatch[1] };
  }

  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return { type: 'vimeo', id: vimeoMatch[1] };
  }

  return { type: 'direct', id: url };
}

function getEmbedUrl(videoUrl) {
  const parsed = parseVideoUrl(videoUrl);
  if (!parsed) return null;

  if (parsed.type === 'youtube') {
    return `https://www.youtube.com/embed/${parsed.id}?autoplay=1&rel=0`;
  } else if (parsed.type === 'vimeo') {
    return `https://player.vimeo.com/video/${parsed.id}?autoplay=1`;
  }
  return parsed.id;
}

export default function VideoEmbedIsland({ fieldValues }) {
  const { video_url, poster_image } = fieldValues;
  const [isPlaying, setIsPlaying] = useState(false);
  const posterSrc = poster_image?.src || poster_image;
  const embedUrl = isPlaying ? getEmbedUrl(video_url) : null;

  return (
    <div className={styles.wrapper}>
      {!isPlaying && posterSrc && (
        <div
          className={styles.posterContainer}
          style={{ backgroundImage: `url(${posterSrc})` }}
        >
          <button
            className={styles.playButton}
            onClick={() => setIsPlaying(true)}
            aria-label="Video abspielen"
            type="button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}

      {!isPlaying && !posterSrc && (
        <button
          className={styles.fallbackPlay}
          onClick={() => setIsPlaying(true)}
          aria-label="Video abspielen"
          type="button"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span>Video abspielen</span>
        </button>
      )}

      {isPlaying && embedUrl && (
        <iframe
          className={styles.iframe}
          src={embedUrl}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
