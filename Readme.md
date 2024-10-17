# File Upload to Google Cloud Storage

This is a Node.js application that allows users to upload files to a Google Cloud Storage bucket via a web interface. It uses `Express.js` for the server, `Multer` for handling file uploads, and `@google-cloud/storage` to interact with Google Cloud Storage.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [How It Works](#how-it-works)
- [License](#license)

## Installation

Follow the steps below to run this project on your local machine:

1. **Clone the repository**

   ```bash
   git clone (https://github.com/Ashishlovesagra/Tiger-reserve-image-uploads.git)
   cd Tiger-reserve-image-uploads
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Google Cloud**

   Ensure that you have a Google Cloud account and a Google Cloud Storage bucket set up. Then, create a service account and download the JSON key file for authentication.

4. **Create a .env file**

   ```bash
   GOOGLE_APPLICATION_CREDENTIALS=<path-to-your-service-account-key-file>
   BUCKET_NAME=<your-google-cloud-storage-bucket-name>
   PORT=5000
   ```

### Configuration 

   Make sure the following configurations are in place:

   - Google Cloud Storage: The application uses Google Cloud Storage to store uploaded files.
   - Set up a service account with the proper permissions to interact with Google Cloud Storage.
   - The GOOGLE_APPLICATION_CREDENTIALS variable should point to the service account JSON key file.

## Usage

   - To run the application, follow these steps:

1. Start the Server

```bash
   npm start
   ```

   - The server will start on the port specified in the .env file (default: 5000). You should see output similar to:
   
   ```bash
   Server is running on http://localhost:5000
   ```

2. Access the file upload interface

   - Open your browser and go to http://localhost:5000. You will be presented with a form where you can upload a file.

3. Upload a file
   
   - Choose a file from your local machine and click the Upload button.
   - After successful upload, a link to the publicly accessible file in Google Cloud Storage will be displayed.

## Project Structure

```bash
├── config
│   └── gcs.js               # Google Cloud Storage configuration
├── controllers
│   └── fileController.js     # File upload logic and handling
├── routes
│   └── fileRoutes.js         # API routes for file uploads
├── views
│   └── upload.ejs            # EJS template for the upload interface
├── .env                      # Environment variables configuration file
├── index.js                  # Main server file
└── package.json              # Project metadata and dependencies
```

## API Routes

1. POST /api/files/upload

This route handles file uploads using multer middleware and stores the file in Google Cloud Storage.

   - Request Parameters:
        - file: The file to be uploaded (multipart form data).

   - Response:
        - Success: 200 OK
        - Returns the public URL of the uploaded file.
        - Error: 400 Bad Request
        - When no file is uploaded.

2. GET / 

Renders the file upload form on the browser.

## How It Works
1. File Upload:

    - When a file is uploaded, the server uses multer to handle the file, storing it in memory.
    - The file is then uploaded to a Google Cloud Storage bucket using the @google-cloud/storage package.
    
2. Google Cloud Storage:

    - The uploaded file is stored in the specified Google Cloud Storage bucket.
    - The file is made publicly accessible after upload, and the public URL is returned to the user.

3. Error Handling:

    - If an error occurs during upload (e.g., no file provided), the user is notified with an error message.

## License

This project is licensed under the Ashish Kumar Singh.
