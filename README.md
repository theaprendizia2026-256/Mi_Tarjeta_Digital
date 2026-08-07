# PROYECTO: Tarjeta Digital (PWA – Progressive Web App) · Mi Galería
**Technical Stack:** Vanilla HTML5 / CSS3 / JavaScript (Vector SVG + CDN FontAwesome)  
**Deployment:** [https://mi-galeria2026.vercel.app/]

## 1. Introducción
Este sistema representa una solución de software orientada a la exhibición y presencia digital comercial para **Mi Galería**. Se trata de una **Progressive Web App (PWA)** desarrollada bajo una filosofía de arquitectura minimalista y de alta eficiencia, optimizada para ofrecer un portafolio interactivo, ergonómico y de alto rendimiento en dispositivos móviles.

## 2. Previsualización del Sistema
<div align="center">
  <img src="https://res.cloudinary.com/deqk2tmer/image/upload/v1785636855/logo_nv7kbl.png" width="200" alt="Logo Mi Galería">
  <p><i>Interfaz ergonómica adaptativa con portafolio integrado, QR vectorial e instalación PWA nativa.</i></p>
</div>

## 3. Problemática
La exhibición DIGITAL requiere canales de contacto inmediatos y de alta fidelidad visual sin fricción para clientes. Este proyecto resuelve la necesidad de un portafolio centralizado que sea:
* **Accesible:** Sin intermediación de tiendas de aplicaciones (App Store / Play Store).
* **Persistente:** Consultable con o sin conexión a internet mediante caché de App Shell.
* **Interactiva:** Integración directa con canales de contacto (Instagram, Telegram, Correo Outlook) y exhibición de obras.

## 4. Requerimientos del Sistema

### 4.1 Requerimientos Funcionales (RF)
* **RF-1:** Enlaces directos a canales de contacto oficiales (Instagram, Telegram, Mailto).
* **RF-2:** Generación e integración de código QR nativo en formato **SVG vectorial puro** (`viewBox 0 0 31 31`), eliminando peticiones HTTP externas para el renderizado del QR.
* **RF-3:** Módulo de galería visual responsiva en grilla de 2 columnas con carga diferida (`loading="lazy"`).
* **RF-4:** Implementación de Service Worker (`ServiceWorker.js`) para caché de App Shell e hiper-velocidad de carga.
* **RF-5:** Control dinámico de layout orientado a dispositivos en modo horizontal/landscape (`@media (orientation: landscape)`).

### 4.2 Requerimientos No Funcionales (RNF)
* **RNF-1 (Rendimiento):** Tiempo de carga crítico ultrarrápido mediante código Vanilla puro (cero frameworks) y assets optimizados en Cloudinary CDN.
* **RNF-2 (Ergonomía Adaptativa):** Layout híbrido usando unidades dinámicas del Viewport (`100dvh`) con *scroll* vertical interno.
* **RNF-3 (Instalabilidad PWA):** Cumplimiento del estándar W3C PWA (`manifest.json`) para instalación nativa en pantalla de inicio con la marca *"Mi_Tarjeta"*.

## 5. Casos de Uso
* **Escenario A (Exhibición Presencial):** El cliente/coleccionista escanea el QR en una exposición y guarda la tarjeta en su teléfono como app nativa.
* **Escenario B (Consulta Sin Red):** El usuario repasa los canales de contacto o la estructura de la tarjeta en zonas con baja cobertura mediante la caché guardada.
* **Escenario C (Contacto Directo):** Un usuario accede al sitio y lanza una conversación directa por Telegram o Instagram en un solo toque.

## 6. Estructura de Ingeniería
* **`index.html`**: Estructura semántica, inyección de QR vectorial SVG y registro del Service Worker.
* **`style.css`**: Motor gráfico con tipografías *serif* tradicionales, soporte para layout `100dvh` y reglas adaptativas para modo landscape.
* **`ServiceWorker.js`**: Gestor de caché App Shell con estrategia *Cache First* para recursos locales.
* **`manifest.json`**: Metadatos PWA y configuración de iconos adaptativos (`192x192` y `512x512 maskable`).
* **`CHANGELOG.md`**: Historial de versiones y control de cambios del software.
* **`CONTRIBUTING.md`**: Reglas de desarrollo e ingeniería del proyecto.
* **`LICENSE`**: Licencia de código abierto MIT.

---
*Documentación técnica de cierre para la versión estable 1.0.0.*
