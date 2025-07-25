import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import PolarisProviderWrapper from './Components/PolarisProviderWrapper.jsx'
import '@shopify/polaris/build/esm/styles.css';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(
    
      <PolarisProviderWrapper>
        <App {...props} />
      </PolarisProviderWrapper>)
  },
})