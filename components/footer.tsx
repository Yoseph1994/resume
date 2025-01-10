import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {year} Yoseph. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Code your imagination:</span> Turning
        ideas into impactful solutions with creativity and precision.
      </p>
    </footer>
  );
}
