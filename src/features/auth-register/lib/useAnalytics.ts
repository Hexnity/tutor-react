import { useEffect } from "react";

/**
 * Custom hook for tracking registration-related events.
 */
export const useAnalytics = () => {
  useEffect(() => {
    //trigger page view when the component mounts
    //console.info("Analytics: Register Page Viewed");
  }, []);

  const trackRegistrationSuccess = () => {
    // callback
    console.info("Analytics: Registration Completed");
  };

  return { trackRegistrationSuccess };
};