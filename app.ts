import express from 'express';
const PORT: number = 6500;

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Welcome to Techno Diary');
});

app.listen(PORT, () => {
    console.log(`Server is listening to the port: ${PORT}`);
});
