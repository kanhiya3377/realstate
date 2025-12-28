import express from "express";
import bodyParser from "body-parser";
import { uploadListingImages, uploadProfileImages} from "../controllers/upload.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();
router.use(bodyParser.json({limit: "5mb"}));


router.post("/avatars", uploadProfileImages);
router.post("/listings", verifyToken, uploadListingImages);


export default router;
