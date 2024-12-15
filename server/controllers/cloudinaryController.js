const cloudinary = require('../config/cloudinaryConfig');

exports.uploadFile = async (req, res) => {
  try {
    const filePath = req.file.path;
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: 'auto',
      folder: 'NelsonAssistFiles',
    });
    res.status(201).json({ url: result.secure_url });
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    res.status(500).json({ error: 'Cloudinary upload failed' });
  }
};

