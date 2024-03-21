import upload from "../service/uploadFileService";

const postFileUploadImage_vongquay = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let result = await upload.uploadSingleFile_vongquay(req.files.fileImg);
  return res.status(200).json({
    EC: 1,
    data: result.data,
  });
};

const postFileUploadImage_banner = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let result = await upload.uploadSingleFile_banner(req.files.fileImg);
  return res.status(200).json({
    EC: 1,
    data: result.data,
  });
};
const postFileUploadImage_footer = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let result = await upload.uploadSingleFile_footer(req.files.fileImg);
  return res.status(200).json({
    EC: 1,
    data: result.data,
  });
};
const postFileUploadImage_anhnen = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let result = await upload.uploadSingleFile_anhnen(req.files.fileImg);
  return res.status(200).json({
    EC: 1,
    data: result.data,
  });
};

const deleteImage = async (req, res) => {
  const data = await upload.deleteImage(req.body.fileImg);
  if (data && data.DT) {
    return res.status(200).json({
      EC: 1,
      data: "delete success",
    });
  } else {
    return res.status(400).json({
      EC: -1,
      data: "err delete",
    });
  }
};

export default {
  postFileUploadImage_vongquay,
  deleteImage,
  postFileUploadImage_anhnen,
  postFileUploadImage_banner,
  postFileUploadImage_footer,
};
