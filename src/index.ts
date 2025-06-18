import express from 'express';
import studentsRoutes from './routes/StudentsRoutes';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/', studentsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});