import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    console.log('DB_HOST:', process.env.DB_HOST);
    console.log('DB_PORT:', process.env.DB_PORT);
    console.log('DB_USER:', process.env.DB_USER);
    console.log('DB_NAME:', process.env.DB_NAME);
    console.log('DB_PASS:', process.env.DB_PASS);
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('api');

    const config = new DocumentBuilder()
    .setTitle('Parameters Service')
    .setDescription('CRUD Parametros con valores tipados dinamicos')
    .setVersion('1.0.0')
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
    const port = process.env.PORT || 3000;
    await app.listen(port); 
}

bootstrap();