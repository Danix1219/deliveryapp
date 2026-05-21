Veltrix Delivery Application
Veltrix Delivery es una plataforma integral de gestión logística diseñada para optimizar la cadena de suministro en el sector de alimentos a domicilio. El sistema facilita la interacción entre clientes, restaurantes y repartidores, garantizando una gestión eficiente de pedidos, seguimiento en tiempo real y autenticación basada en roles (RBAC).

Stack Tecnológico
Framework: React

Build Tool: Vite

Lenguaje: JavaScript

Estilos: Tailwind CSS

Enrutamiento: React Router DOM

Gestión de Estado: React Context API

Despliegue: Vercel

Arquitectura del Proyecto
El proyecto sigue un patrón de diseño basado en características (feature-based) para asegurar la escalabilidad del código:

/src/features/clientApp/: Módulos y layouts dedicados al flujo del consumidor final.

/src/features/driverApp/: Módulos y layouts enfocados en la operatividad del repartidor.

/src/store/: Lógica centralizada para la gestión de estados globales, autenticación y persistencia.

/src/components/: Interfaz de usuario compartida y componentes atómicos.

/src/App.jsx: Configuración principal de las rutas y proveedores de contexto.

Instalación y Ejecución
Para iniciar el proyecto en un entorno de desarrollo local, siga estos pasos:

Clonar el repositorio:

Bash
git clone [URL_DEL_REPOSITORIO]
Instalar dependencias:

Bash
npm install
Ejecutar servidor de desarrollo:

Bash
npm run dev
Configuración para Producción (Vercel)
Para asegurar la correcta navegación en aplicaciones SPA (Single Page Application) alojadas en Vercel, es obligatorio incluir el archivo vercel.json en la raíz del proyecto para manejar el enrutamiento del lado del cliente:

JSON
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
Sistema de Autenticación y Roles
El sistema valida el acceso basándose en el rol del usuario, definido a través del dominio del correo electrónico durante el inicio de sesión.

Rol	Correo Electrónico	Contraseña	Ruta Principal
Cliente	kevin@veltrix.com	123456	/client/home
Repartidor	repartidor@veltrix.com	123456	/driver/dashboard
Implementaciones de Seguridad
Control de Acceso basado en Roles (RBAC): Se han implementado guardas de seguridad en los layouts mediante useEffect. Si un usuario intenta acceder a una ruta que no corresponde a su rol (ej. un cliente intentando acceder al dashboard de repartidor), el sistema ejecutará un cierre de sesión y redirección automática.

Persistencia de Sesión: El sistema implementa localStorage para preservar el estado de la sesión, evitando la pérdida de datos del usuario y la redirección forzada al login tras actualizar la página.

Protección de rutas: La estructura de Outlet en los layouts junto con la lógica de autenticación centralizada garantiza que las rutas privadas solo sean accesibles mediante un token de sesión válido en el estado global.