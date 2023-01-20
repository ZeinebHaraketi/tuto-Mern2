import express from "express";
import { verifyTokens } from "../middleware/auth.js";
import { getUser,getUserFriends,addRemoveFriend} from "../controllers/users.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyTokens, getUser);
router.get("/:id/friends", verifyTokens, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", verifyTokens, addRemoveFriend);

export default router;
