"use client";

import { useEffect } from "react";
import CMS from "decap-cms-app";

export default function AdminPage() {
  useEffect(() => {
    CMS.init();
  }, []);

  return <div id="decap-cms-root" />;
}
