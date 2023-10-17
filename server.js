import 'dotenv/config';
import app from "./src/app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Generic API Server for Instituto Evoluir is running on ${PORT}...`);
});
