import clsx from "clsx";
import React from "react";

export default function Wrapper({
  children,
  flex,
}: {
  children: React.ReactNode;
  flex?: boolean;
}) {
  return (
    <div
      className={clsx({
        "mx-auto max-w-screen-xl px-10": true,
        "flex gap-4": flex,
      })}
    >
      {children}
    </div>
  );
}
