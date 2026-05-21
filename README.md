<h1 align="center">🚀 MKI-DELIVERY APP</h1>

<p align="center">
  Plataforma logística moderna para gestión de pedidos, clientes y repartidores.
</p>

<p align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)

</p>

---

# 📌 Descripción

**MKI-DELIVERY** es una plataforma integral de gestión logística enfocada en el sector de delivery y alimentos a domicilio.

El sistema permite la interacción eficiente entre:

- 👤 Clientes
- 🏪 Restaurantes
- 🛵 Repartidores

La plataforma incluye funcionalidades modernas como:

- ✅ Gestión de pedidos
- ✅ Seguimiento en tiempo real
- ✅ Autenticación basada en roles (RBAC)
- ✅ Protección de rutas privadas
- ✅ Persistencia de sesión
- ✅ Arquitectura escalable
- ✅ Diseño responsive

---

# ✨ Features

## 👤 Cliente

- Visualización de pedidos
- Seguimiento de entrega
- Gestión de perfil
- Navegación intuitiva
- Interfaz responsive

## 🛵 Repartidor

- Dashboard operativo
- Gestión de entregas
- Actualización de estado
- Control de rutas

## 🔐 Seguridad

- RBAC (Role Based Access Control)
- Validación de rutas privadas
- Persistencia de sesión
- Protección mediante layouts

---

# 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| React | Framework principal |
| Vite | Build Tool |
| JavaScript | Lenguaje |
| Tailwind CSS | Framework de estilos |
| React Router DOM | Manejo de rutas |
| Context API | Gestión global de estado |
| Vercel | Hosting y despliegue |

---

# 📂 Arquitectura del Proyecto

El proyecto implementa una arquitectura basada en características (**Feature-Based Architecture**) para asegurar:

- Escalabilidad
- Separación de responsabilidades
- Reutilización de componentes
- Mantenimiento sencillo

---

## 📁 Estructura General

```bash
src/
│
├── components/
│   ├── common/
│   ├── layouts/
│   └── ui/
│
├── features/
│   ├── clientApp/
│   │   ├── pages/
│   │   ├── components/
│   │   └── routes/
│   │
│   └── driverApp/
│       ├── pages/
│       ├── components/
│       └── routes/
│
├── store/
│   ├── context/
│   ├── reducers/
│   └── services/
│
├── assets/
│
├── App.jsx
│
└── main.jsx
```

---

# 📖 Explicación de Carpetas

| Carpeta | Descripción |
|---|---|
| `components/` | Componentes reutilizables |
| `features/clientApp` | Flujo del cliente |
| `features/driverApp` | Flujo del repartidor |
| `store/` | Estado global y autenticación |
| `assets/` | Recursos estáticos |
| `App.jsx` | Configuración principal |

---

# ⚙️ Instalación y Ejecución

## 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Danix1219/deliveryapp.git
```

---

## 2️⃣ Entrar al proyecto

```bash
cd MKI-DELIVERY
```

---

## 3️⃣ Instalar dependencias

```bash
npm install
```

---

## 4️⃣ Ejecutar servidor de desarrollo

```bash
npm run dev
```

---

# 🌐 Configuración para Producción (Vercel)

Para asegurar el correcto funcionamiento del enrutamiento en aplicaciones SPA utilizando React Router DOM, se requiere agregar un archivo:

## 📄 `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

# 🔐 Sistema de Autenticación

La aplicación implementa autenticación basada en roles (**RBAC**).

---

## 👥 Roles disponibles

| Rol | Correo | Contraseña | Ruta Principal |
|---|---|---|---|
| Cliente | kevin@veltrix.com | 123456 | `/client/home` |
| Repartidor | repartidor@veltrix.com | 123456 | `/driver/dashboard` |

---

# 🛡️ Implementaciones de Seguridad

## ✅ Control de Acceso basado en Roles (RBAC)

El sistema implementa validaciones automáticas de acceso utilizando:

- Context API
- React Router
- Layouts protegidos
- Validación de sesión

Si un usuario intenta acceder a rutas no autorizadas:

- ❌ Se cierra la sesión
- ❌ Se limpia la persistencia
- 🔄 Se redirecciona automáticamente

---

## 💾 Persistencia de Sesión

La sesión del usuario se mantiene utilizando:

```javascript
localStorage
```

Beneficios:

- Evita pérdida de sesión
- Mantiene autenticación tras refrescar
- Mejora experiencia de usuario

---

## 🔒 Protección de Rutas

Las rutas privadas utilizan:

- `Outlet`
- `Navigate`
- Validación de token
- Estado global centralizado

Esto garantiza que únicamente usuarios autenticados puedan acceder a vistas privadas.

---

# 🚀 Deploy

Aplicación desplegada en:

```bash
https://TU-APP.vercel.app
```

---

# 📸 Preview del Proyecto

## 🔑 Login

```md
![Login](./screenshots/login.png)
```

---

## 👤 Dashboard Cliente

```md
![Cliente](./screenshots/client-dashboard.png)
```

---

## 🛵 Dashboard Repartidor

```md
![Driver](./screenshots/driver-dashboard.png)
```

---

# 📈 Próximas Mejoras

- [ ] Backend real con Node.js/.NET
- [ ] Integración con base de datos
- [ ] Tracking en tiempo real con WebSockets
- [ ] Notificaciones push
- [ ] Integración de pagos
- [ ] Dashboard administrativo
- [ ] Dark Mode
- [ ] Geolocalización avanzada
- [ ] Chat en tiempo real

---

# 🧪 Scripts Disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run preview` | Vista previa del build |
| `npm install` | Instala dependencias |

---

# 📋 Requisitos del Sistema

- Node.js v18+
- npm v9+
- Navegador moderno
- Conexión a internet

---

# 👨‍💻 Autor

## Kevin Daniel Martinez Granados

Desarrollador Full Stack enfocado en aplicaciones modernas, arquitecturas escalables y soluciones web.

---

# 📄 Licencia

Este proyecto se encuentra bajo la licencia MIT.

---

# ⭐ Estado del Proyecto

🚧 Proyecto actualmente en desarrollo.
