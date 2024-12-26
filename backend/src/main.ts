import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API for users, rooms and topics')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: [
      'http://localhost:5174',
      'https://app-discussion.vercel.app',
      'https://socketio-production-ee2e.up.railway.app',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT || 8080, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
