import Link from "next/link";
import React from "react";

export default function NavItem({
  icon,
  pathName,
  title,
  currentPath,
}: {
  pathName: string;
  icon: React.ReactNode;
  title: string;
  currentPath: string;
}) {
  return (
    <Link
      className={`flex items-center gap-2 hover:text-secondary/80 duration-200 ${
        pathName === currentPath && "text-secondary"
      }`}
      href={pathName}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}
