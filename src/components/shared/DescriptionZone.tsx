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
        [`flex flex-col gap-4 rounded-md p-2 items-start z-50 ${className} ${standardFont.className}`]:
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
