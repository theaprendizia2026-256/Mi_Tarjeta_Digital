# Guía de Contribución y Desarrollo

¡Gracias por tu interés en contribuir a **Mi Tarjeta Digital**! Este repositorio se rige bajo el principio de **cero deuda técnica y máximo rendimiento**.

## 📐 Principios de Ingeniería

1. **Vanilla Primero:** No se admiten frameworks pesados (React, Vue, Tailwind, etc.). Todo el código debe ser HTML5, CSS3 y JS Vanilla puro.
2. **Cero Dependencias Innecesarias:** Priorizar SVG nativos sobre recursos de imagen pesados.
3. **Cero Deuda Técnica:** Todo componente o línea de código que no cumpla una función crítica demostrable debe ser eliminado.
4. **Optimización Móvil:** Todas las interfaces deben probarse en Viewport móvil real (`100dvh`) y en orientación Landscape.

## 🚀 Flujo de Trabajo

1. Haz un **Fork** de este repositorio.
2. Crea una rama para tu característica: `git checkout -b feature/nueva-funcionalidad`.
3. Valida que el `ServiceWorker.js` y el `manifest.json` mantengan una puntuación de 100% en auditorías de Google Lighthouse.
4. Realiza tus cambios y haz un Commit claro: `git commit -m "feat: añade nueva optimización de enlaces"`.
5. Envía un **Pull Request** detallado.
