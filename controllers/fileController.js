const { bucket } = require('../config/gcs');

const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream({
    resumable: false,
    contentType: req.file.mimetype,
  });

  blobStream.on('error', (err) => {
    res.status(500).json({ success: false, message: err.message });
  });

  blobStream.on('finish', async () => {
    // Make the file public
    try {
      await blob.makePublic();
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to make file public' });
    }

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    res.status(200).json({ success: true, imageUrl: publicUrl });
  });

  blobStream.end(req.file.buffer);
};

module.exports = { uploadFile };
