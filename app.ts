// import { unwatchFile } from "node:fs";

// const dictionary: { [key: string]: number } = {};

// function addWord(word: string, value: number): void {
//     dictionary[word] = value;
// }

// function findWord(word: string): number | string {
//     return dictionary[word] !== undefined ? dictionary[word] : 'לא נמצא!';
// }

// function updateWord(word: string, value: number): string {
//     if (dictionary[word] !== undefined) {
//         dictionary[word] = value;
//         return `המילה ${word} עודכנה לערך ${value}.`;
//     } else {
//         return 'המילה לא נמצאת במילון.';
//     }
// }

// function deleteWord(word: string): string {
//     if (dictionary[word] !== undefined) {
//         delete dictionary[word];
//         return `המילה ${word} נמחקה מהדיקשנרי.`;
//     } else {
//         return 'המילה לא נמצאת במילון.';
//     }
// }

// function MultiplicationExercise(value1: any, value2: any): number {
//     const keyToCheckvalue1 = typeof value1 === 'string';
//     const keyToCheckvalue2 = typeof value1 === 'string';
//     if(keyToCheckvalue1)
//     {
//        return  dictionary[value1]*value2
//     }
//     if(keyToCheckvalue2)
//     {
//        return  dictionary[value2]*value1
//     }
//     return value2*value1
// }
// function DivisionExercise(value1: any, value2: any): number {
//     const keyToCheckvalue1 = typeof value1 === 'string';
//     const keyToCheckvalue2 = typeof value1 === 'string';
//     if(keyToCheckvalue1)
//     {
//        return  dictionary[value1]/value2
//     }
//     if(keyToCheckvalue2)
//     {
//        return  value1/dictionary[value2]
//     }
//     return value2/value1
// }
// function ConnectionExercise(value1: any, value2: any): number {
//     const keyToCheckvalue1 = typeof value1 === 'string';
//     const keyToCheckvalue2 = typeof value1 === 'string';
//     if(keyToCheckvalue1)
//     {
//        return  dictionary[value1]value2
//     }
//     if(keyToCheckvalue2)
//     {
//        return  value1-dictionary[value2]
//     }
//     return value2-value1
// }
// function SubtractionExercise(value1: any, value2: any): number {
//     const keyToCheckvalue1 = typeof value1 === 'string';
//     const keyToCheckvalue2 = typeof value1 === 'string';
//     if(keyToCheckvalue1)
//     {
//        return  dictionary[value1]/value2
//     }
//     if(keyToCheckvalue2)
//     {
//        return value1+dictionary[value2]
//     }
//     return value2+value1
// }
// import EventEmitter from 'node:events'; 
import express, { Request, Response as Resp } from 'express'; 

const app = express();
app.use(express.json()); // כדי לפענח JSON בגוף הבקשה

const dictionary: { [key: string]: number } = {};

// פונקציות לניהול המילון
function addWord(word: string, value: number): void {
    dictionary[word] = value;
}

function updateWord(word: string, value: number): string {
    if (dictionary[word] !== undefined) {
        dictionary[word] = value;
        return `המילה ${word} עודכנה לערך ${value}.`;
    } else {
        return 'המילה לא נמצאת במילון.';
    }
}

function deleteWord(word: string): string {
    if (dictionary[word] !== undefined) {
        delete dictionary[word];
        return `המילה ${word} נמחקה מהדיקשנרי.`;
    } else {
        return 'המילה לא נמצאת במילון.';
    }
}

// פונקציות לחישובי מתמטיקה
function MultiplicationExercise(value1: any, value2: any): number {
    if (typeof value1 === 'string') {
        return (dictionary[value1] !== undefined ? dictionary[value1] : 1) * value2;
    }
    if (typeof value2 === 'string') {
        return value1 * (dictionary[value2] !== undefined ? dictionary[value2] : 1);
    }
    return value1 * value2;
}

function DivisionExercise(value1: any, value2: any): number | string {
    if (typeof value1 === 'string') {
        if (dictionary[value1] === 0) return 'שגיאה: חילוק באפס!';
        return (dictionary[value1] !== undefined ? dictionary[value1] : 1) / value2;
    }
    if (typeof value2 === 'string') {
        if (dictionary[value2] === 0) return 'שגיאה: חילוק באפס!';
        return value1 / (dictionary[value2] !== undefined ? dictionary[value2] : 1);
    }
    return value1 / value2;
}

function SubtractionExercise(value1: any, value2: any): number {
    if (typeof value1 === 'string') {
        return (dictionary[value1] !== undefined ? dictionary[value1] : 0) - value2;
    }
    if (typeof value2 === 'string') {
        return value1 - (dictionary[value2] !== undefined ? dictionary[value2] : 0);
    }
    return value1 - value2;
}

// הגדרת נתיבי ה-API
app.put('/api/addWord', (req: Request, res: Resp) => {
    const { name: key, value } = req.body; 
    addWord(key, value);
    res.send(`המילה ${key} נוספה עם הערך ${value}.`);
});

app.post('/api/updateWord', (req: Request, res: Resp) => {
    const { name: key, value } = req.body; 
    const message = updateWord(key, value);
    res.send(message);
});

app.delete('/api/deleteWord', (req: Request, res: Resp) => {
    const { name: key } = req.body; 
    const message = deleteWord(key);
    res.send(message);
});

app.get('/api/subtraction', (req: Request, res: Resp) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    const result = SubtractionExercise(num1, num2);
    res.send(`תוצאת החיסור היא: ${result}`);
});

app.get('/api/multiplication', (req: Request, res: Resp) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    const result = MultiplicationExercise(num1, num2);
    res.send(`תוצאת הכפל היא: ${result}`);
});

app.get('/api/division', (req: Request, res: Resp) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    const result = DivisionExercise(num1, num2);
    res.send(`תוצאת החלוקה היא: ${result}`);
});

// הפעלת השרת
app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});
