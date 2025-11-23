import { useState, useEffect } from "react";
import styles from "./CustomImage.module.scss";

interface CustomImageProps {
  src: any;
  alt?: string;
  fallbackSrc?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  onClick?: (e: any) => void;
}

const CustomImage = ({
  src,
  alt = "image",
  fallbackSrc = "/assets/logo.svg",
  className = "",
  width = "100%",
  height = "auto",
  objectFit = "cover",
  onClick,
}: CustomImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  // keep imgSrc updated when parent changes src
  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={`${styles.image} ${className}`}
      style={{ width, height, objectFit }}
      onClick={onClick}
    />
  );
};

export default CustomImage;
