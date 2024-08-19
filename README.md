
# Implementation of Cryptographic Hashing for Authenticating Paper Documents

  

## Overview

  

This project was developed as part of the **COMP-8157 (Advanced Database Topics)** course during the Summer 2024 semester at the University of Windsor. It presents an approach to verifying the authenticity of paper documents using cryptographic hashing and Optical Character Recognition (OCR). It addresses the challenge of document forgery and provides a simpler, more accessible, and cost-effective alternative to traditional security measures. The system uses the SHA-256 hashing algorithm to generate unique hashes for document pages and securely stores them alongside associated metadata. Users can authenticate their documents by uploading scanned images or PDFs, which the system processes to detect alterations or forgeries.

## Screenshots
<a data-flickr-embed="true" href="https://www.flickr.com/photos/201251173@N05/53934397094/in/dateposted-public/" title="Screenshot 2024-08-19 at 3.24.56 PM"><img src="https://live.staticflickr.com/65535/53934397094_dd6f9287fd_k.jpg" width="2048" alt="Screenshot 2024-08-19 at 3.24.56 PM"/></a>

<a data-flickr-embed="true" href="https://www.flickr.com/photos/201251173@N05/53934307038/in/dateposted-public/" title="Screenshot 2024-08-19 at 3.26.15 PM"><img src="https://live.staticflickr.com/65535/53934307038_4bdc437cb9_k.jpg" width="2048" alt="Screenshot 2024-08-19 at 3.26.15 PM"/></a>
  

## Features

 
- **Cryptographic Hashing (SHA-256):** Generates a unique, fixed-size 256-bit hash for each document page.

- **Optical Character Recognition (OCR):** Converts scanned images or PDFs into digital text for hashing and verification.

- **User-Friendly UI:** Simplified web interface that supports multiple document formats including PDF and JPEG.

- **Database:** Uses MongoDB for storing document hashes and metadata.


  

## Technologies Used

- **Programming Language:** JavaScript

- **Framework:** Express.js

- **OCR:** Tesseract.js

- **Hashing Algorithm:** SHA-256

- **Database:** MongoDB

- **Template Engine:** EJS

- **Styling:** Bootstrap

  

## Installation and Setup


### Steps to Run Locally

  
1. **Clone the repository:**

```bash

git clone https://github.com/iftymahmud/PapDocAuth.git

cd PapDocAuth

```

  

2. **Install dependencies:**

```bash

npm install

```

  

3. **Set up MongoDB:**

Ensure MongoDB is running locally or provide a connection string in the environment variables.

  

4. **Start the Application:**

```bash

npm start

```

  

5. **Access the Application:**

Open your browser and go to `http://localhost:3000` to interact with the application.

  
  
  

3. **Access the Application:**

Visit `http://localhost:3000`.

  

  

## Usage

  

### Registering a Document

1. Upload a scanned image or PDF of the paper document.

2. Add relevant metadata such as the issuer's name, date, and intended recipient.

3. The system will generate a hash for each document page and store it securely in the database.

  

### Verifying a Document

1. Upload the document you wish to verify.

2. The system will re-hash the document and compare it with the stored hash.

3. If the hashes match, the document is verified as authentic. Otherwise, the system will flag it as potentially tampered with.

  

## Limitations


- High-resolution scans are required for accurate OCR performance.

- Limited to text-based document verification; does not handle documents with extensive handwritten content or complex formatting.

  

## Note
Multi-page document and PDF support are currently under development. At present, the application supports single JPEG and PNG images.

  

## Acknowledgement
This project was developed as part of the COMP-8157 course at the University of Windsor. Special thanks to our course instructor, Dr. Shafaq Khan, for the guidance provided throughout the semester.


  
