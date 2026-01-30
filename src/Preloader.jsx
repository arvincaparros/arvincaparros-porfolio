import React, { useEffect, useState } from "react";

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Always hide after 1.5 seconds
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return <div id="preloader"></div>;
}

export default Preloader;
