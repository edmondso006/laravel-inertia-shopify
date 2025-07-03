import { AppProvider } from '@shopify/polaris';
// import {Provider, Loading} from '@shopify/app-bridge-react';

import translations from '@shopify/polaris/locales/en.json';

export default function PolarisProviderWrapper({ children }) {
  // const config = {
  //   apiKey: import.meta.env.VITE_SHOPIFY_API_KEY,
  //   host: new URLSearchParams(window.location.search).get('host'),
  //   forceRedirect: true,
  // };

  return (
    <AppProvider i18n={translations}>
      {/* <AppBridgeProvider config={config}> */}
        {children}
      {/* </AppBridgeProvider> */}
    </AppProvider>
  );
}