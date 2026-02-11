import { useEffect } from "react";

/**
 * Custom hook for tracking login-related events.
 */
export const useAnalytics = () => {
  useEffect(() => {
    //trigger page view when the component mounts
    //console.info("Analytics: Login Page Viewed");
  }, []);

  const trackLoginSuccess = () => {
    // callback
    console.info("Analytics: Login Completed");
  };

  return { trackLoginSuccess };
};