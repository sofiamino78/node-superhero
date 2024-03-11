const express = require("express");
const app = express();
const connectDB = require("./config/db");
const Hero = require("./models/heroModel");

connectDB();

app.use(express.json());

// Display all superheros
app.get("/superheros", async (req, res) => {
  try {
    const heros = await Hero.find({});
    res.json(heros);
  } catch (error) {
    console.log(error);
  }
});

// Display superhero using ID
app.get("/superheros/:superHeroId", async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.superHeroId);
    res.json(hero);
  } catch (error) {
    console.log(error);
  }
});

// Create new superhero
app.post("/superheros", async (req, res) => {
  try {
    await Hero.create({
      superheroname: req.body.superheroname,
      name: req.body.name,
    });
    res.json({ msg: "Superhero Created" });
  } catch (error) {
    console.log(error);
  }
});

// Edit superhero with ID
app.put("/superheros/:superHeroId", async (req, res) => {
  try {
    await Hero.findByIdAndUpdate(req.params.superHeroId, {
      superheroname: req.body.superheroname,
      name: req.body.name,
    });
    res.json({ msg: "Hero is updated" });
  } catch (error) {
    console.log(error);
  }
});

// Delete superhero with ID
app.delete("/superheros/:superHeroId", async (req, res) => {
  try {
    await Hero.findByIdAndDelete(req.params.superHeroId);
    res.json({ msg: "Superhero deleted" });
  } catch (error) {
    console.log(error);
  }
});

//Welcome to index
app.get("/", (req, res) => {
  res.json({ msg: "API Server is Running" });
});

app.listen(3000, console.log("Server started on port 3000"));
