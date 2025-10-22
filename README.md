# policyAlert Arquitectura
Esta prueba fue hecha con arquitectura por capas(DDD):
- Interface(API)
- Aplicacion: servicios
- Dominio: entities
- INfraestructura: TypeORM

# policyAlert Patrones de diseño
- Dependency injection (IoC)
- Repository
- DTO
- Validation/Guard clauses
- Adapter
- Factory
- CQS(Command-Query separation)
- Mapper
- configuration as a module
- Exception handling



# Clonar el repositorio
git clone <url repo>
cd policyalert

# instalar dependencias
npm install

# Crear archivo de entorno
cp .env.example .env

# Levantar con docker
docker compose build
docker compose up -d

# Revisa Logs del contenedor
docker compose logs -f api

# Para correr test
npm run test
