# ENTREGA FINAL - DOGO ONSEN

- Se necesita pnpm >9.15.1 y Node 22.12.0 (LTS).

Para correr localmente usar `pnpm install` y `pnpm run dev`

Se necesitan también las credenciales de Supabase en un archivo `.env.local` que podemos compartir si es necesario (Pero no queremos porque nos revientan la API)

Por el momento se puede visitar la página en [Dogo Onsen](https://dogo-onsen.vercel.app)

**Importante antes de hacer push**

- Correr `pnpm run lint`. Si el resultado da errores, el push puede fallar.
- Correr `pnpm run fmt`. Para formatear código y mantener consistencia.

## Dependencias Principales

### - `next`:

Es un **framework** para React que simplifica la creación de aplicaciones web modernas. Next.js incluye muchas funcionalidades listas para usar, como renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG) y más, lo que facilita crear aplicaciones completas, tanto de frontend como backend.

### - `tailwind`:

Es un **framework de CSS** que permite escribir estilos de manera más rápida y modular. En lugar de crear clases CSS desde cero, Tailwind permite diseñar rápidamente la interfaz de usuario sin necesidad de escribir CSS detallado.

### - `Shadcn`:

Es una **librería de componentes** para React que ofrece una colección de componentes de interfaz de usuario listos para usar, como calendarios, botones, modales, entre otros. Su objetivo es facilitar la creación de interfaces consistentes y reutilizables, sin necesidad de construir estos componentes desde cero. Además, es altamente personalizable y se integra fácilmente con Tailwind CSS.

### - `eslint` & `prettier`:

- **`eslint`**: Es una herramienta que ayuda a encontrar errores en código TypeScript y asegura las buenas prácticas.
- **`prettier`**: Es un formateador de código que asegura que el código siga un estilo consistente, lo que hace que sea más fácil de leer y mantener.

## Base De Datos

### - `supabase (SQL)`:

**Supabase** es una backend as a service **SQL** (PostgreSQL). Aquí tenemos nuestros proveedores de Autenticación, Tablas Relacionales y funciones rpc.
<<<<<<< Updated upstream
=======

---

# Supabase API Endpoints (Cada endpoint se puede mapear a una server action o a un handler del evento)

## Endpoints Disponibles

- **Cancelar reserva** (`cancelar_reserva(id_reserva INT)`)  
  Cancela una reserva si faltan más de 24 horas y restaura productos al inventario.
- **Crear usuario** (`crear_usuario_y_rol()`)  
  Crea un usuario en la tabla `usuario` y asigna el rol de "Cliente" automáticamente.
- **Verificar si es Admin** (`es_admin()`)  
  Retorna `TRUE` si el usuario autenticado es administrador.
- **Ver baños disponibles** (`ver_baños_disponibles(fecha DATE, hora TIME)`)  
  Devuelve una lista de baños no reservados y disponibles.
- **Ver reservas (Admin)** (`ver_reservas_admin()`)  
  Permite a los administradores visualizar todas las reservas.
- **Actualizar cantidad de un producto** (`actualizar_cantidad_producto(id_producto INT, cantidad INT)`)  
  Modifica la cantidad de un producto en el inventario.
- **Crear reserva** (`crear_reserva(id_bano INT, fecha DATE, hora TIME, cantidad_espiritu INT, jabon_especial BOOLEAN)`)  
  Verifica disponibilidad y stock antes de registrar la reserva.
- **Actualizar baño** (`actualizar_baño(id_bano INT, nombre TEXT, descripcion TEXT, capacidad INT, encargado TEXT, precio NUMERIC, jabones INT, toallas INT)`)  
  Permite actualizar detalles de un baño si no está ocupado.
- **Alerta de stock bajo** (`alerta_producto_bajo()`)  
  Retorna productos con stock menor a 10 unidades.
- **Marcar baño en mantenimiento** (`mantenimiento_baño(id_bano INT, mantenimiento BOOLEAN)`)  
  Cambia el estado de un baño entre "Disponible" y "Ocupado".

---
>>>>>>> Stashed changes

# ELICITACIÓN

## Enunciado

Dogo Onsen es uno de los balnearios más antiguos de Japón, famoso por su hermosa arquitectura pero también por ser la inspiración del Balneario donde se desarrolla la película "El viaje de Chihiro" producida por Studio Ghibli.

Dentro de este Balneario los espíritus del más allá disfrutan de un gran banquete, se relajan en las cálidas aguas termales del lugar y hasta pueden pedir el servicio extra de bañarse con jabones especiales.

Cómo desarrollador web es tu misión replicar un servicio de hotelería para este famoso balneario. Para los dueños del balneario es necesario poder manejar el inventario de los productos del lugar, asignar los baños y asignar la respectiva limpieza en estos. Para las almas del más allá que visitan el lugar es una prioridad poder reservar un lugar de baño con las condiciones óptimas para ellos, para así vivir la mejor de las experiencias.

El proceso de Elicitación está en el documento Requisitos.docx. Incluye link al diseño.

# RECURSOS

### Drive

[Link de Drive](https://drive.google.com/drive/folders/1cESwxwmal_bX_WRkxD5H4oVLPwAX0utH?usp=drive_link)

### Figma

[Link de Figma](https://www.figma.com/design/SpvcNni6VqLz8TlPPqKX6N/Dogo-Onsen-Mockups?m=auto&t=11pQd1QHvepSuTXR-6)

# Conclusiones

Se consigue una gran fidelidad al proceso de elicitación de Requisitos en cuanto a funcionalidad y al diseño en Figma. Podríamos agregar mejoras de UX, UI y optimización como lo pueden ser

- Suspense para mostrar pantallas de carga mientras se navega entre rutas
- View Transitions para mostrar una animación suave de transición entre páginas
