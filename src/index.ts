import express from 'express';
import studentsRoutes from './routes/StudentsRoutes';
import usersRoutes from './routes/UsersRoutes';
import swaggerUI from 'swagger-ui-express';
import specs from './swagger/swagger';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use('/students', studentsRoutes);
app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});