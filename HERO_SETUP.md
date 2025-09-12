# Hero Component Setup Guide

Este archivo contiene las instrucciones para configurar correctamente el componente Hero mejorado de tu portfolio.

## 🖼️ Configuración de Imagen de Perfil

### Opción 1: Agregar tu propia foto
1. Coloca tu foto de perfil en la carpeta `public/` con el nombre `profile.jpg`
2. La imagen se mostrará automáticamente en formato circular con borde dorado
3. Recomendaciones para la imagen:
   - Formato: JPG, PNG o WebP
   - Tamaño mínimo: 400x400px (cuadrada preferiblemente)
   - Buena iluminación y fondo neutro

### Opción 2: Usar una imagen diferente
Si tu imagen tiene otro nombre, edita el componente Hero.astro:
```astro
<ProfileImage
    src="/tu-imagen.jpg"  <!-- Cambia aquí -->
    alt="Tu Nombre - Desarrollador Frontend"
/>
```

## 🔗 Configuración de Redes Sociales

### URLs por defecto (CAMBIAR POR LAS TUYAS):
- **GitHub**: https://github.com/christiancampa
- **LinkedIn**: https://linkedin.com/in/christiancampa
- **WhatsApp**: https://wa.me/1234567890

### Para personalizar las URLs:
Edita el componente Hero.astro en la sección de SocialLinks:
```astro
<SocialLinks
    githubUrl="https://github.com/TU_USUARIO"
    linkedinUrl="https://linkedin.com/in/TU_PERFIL"
    whatsappUrl="https://wa.me/TU_NUMERO"
    class="justify-center lg:justify-start"
/>
```

### Configuración de WhatsApp:
Para el link de WhatsApp, usa el formato: `https://wa.me/NUMERO`
- Ejemplo: `https://wa.me/5355123456` (para Cuba: 53 + número)
- No incluyas espacios, guiones ni símbolos

## 🎨 Personalización del Contenido

### Textos principales:
Edita estos textos en Hero.astro según tu información:

```astro
<h1 class="...">
    Hola, soy <br>
    <span class="...">TU NOMBRE</span>
</h1>

<p class="...">
    <span class="...">Tu Especialidad</span>
    tu descripción profesional.
</p>

<p class="...">
    Tu biografía personal y profesional...
</p>
```

### Botón de Call to Action:
El botón "Ver mis proyectos" apunta a `#proyectos`. Asegúrate de que tengas una sección con este ID en tu página.

## 🎯 Componentes Creados

### Nuevos componentes de redes sociales:
- `src/components/ui/GitHubIcon.astro` - Icono de GitHub
- `src/components/ui/LinkedInIcon.astro` - Icono de LinkedIn  
- `src/components/ui/WhatsAppIcon.astro` - Icono de WhatsApp
- `src/components/ui/SocialLinks.astro` - Contenedor de redes sociales
- `src/components/ui/ProfileImage.astro` - Componente de imagen de perfil

### Características de los iconos:
- ✅ Efectos hover con transiciones suaves
- ✅ Colores distintivos por red social
- ✅ Accesibilidad con aria-labels
- ✅ Enlaces que abren en nueva pestaña
- ✅ Responsivo para todos los dispositivos

## 📱 Diseño Responsivo

El Hero component es completamente responsivo:
- **Desktop**: Imagen a la izquierda, contenido a la derecha
- **Tablet/Mobile**: Imagen arriba, contenido abajo
- **Mobile**: Todo centrado verticalmente

## 🎨 Personalización Visual

### Colores principales:
- Amarillo dorado: `text-yellow-400`, `bg-yellow-400`
- Fondo degradado: `#0f172a` → `#1e293b` → `#334155`
- Texto: Blanco y grises para contraste

### Para cambiar colores:
Modifica las clases de Tailwind CSS en los componentes según tu preferencia de colores.

## ✅ Checklist Final

- [ ] Agregar imagen de perfil (`public/profile.jpg`)
- [ ] Actualizar URLs de redes sociales
- [ ] Personalizar textos y biografía
- [ ] Verificar que el link #proyectos funcione
- [ ] Probar en diferentes dispositivos
- [ ] Verificar que las redes sociales abran correctamente

¡Tu Hero component está listo para impresionar! 🚀