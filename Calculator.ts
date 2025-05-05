// import EventEmitter from 'node:events'; 
// import express, { Request, Response as Resp } from 'express'; 
// const app = express();

// const eventEmitter = new EventEmitter();

// app.put('/api/addWord', 
//     (req : Request, res : Resp) => {
//     const value = req.body.value; 
//     const key = req.body.name; 
//     addWord(key, value);
//     }
// )

// app.post('/api/updateWord', 
//     (req : Request, res : Resp) => {
//     const value = req.body.value; 
//     const key = req.body.name; 
//     updateWord(key, value);
//     res.send(`המילה ${key} עודכנה לערך ${value}.`);
//     }
// )

// app.delete('/api/deleteWord', 
//     (req : Request, res : Resp) => {
//     const key = req.body.name; 
// deleteWord(key);
//     }
// )

// app.get('/api/add', 
//     (req : Request, res : Resp) => {
//     const num1 = req.body.num1; 
//     const num2 = req.body.num2; 
//     SubtractionExercise(num1,num2);
//     }
// )

// app.get('/api/reducation', 
//     (req : Request, res : Resp) => {
//     const num1 = req.body.num1; 
//     const num2 = req.body.num2; 


//     }
// )


// app.get('/api/multiplication', 
//     (req : Request, res : Resp) => {
//     const num1 = req.body.num1; 
//     const num2 = req.body.num2; 


//     }
// )
// app.get('/api/value/:value', (req : Request, res : Resp) => {
//     const routeParams = req.params;
//     const value = routeParams.value; 
    
// });

// app.get('/api/division', 
//     (req : Request, res : Resp) => {
//     const num1 = req.body.num1; 
//     const num2 = req.body.num2; 


//     }
// )


// app.listen(3000, () => { 
//     console.log('Server is running on port 3000');
// });
