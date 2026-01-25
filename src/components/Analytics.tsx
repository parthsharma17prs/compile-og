import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Analytics component that loads Google Analytics GA4
 * Configure via VITE_GA4_MEASUREMENT_ID in .env file
 *
 * Example .env:
 * VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
 */
const Analytics = () => {
  const ga4MeasurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;

  useEffect(() => {
    // Only load GA4 if measurement ID is configured
    if (!ga4MeasurementId) {
      console.log('GA4: No measurement ID configured. Set VITE_GA4_MEASUREMENT_ID in .env to enable Google Analytics.');
      return;
    }

    // Check if gtag is already loaded
    if (window.gtag) {
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', ga4MeasurementId, {
      page_path: window.location.pathname,
    });

    return () => {
      // Cleanup is not strictly necessary for analytics scripts
    };
  }, [ga4MeasurementId]);

  return null; // This component doesn't render anything
};

export default Analytics;
