# Historial de Cambios (Changelog) - Mi_Tarjeta PWA

Todas las modificaciones notables de este proyecto serán documentadas en este archivo.

## [1.0.0] - 2026-08-07

### Añadido
* **Arquitectura Base:** Implementación de marcado HTML5 semántico y motor gráfico en CSS3 Vanilla.
* **PWA Engine:** Integración de `manifest.json` con soporte para instalación *standalone* e iconos adaptativos.
* **Service Worker:** Controlador `ServiceWorker.js` configurado con estrategia de caché *Cache-First* para el App Shell (`index.html`, `style.css`, `manifest.json`).
* **QR Vectorial Integrado:** Inyección directa de QR nativo en SVG puro mediante coordenadas de píxeles (`viewBox 0 0 31 31`) para garantía de escaneo sin dependencias externas.
* **Galería Responsiva:** Grilla de exhibición visual para obras con propiedad `loading="lazy"` para optimización de ancho de banda.
* **Soporte Landscape:** Media query dedicada para reajuste ergonómico de elementos en pantallas horizontales o de baja altura (`<= 550px`).
* **Integración CDN:** Conexión de FontAwesome 6.4.0 para iconografía vectorial y Cloudinary para entrega de assets de imagen.
