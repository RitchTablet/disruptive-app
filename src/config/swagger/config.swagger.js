import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

export function setupSwagger(app) {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API de Mi Aplicación",
        version: "1.0.0",
        description: "Documentación de la API de Mi Aplicación",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["src/routes/*.js"],
  };

  const specs = swaggerJsdoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}
