const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const multer = require('multer');

const port = 5001


const mongoose = require("mongoose")
const User = require("./model/user")
const Products = require("./model/Products")
const ImageModel = require("./model/ImageModel");
const registers = require('./model/registers');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/ArtisticUnleashed").then(() => {
    console.log("Database Connected")
}).catch((e) => {
    console.log(e)
    console.log("Database Can't Be Connected")
})



app.post('/submit', cors(), async (req, res) => {

    console.log(req.body);
    const userData = new User(req.body);
    let requestStore = await userData.save();
    //--- res.status(200).json({ message: "Message sent successfully" });

})

app.post('/Products', cors(), async (req, res) => {
    console.log(req.body);
    const ProductsData = new Products(req.body);
    let requestStore = await ProductsData.save();
    //--- res.status(200).json({ message: "Message sent successfully" });

})

app.get('/api/login', async (req, res) => {
    try {
        const data = await registers.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

app.post('/register', cors(), async (req, res) => {
    try {
        const registerData = new registers(req.body);
        const savedData = await registerData.save();

        res.status(200).json({
            success: true,
            message: "Data saved successfully",
            data: savedData
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
});

app.get('/api/data', async (req, res) => {
    try {
        const data = await Products.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Images');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

app.post('/Sell', upload.single('image'), (req, res) => {
    try {
        res.send('Image uploaded successfully!');
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).send('Internal Server Error');
    }
});

// app.post('/calculator', async (req, res) => {
//     try {
//       const { Operand1, Operator, Operand2 } = req.body;
  
//       const calculationData = new Calculation({
//         Operand1,
//         Operator,
//         Operand2,
//       });
  
//       const savedCalculation = await calculationData.save();
//       res.status(201).json(savedCalculation);
//     } catch (error) {
//       console.error("Error:", error.message);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });

const calculations = [];

app.post('/api/calculations', (req, res) => {
  const { operand1, operand2, operator, result } = req.body;

  if (operand1 !== undefined && operand2 !== undefined && operator && result !== undefined) {
    const calculation = { operand1, operand2, operator, result };
    calculations.push(calculation);
    res.status(201).json({ success: true, calculation });
  } else {
    res.status(400).json({ success: false, message: 'Invalid request body' });
  }
});

app.get('/api/calculations', (req, res) => {
  res.json(calculations);
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





// SendFolder
const sourceFolder = './Images';
const destinationFolder = 'C:/Users/Hafsa Amin/Desktop/test/test/helloworld/src/Images/UploadedImages';

if (!fs.existsSync(sourceFolder)) {
    fs.mkdirSync(sourceFolder);
}

if (!fs.existsSync(destinationFolder)) {
    fs.mkdirSync(destinationFolder);
}

fs.watch(sourceFolder, (eventType, filename) => {
    if (eventType === 'rename' && filename) {
        const sourceFilePath = path.join(sourceFolder, filename);
        const destinationFilePath = path.join(destinationFolder, filename);

        fs.rename(sourceFilePath, destinationFilePath, (err) => {
            if (err) {
                console.error('Error moving file:', err);
            } else {
                console.log(`File moved: ${filename}`);

                // Save the filename and current timestamp to MongoDB
                const image = new ImageModel({ filename });
                image.save()
                    .then(() => console.log('File name saved to MongoDB'))
                    .catch(error => console.error('Error saving to MongoDB:', error));
            }
        });
    }
});

console.log(`Watching for changes in the ${sourceFolder} folder...`);