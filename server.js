const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const reactViews = require("express-react-views");

// Set up JSX as the view engine
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Define 10 different routes
app.get("/", (req, res) => {
  res.render("template1", { message: "Welcome to Beyoncé's Official Website" });
});

app.get("/albums", (req, res) => {
  res.render("template2", { message: "Explore Beyoncé's Discography" });
});

app.get("/videos", (req, res) => {
  res.render("template1", { message: "Watch Music Videos by Beyoncé" });
});

app.get("/news", (req, res) => {
  res.render("template2", { message: "Get the Latest News About Beyoncé" });
});

app.get("/tour", (req, res) => {
  res.render("template1", {
    message: "Check Out Beyoncé's Upcoming Tour Dates",
  });
});

app.get("/social", (req, res) => {
  res.render("template2", { message: "Connect with Beyoncé on Social Media" });
});

app.get("/merchandise", (req, res) => {
  res.render("template1", {
    message: "Shop for Exclusive Beyoncé Merchandise",
  });
});

app.get("/bio", (req, res) => {
  res.render("template2", {
    message: "Read Beyoncé's Biography and Career Highlights",
  });
});

app.get("/fanclub", (req, res) => {
  res.render("template1", { message: "Join the Beyoncé Fan Club" });
});

app.get("/subscribe", (req, res) => {
  res.render("template2", { message: "Subscribe to Get Updates from Beyoncé" });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
