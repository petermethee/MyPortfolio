import { standardFont } from "@/app/layout";
import { clsx } from "clsx";
import { ReactNode } from "react";
import styles from "./DescriptionZone.module.css";

export default function DescriptionZone({
  text,
  icon,
  title,
  className,
  dashed,
  scaleEffect,
}: {
  text?: string | JSX.Element;
  icon: ReactNode;
  title: string;
  className?: string;
  dashed?: boolean;
  scaleEffect?: boolean;
}) {
  return (
    <div
      className={clsx({
        [`z-50 flex flex-col items-start gap-4 rounded-md p-2 ${className} ${standardFont.className}`]:
          true,
        [styles.dashed]: dashed,
        [styles.scaleEffect]: scaleEffect,
      })}
    >
      <div className={`${styles.title} text-sm`}>
        {icon}
        {title}
      </div>
      {text}
    </div>
  );
}
