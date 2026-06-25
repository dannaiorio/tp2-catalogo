# Catálogo de Películas y Series - API (TP2)

API REST de un catálogo de películas y series. Los usuarios pueden registrarse, iniciar sesión y gestionar sus favoritos. Cuenta con un sistema de roles (admin y usuario común), autenticación con JWT, estadísticas del catálogo e importación/exportación de datos en CSV.

## Paquetes Utilizados (Dependencias)

El proyecto utiliza las siguientes dependencias clave:
*   **express** (v5.2.1): Framework web para Node.js para estructurar las rutas y APIs.
*   **sequelize** (v6.37.8): ORM para Node.js, compatible con MySQL, Postgres, SQLite y más.
*   **mysql2** (v3.22.4): Driver para la conexión con bases de datos MySQL.
*   **bcrypt** (v6.0.0): Librería para encriptar contraseñas de usuarios.
*   **jsonwebtoken** (v9.0.3): Para la generación y validación de tokens de autenticación (JWT).
*   **cookie-parser** (v1.4.7): Middleware para parsear y gestionar cookies.
*   **cors** (v2.8.6): Para permitir y configurar peticiones de origen cruzado (CORS).
*   **dotenv** (v17.4.2): Para cargar variables de entorno desde un archivo `.env`.
*   **morgan** (v1.11.0): Middleware registrador de peticiones HTTP en consola.

---

## Instalación y Configuración


### 1. Clonar el repositorio e instalar dependencias
Entra a la carpeta del proyecto y ejecuta:

```bash
git clone https://github.com/dannaiorio/tp2-catalogo
```

```bash
cd tp2-catalogo
```


```bash
npm install
```

### 2. Configurar las variables de entorno
Crea un archivo `.env` en la raíz del proyecto (puedes basarte en los siguientes parámetros):
```env
DB_HOST="localhost"
DB_PORT="3306"
DB_USER="tu_usuario_mysql"
DB_PASSWORD="tu_password_mysql"
DB_NAME="tp2_catalogo"
SERVER_PORT="5000"
JWT_SECRET="tu_clave_secreta_jwt"
```

> Crear primero la base de datos vacía en MySQL con el nombre que definas en `DB_NAME` antes de correr el servidor. Sequelize se encargará de sincronizar y crear las tablas automáticamente (`alter: true`).

### 3. Iniciar el servidor
*   **Modo desarrollo (con reinicio automático al cambiar archivos):**
    ```bash
    npm run dev
    ```
*   **Modo producción:**
    ```bash
    npm start
    ```

---

## Documentación de la API

### Autenticación y Usuarios (`/usuarios`)
*   `POST /usuarios/login`: Inicia sesión del usuario y genera la cookie con el token JWT.
*   `POST /usuarios/`: Registra un nuevo usuario en el sistema.
*   `POST /usuarios/logout`: Cierra la sesión activa borrando la cookie.
*   `GET /usuarios/`: Obtiene la lista de todos los usuarios registrados *(Requiere autenticación)*.
*   `GET /usuarios/me`: Obtiene los datos del perfil del usuario actualmente autenticado *(Requiere autenticación)*.
*   `GET /usuarios/:id`: Obtiene la información de un usuario específico por su ID *(Requiere autenticación)*.
*   `PUT /usuarios/:id`: Actualiza la información de un usuario específico *(Requiere autenticación)*.
*   `DELETE /usuarios/:id`: Elimina un usuario del sistema *(Requiere ser Administrador)*.

### Catálogo (`/catalogos`)
*   `GET /catalogos/`: Lista todos los elementos del catálogo (películas y series). Admite filtros opcionales.
*   `GET /catalogos/top10`: Obtiene el Top 10 de películas/series mejor valoradas.
*   `GET /catalogos/importar`: Importa elementos de catálogo desde un archivo CSV o de una API mockachino.
*   `GET /catalogos/exportar`: Exporta la lista de catálogos en formato CSV *(Requiere ser Administrador)*.
*   `GET /catalogos/:id`: Obtiene el detalle de un elemento por su ID.
*   `POST /catalogos/`: Registra una nueva película o serie *(Requiere ser Administrador)*.
*   `PUT /catalogos/:id`: Modifica un elemento existente por su ID *(Requiere ser Administrador)*.
*   `DELETE /catalogos/:id`: Elimina un elemento por su ID *(Requiere ser Administrador)*.

### Favoritos (`/favoritos`)
*   `GET /favoritos/:usuarioId`: Obtiene la lista de elementos favoritos de un usuario en particular.
*   `POST /favoritos/`: Agrega un elemento del catálogo a la lista de favoritos del usuario autenticado *(Requiere autenticación)*.
*   `DELETE /favoritos/:usuarioId/:catalogoId`: Elimina un elemento específico de la lista de favoritos de un usuario *(Requiere autenticación)*.

### Roles (`/roles`)
*   `GET /roles/`: Lista todos los roles existentes.
*   `GET /roles/:id`: Obtiene los detalles de un rol por su ID.
*   `POST /roles/`: Crea un nuevo rol en el sistema *(Requiere ser Administrador)*.
*   `PUT /roles/:id`: Actualiza el nombre de un rol específico *(Requiere ser Administrador)*.
*   `DELETE /roles/:id`: Elimina un rol específico *(Requiere ser Administrador)*.

### Estadísticas (`/estadisticas`)
*   `GET /estadisticas/`: Retorna estadísticas generales del sistema, como cantidad de usuarios, películas, favoritos, etc. *(Requiere ser Administrador)*.
*   `GET /estadisticas/exportar`: Exporta estadísticas generales a formato CSV.


### Códigos de Respuesta HTTP

Código	Significado
200  	OK — request exitoso
201 	Created — recurso creado exitosamente
400 	Bad Request — datos inválidos o faltantes
401 	Unauthorized — sin token o token inválido
403	    Forbidden — no tenés permisos de administrador
404	    Not Found — recurso o ruta no encontrada
500 	Internal Server Error — error inesperado del servidor