import cloudinary from "../utils/cloudinary.js";

export const uploadProfileImages = async (req, res) => {
  try {
    const file = req.body.file;
    if (!file)
      return res.status(400).json({
        success: false,
        message: "No file provided",
      });

    const result = await cloudinary.uploader.upload(file, {
      folder: "avatars",
    });

    res.status(200).json({
      success: true,
      url: result.secure_url,
    });
  } catch (err) {
    console.log("Upload Error", err);
    res.status(500).json({
      success: false,
      message: "Upload Failed",
    });
  }
};

export const uploadListingImages = async (req, res) => {
  try {
    const files = req.body.files;
    if (!files || files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No files uploaded",
      });
    }

    const uploadedImages = await Promise.all(
      files.map((file) =>
        cloudinary.uploader
          .upload(file, { 
            folder: "listings",
            resource_type:'image',
            quality:"auto:eco",
            fetch_format: "auto",
            timeout: 120000
           })
          .then((result) => result.secure_url)
      )
    );
    res.status(200).json({
      success: true,
      urls: uploadedImages,
    });
  } catch (error) {
    console.log("Upload Error:", error);
    res.status(500).json({
      success: false,
      message: "Uploads Failed",
    });
  }
};
