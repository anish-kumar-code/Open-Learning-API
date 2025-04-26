import 'dotenv/config'
import connectDB from './src/utils/connectDB.js';
import app from './src/app.js';

// const app = express()
const port = process.env.PORT || 4000;

// databse connection
connectDB()

app.get('/', (req, res) => {
    res.send('This is slash route in index.js file')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})