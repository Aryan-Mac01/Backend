import express from "express"
const app = express();
//axios is used to handle web requests
//cors is known as cross-origin which only allow familiar urls

app.use(express.static('dist'))//express middleware, isse front end ke static asset directly serve honge, but iske baad kiye changes nhi aayenge, uske liye baar baar build krna padega

app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id:1,
            title:"This is the first joke",
            desc:"This is first joke"
        },
        {
            id:2,
            title:"This is the second joke",
            desc:"This is second joke"
        },
        {
            id:3,
            title:"This is the third joke",
            desc:"This is third joke"
        }
    ];
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})