import styles from "./NiceLightCard.module.css";

export default function NiceLightCard({
  lightColor,
  children,
  title,
  icon,
  width,
}: {
  lightColor: string;
  children: React.ReactNode;
  title: string;
  icon: JSX.Element;
  width?: string;
}) {
  return (
    <div
      className={styles.container}
      style={{ "--lightColor": lightColor, width } as any}
    >
      <div className={styles.header}>
        {icon}
        {title && <span className={styles.title}>{title}</span>}
      </div>

      {children}
    </div>
  );
}
