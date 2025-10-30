const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Create the 'uploads' directory if it doesn't exist
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// --- Configure Multer ---
const storage = multer.diskStorage({
  /**
   * destination: A function to tell multer where to store the file.
   * 'cb' is a callback (short for "call back")
   */
  destination: function (req, file, cb) {
    // We tell it to save in our 'uploads' directory
    cb(null, uploadDir); 
  },
  
  /**
   * filename: A function to tell multer what to name the file.
   */
  filename: function (req, file, cb) {
    // 'file.originalname' is the original name of the file (e.g., 'my-image.png')
    
    // To prevent files with the same name from overwriting each other,
    // we'll add a unique timestamp to the name.
    
    // Get the file extension (e.g., '.png')
    const fileExt = path.extname(file.originalname);
    
    // Get the file name without the extension
    const baseName = path.basename(file.originalname, fileExt);

    // Create the new, unique filename
    const uniqueFileName = `${baseName}-${Date.now()}${fileExt}`;
    
    cb(null, uniqueFileName);
  }
});

// --- Configure Multer ---
// This is the simplest configuration.
// 'dest' tells multer where to save the files.
const upload = multer({ dest: 'uploads/', storage: storage });

// --- Your HTML Form (for testing) ---
// Note the enctype="multipart/form-data"
app.get('/', (req, res) => {
  res.send(`
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <label>Your Name:</label>
      <input type="text" name="username" />
      <br/><br/>
      <label>File to upload:</label>
      <input type="file" name="myFile" /> 
      <br/><br/>
      <button type="submit">Upload</button>
    </form>
  `);
});

// --- Create the Upload Route ---

// We apply the 'multer' middleware to this specific route.
// 'upload.single('myFile')' tells multer:
// 1. Expect a single file.
// 2. The file will be in a form field named 'myFile'.
app.post('/upload', upload.single('myFile'), (req, res) => {
  
  // 1. Text fields are on 'req.body'
  console.log('Text fields:', req.body);
  
  // 2. File information is on 'req.file'
  console.log('File info:', req.file);

  /*
  Example 'req.file' object:
  {
    fieldname: 'myFile',
    originalname: 'my-image.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'uploads/',
    filename: 'a4f89d9e4c1f2e3a1d6b8c9d0a1b2c3d', // A random, unique name
    path: 'uploads/a4f89d9e4c1f2e3a1d6b8c9d0a1b2c3d',
    size: 12345
  }
  */

  if (req.file) {
    res.send(`File uploaded successfully: ${req.file.path}`);
  } else {
    res.status(400).send('File upload failed.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});