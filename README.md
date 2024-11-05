# Requerimientos

---

- Se necesita pnpm 9.4.0 o mayor y Node 22 o mayor.

Para correr en local `pnpm install` y `pnpm run dev`

## Dependencias de Desarrollo

---

- `next`: The React framework for production - it makes building static and dynamic React.js applications a breeze.
- `react` and `react-dom`: JavaScript library for building user interfaces.
- `@types/node`, `@types/react`, and `@types/react-dom`: TypeScript definitions for Node.js, React, and ReactDOM.
- `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`: TypeScript ESLint plugin and parser.
- `autoprefixer`: A tool to parse CSS and add vendor prefixes to CSS rules.
- `cssnano`: A modular minifier, built on top of the PostCSS ecosystem.
- `eslint` and `eslint-config-next`: ESLint tooling including the Next.js ESLint configuration.
- `eslint-config-prettier`, `eslint-plugin-import-helpers`, `eslint-plugin-prettier`, and `eslint-plugin-tailwindcss`: ESLint plugins for various linting enhancements.
- `postcss`: A tool for transforming styles with JavaScript plugins.
- `prettier-plugin-tailwindcss`: Prettier plugin for formatting Tailwind CSS classes.
- `tailwindcss`: A utility-first CSS framework for rapidly building custom designs.
- `typescript`: A typed superset of JavaScript that compiles to plain JavaScript.

# DOGO ONSEN - DESARROLLO WEB

---

Dogo Onsen es uno de los balnearios más antiguos de Japón, famoso por su hermosa arquitectura pero también por ser la inspiración del Balneario donde se desarrolla la película "El viaje de Chihiro" producida por Studio Ghibli.

Dentro de este Balneario los espíritus del más allá disfrutan de un gran banquete, se relajan en las cálidas aguas termales del lugar y hasta pueden pedir el servicio extra de bañarse con jabones especiales.

Cómo desarrollador web es tu misión replicar un servicio de hotelería para este famoso balneario. Para los dueños del balneario es necesario poder manejar el inventario de los productos del lugar, asignar los baños y asignar la respectiva limpieza en estos. Para las almas del más allá que visitan el lugar es una prioridad poder reservar un lugar de baño con las condiciones óptimas para ellos, para así vivir la mejor de las experiencias.

- [Página de REFERENCIA](https://dogo.jp/en/honkan.php)

## Arquitectura

---

- NEXT
- React
- Typescript
- Tailwind
- Shadcn
- Node
- Se propone Supabase para el backend

## Insumos para el levantamiento de requisitos

---

- Diseño en Figma
- Funcionalidades principales en documento

- MER
- Casos de uso

## Entidades

---

- Usuario -> Dueño o Cliente (Clientes se dividen por tamaños para asignar el baño adecuado)
- Producto (Cantidad...)
- Baño (Tamaño, Encargado de limpieza _No vamos a hacer una entidad para esto, solo será una String_...)

# Módulos

---

### Módulo de autenticación

Para distinguir entre dueños o clientes

### Módulo de Inventario & Baños -> SI ES DUEÑO en una página Interna

CREATE producto:

- Nombre del producto
- Cantidad disponible
- Tipo (jabón, toalla, sales)

READ producto:

- Ver lista de productos:
- Actualizar cantidad de productos
- Eliminar productos

UPDATE Y DELETE producto

CRUD baño:

- Nombre del baño
- Estado (disponible, ocupado, en limpieza)

### Módulo de Reserva -> SI ES CLIENTE en una Interna Distinta

- Integración de un Calendario para reservas

- Seleccionar Baño (Se filtran automáticamente según los atributos del cliente)
- De-Seleccionar Baño

# Fases de Desarrollo:

---

### Requisitos y Diseño

- Definir la interfaz de usuario
- Establecer el sistema de diseño
- Crear componentes reutilizables

### Front

- Implementar UI con React + Next.js
- Estilizar con Tailwind + Shadcn
- Crear componentes para:
  - Autenticación (UI sin funcionalidad)
  - Dashboard de inventario
  - Sistema de reservas
  - Gestión de baños

### Back

- Integrar Supabase:
  - Autenticación
  - Base de datos
  - Tiempo real para reservas
- Implementar Server Actions

# RECURSOS

---

### Drive

[Link de Drive](https://drive.google.com/drive/folders/1cESwxwmal_bX_WRkxD5H4oVLPwAX0utH?usp=drive_link)

- Llenar documento de Trabajo Colaborativo

### Figma

[Link de Figma](https://www.figma.com/design/1uerAjU30RsXJbv7aATgSc/Dog-Onsen?m=auto&t=eXdJYZe6orXAlhlF-1)
