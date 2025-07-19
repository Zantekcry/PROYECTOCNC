# React + TypeScript + Vite
 Parte 1: El Cimiento - Herramientas Esenciales

Estas son las herramientas base que necesitarás sin importar el framework que elijas.

1. Instalar Node.js y npm

Node.js es un entorno que permite ejecutar JavaScript fuera del navegador. Es fundamental porque todas las herramientas de desarrollo modernas se basan en él. npm es el gestor de paquetes de Node.js; viene incluido y se usa para instalar librerías y frameworks.
Recomendación: Usa un gestor de versiones como nvm (Node Version Manager) para instalar Node.js. Esto te permite cambiar fácilmente entre diferentes versiones de Node.js según lo requiera cada proyecto.
Instalación (Windows): Descarga y ejecuta el instalador de nvm-windows.
Instalación (macOS/Linux): Sigue las instrucciones en el repositorio oficial de nvm.
Una vez instalado nvm, abre una nueva terminal y ejecuta:

Bash


# Instala la última versión LTS (Long-Term Support) de Node.js
nvm install lts

# Establece esa versión como la predeterminada
nvm use lts


Para verificar, revisa las versiones:

Bash


node -v # Debería mostrar la versión de Node.js
npm -v  # Debería mostrar la versión de npm



2. Instalar un Gestor de Paquetes Mejorado (pnpm)

Aunque npm funciona bien, alternativas como pnpm son mucho más rápidas y eficientes con el espacio en disco. Usaremos pnpm para el resto de los ejemplos.

Bash


# Instala pnpm de forma global usando npm
npm install -g pnpm


Para verificar la instalación:

Bash


pnpm -v

## Parte 2: Instalando los Frameworks

Ahora que la base está lista, veamos cómo iniciar un proyecto nuevo con cada uno de los frameworks principales. La forma más moderna y recomendada es usar sus herramientas oficiales de CLI (Interfaz de Línea de Comandos).

React 19+ (con Vite)

La forma más rápida y moderna de iniciar un proyecto de React es con Vite.
Abre tu terminal en la carpeta donde quieras crear tu proyecto.
Ejecuta el siguiente comando. Te hará algunas preguntas; asegúrate de seleccionar React y TypeScript.
Bash
# Este comando crea un nuevo proyecto de Vite
pnpm create vite


Sigue las instrucciones que te da la terminal:
Bash
# Entra a la carpeta del proyecto
cd <nombre-del-proyecto>

# Instala todas las dependencias
pnpm install

# Inicia el servidor de desarrollo
pnpm run dev


¡Listo! Vite te dará una URL local (como http://localhost:5173) para que veas tu aplicación de React en vivo.


