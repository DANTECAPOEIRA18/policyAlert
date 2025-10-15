# policyAlert

# Clonar el repositorio
git clone <url repo>
cd policyalert

# instalar dependencias
npm install

# Crear archivo de entorno
cp .env.example .env

# Levantar con docker
docker compose ip --build

# Para correr test
npm run test
