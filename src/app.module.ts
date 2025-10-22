import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import configuration from "./config/configuration";
import { ParametersModule } from "./parameters/paramters.module";

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: 5432,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                autoLoadEntities: true,
                synchronize: true
            })
        }),
        ParametersModule
    ]
})
export class AppModule {}