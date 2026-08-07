# PROYECTO: Tarjeta Digital (PWA – Progressive Web App) · Mi Tarjeta
**Technical Stack:** Vanilla HTML5 / CSS3 / JavaScript (Vector SVG + CDN FontAwesome)  
**Deployment:** [https://mi-tarjeta.vercel.app/]

## 1. Introducción
Este sistema representa la solución de software de presencia centralizada y networking digital para **Mi Tarjeta**. Se trata de una **Progressive Web App (PWA)** desarrollada bajo una filosofía de ingeniería de interfaz minimalista, optimizada para consolidar canales de contacto, redes profesionales y un portafolio de acceso rápido en dispositivos móviles.

## 2. Previsualización del Sistema
<div align="center">
  <img src="https://res.cloudinary.com/deqk2tmer/image/upload/v1786105933/Screenshot_20260807_083303_com.brave.browser_mfiakx.jpg" width="250" alt="Captura de Pantalla Mi Tarjeta Digital">
  <p><i>Interfaz ergonómica adaptativa con hub de redes, código QR vectorial e instalación PWA nativa.</i></p>
</div>

## 3. Problemática
El intercambio de información de contacto profesional en entornos físicos y digitales suele sufrir de fricción y dispersión. Este proyecto resuelve la necesidad de una plataforma centralizada que sea:
* **Accesible:** Sin intermediación de tiendas de aplicaciones (App Store / Play Store).
* **Persistente:** Consultable con o sin conexión a internet mediante almacenamiento en caché de App Shell.
* **Interactiva:** Integración directa a canales oficiales (Instagram, Telegram, Correo Outlook, Sitio Web Vercel) en un solo toque.

## 4. Requerimientos del Sistema

### 4.1 Requerimientos Funcionales (RF)
* **RF-1:** Enlaces directos a canales oficiales (Instagram, Telegram, Correo Outlook y Web Vercel).
* **RF-2:** Generación e integración de código QR nativo en formato **SVG vectorial puro** (`viewBox 0 0 31 31`), eliminando peticiones HTTP externas para el renderizado del QR.
* **RF-3:** Módulo de galería responsiva con grilla de 2 columnas y carga diferida (`loading="lazy"`).
* **RF-4:** Implementación de Service Worker (`ServiceWorker.js`) para caché de App Shell y disponibilidad offline.
* **RF-5:** Adaptabilidad ergonómica para visualización en modo horizontal/landscape (`@media (orientation: landscape)`).

### 4.2 Requerimientos No Funcionales (RNF)
* **RNF-1 (Rendimiento):** Tiempo de carga crítico ultrarrápido mediante código Vanilla puro (cero frameworks) y assets en CDN Cloudinary.
* **RNF-2 (Ergonomía Adaptativa):** Layout híbrido usando unidades dinámicas del Viewport (`100dvh`) con *scroll* vertical fluido.
* **RNF-3 (Instalabilidad PWA):** Cumplimiento total del estándar W3C PWA (`manifest.json`) para instalación nativa en pantalla de inicio bajo la marca *"Mi_Tarjeta"*.

## 5. Casos de Uso
* **Escenario A (Networking Presencial):** El contacto escanea el QR en un encuentro presencial y guarda la tarjeta en su teléfono como app nativa.
* **Escenario B (Consulta Sin Red):** El usuario accede a los datos de contacto o enlaces directos en zonas con baja cobertura mediante la caché guardada.
* **Escenario C (Redirección Directa):** Un usuario abre la PWA e inicia un chat directo en Telegram o lanza un correo a Outlook con un solo toque.

## 6. Estructura de Ingeniería
* **`index.html`**: Estructura semántica, inyección de QR vectorial SVG y registro del Service Worker.
* **`style.css`**: Motor gráfico responsivo en CSS3 puro con soporte `100dvh` y reglas para modo landscape.
* **`ServiceWorker.js`**: Gestor de caché App Shell con estrategia *Cache First* para recursos locales.
* **`manifest.json`**: Metadatos PWA y configuración de iconos adaptativos (`192x192` y `512x512 maskable`).
* **`CHANGELOG.md`**: Historial de versiones y control de cambios del software.
* **`CONTRIBUTING.md`**: Reglas de desarrollo e ingeniería del proyecto.
* **`LICENSE`**: Licencia de código abierto MIT.

---
*Documentación técnica de cierre para la versión estable 1.0.0.*
