const { registerSeller, loginSeller, checkSeller, sellerProfile, sellerLogout, updateSellerProfile } = require("../../controllers/sellerController")
const { sellerAuth } = require("../../middlewares/sellerAuth")

const sellerRouter = require("express").Router()

sellerRouter.post("/update-seller-profile", sellerAuth, updateSellerProfile )
sellerRouter.post("/register-seller", registerSeller )
sellerRouter.post("/login-seller", loginSeller )

sellerRouter.get("/check-seller", sellerAuth, checkSeller )
sellerRouter.get("/seller-profile", sellerAuth, sellerProfile )
sellerRouter.get("/seller-logout", sellerAuth, sellerLogout )


module.exports = sellerRouter