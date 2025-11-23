import { useRef } from "react";
import styles from "./CustomImageUploader.module.scss";

interface ImageUploaderProps {
  label?: string;
  value?: string | null; // base64 or URL
  onChange: (file: File | null) => void;
}

const CustomImageUploader = ({
  label,
  value,
  onChange,
}: ImageUploaderProps) => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleSelect = () => {
    fileRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file);
  };

  return (
    <div className={styles.wrapper}>
      {label && <p className={styles.label}>{label}</p>}

      <div className={styles.uploadBox} onClick={handleSelect}>
        {value ? (
          <img src={value} alt="Uploaded" className={styles.preview} />
        ) : (
          <span className={styles.uploadText}>Click to upload</span>
        )}
      </div>

      <input
        type="file"
        ref={fileRef}
        onChange={handleFileChange}
        accept="image/*"
        className={styles.hiddenInput}
      />
    </div>
  );
};

export default CustomImageUploader;
