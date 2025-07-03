<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
    <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js"></script>


    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>