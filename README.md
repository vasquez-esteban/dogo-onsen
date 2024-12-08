# REQUERIMIENTOS

- Se necesita pnpm 9.15.0 y Node 22.12.0 (LTS).

Para correr localmente usar `pnpm install` y `pnpm run dev`

## Dependencias principales

### - `next`:

es un **framework** para react que simplifica la creación de aplicaciones web modernas. next.js incluye muchas funcionalidades listas para usar, como renderizado del lado del servidor (ssr), generación de sitios estáticos (ssg) y más, lo que facilita crear aplicaciones completas, tanto de frontend como backend.

### - `tailwind`:

Es un **framework de CSS** que permite escribir estilos de manera más rápida y modular. En lugar de crear clases CSS desde cero, puedes usar clases predefinidas de Tailwind para diseñar rápidamente tu interfaz de usuario sin necesidad de escribir CSS detallado.

### - `Shadcn`:

Es una **librería de componentes** para React que ofrece una colección de componentes de interfaz de usuario listos para usar, como calendarios, botones, modales, entre otros. Su objetivo es facilitar la creación de interfaces consistentes y reutilizables, sin necesidad de construir estos componentes desde cero. Además, es altamente personalizable y se integra fácilmente con Tailwind CSS.

### - `eslint` & `prettier`:

- **`eslint`**: Es una herramienta que ayuda a encontrar errores en tu código JavaScript y asegura que sigas buenas prácticas.
- **`prettier`**: Es un formateador de código que asegura que todo tu código siga un estilo consistente, lo que hace que sea más fácil de leer y mantener.

## Base de datos (Escoger una)

### - `firebase (NoSQL)`:

**Firebase** es una plataforma de desarrollo backend de Google que ofrece bases de datos **NoSQL** en tiempo real, autenticación, almacenamiento y más. Ideal para aplicaciones que necesitan escalabilidad rápida y fácil integración con servicios de Google.

### - `supabase (SQL)`:

**Supabase** es una alternativa a Firebase basada en **SQL** (PostgreSQL). Ofrece bases de datos, autenticación, almacenamiento y funciones en tiempo real. Es una opción ideal si prefieres trabajar con bases de datos relacionales y un enfoque de código abierto.

# ELICITACIÓN

## Enunciado

Dogo Onsen es uno de los balnearios más antiguos de Japón, famoso por su hermosa arquitectura pero también por ser la inspiración del Balneario donde se desarrolla la película "El viaje de Chihiro" producida por Studio Ghibli.

Dentro de este Balneario los espíritus del más allá disfrutan de un gran banquete, se relajan en las cálidas aguas termales del lugar y hasta pueden pedir el servicio extra de bañarse con jabones especiales.

Cómo desarrollador web es tu misión replicar un servicio de hotelería para este famoso balneario. Para los dueños del balneario es necesario poder manejar el inventario de los productos del lugar, asignar los baños y asignar la respectiva limpieza en estos. Para las almas del más allá que visitan el lugar es una prioridad poder reservar un lugar de baño con las condiciones óptimas para ellos, para así vivir la mejor de las experiencias.

El proceso de Elicitación está en el documento Requisitos.docx. Incluye link al diseño.

# Fases de Desarrollo:

### Front

- Crear componentes reutilizables:
    - Botones
    - Layouts
- Crear vistas estáticas
- Crear vistas dinámicas
- Validar datos
- Extraer datos en JSON

### Back

- Integrar Backend con Server Actions:
    - Autenticación
    - Base de datos

# RECURSOS

### Drive

[Link de Drive](https://drive.google.com/drive/folders/1cESwxwmal_bX_WRkxD5H4oVLPwAX0utH?usp=drive_link)

### Figma

[Link de Figma](https://www.figma.com/design/SpvcNni6VqLz8TlPPqKX6N/Dogo-Onsen-Mockups?m=auto&t=11pQd1QHvepSuTXR-6)
