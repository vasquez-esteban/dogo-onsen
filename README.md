# REQUERIMIENTOS

- Se necesita pnpm >9.15.1 y Node 22.12.0 (LTS).

Para correr localmente usar `pnpm install` y `pnpm run dev`

**Importante antes de hacer push**

- Correr `pmpm run lint`. Si el resultado da errores, el push puede fallar.
- Correr `pnpm run fmt`. Para formatear código y mantener consistencia.

## Dependencias principales

### - `next`:

Es un **framework** para React que simplifica la creación de aplicaciones web modernas. Next.js incluye muchas funcionalidades listas para usar, como renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG) y más, lo que facilita crear aplicaciones completas, tanto de frontend como backend.

### - `tailwind`:

Es un **framework de CSS** que permite escribir estilos de manera más rápida y modular. En lugar de crear clases CSS desde cero, Tailwind permite diseñar rápidamente la interfaz de usuario sin necesidad de escribir CSS detallado.

### - `Shadcn`:

Es una **librería de componentes** para React que ofrece una colección de componentes de interfaz de usuario listos para usar, como calendarios, botones, modales, entre otros. Su objetivo es facilitar la creación de interfaces consistentes y reutilizables, sin necesidad de construir estos componentes desde cero. Además, es altamente personalizable y se integra fácilmente con Tailwind CSS.

### - `eslint` & `prettier`:

- **`eslint`**: Es una herramienta que ayuda a encontrar errores en código TypeScript y asegura las buenas prácticas.
- **`prettier`**: Es un formateador de código que asegura que el código siga un estilo consistente, lo que hace que sea más fácil de leer y mantener.

## Base de datos

### - `supabase (SQL)`:

**Supabase** es una backend as a service **SQL** (PostgreSQL). Ofrece bases de datos, autenticación, almacenamiento y funciones en tiempo real.

# ELICITACIÓN

## Enunciado

Dogo Onsen es uno de los balnearios más antiguos de Japón, famoso por su hermosa arquitectura pero también por ser la inspiración del Balneario donde se desarrolla la película "El viaje de Chihiro" producida por Studio Ghibli.

Dentro de este Balneario los espíritus del más allá disfrutan de un gran banquete, se relajan en las cálidas aguas termales del lugar y hasta pueden pedir el servicio extra de bañarse con jabones especiales.

Cómo desarrollador web es tu misión replicar un servicio de hotelería para este famoso balneario. Para los dueños del balneario es necesario poder manejar el inventario de los productos del lugar, asignar los baños y asignar la respectiva limpieza en estos. Para las almas del más allá que visitan el lugar es una prioridad poder reservar un lugar de baño con las condiciones óptimas para ellos, para así vivir la mejor de las experiencias.

El proceso de Elicitación está en el documento Requisitos.docx. Incluye link al diseño.

# Fases de Desarrollo:

### Front

- Actualmente en versión inicial.
- Faltan detalles de UI, lógicas de validación, enrutamiento y formularios.

### Back

- Integrar Backend con Server Actions:
  - Autenticación
  - Base de datos

# RECURSOS

### Link de Producción

[Link Dogo Onsen](https://dogo-onsen.vercel.app/)

### Drive

[Link de Drive](https://drive.google.com/drive/folders/1cESwxwmal_bX_WRkxD5H4oVLPwAX0utH?usp=drive_link)

### Figma

[Link de Figma](https://www.figma.com/design/SpvcNni6VqLz8TlPPqKX6N/Dogo-Onsen-Mockups?m=auto&t=11pQd1QHvepSuTXR-6)
