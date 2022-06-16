const express = require("express")
const Flashcard = require("../model/flashcard")

const router = express.Router()


//Index Route for a language
router.get("/", async(req, res) => { //front end, replace "/language with /${languageName}"
    //res.send("flashcards live here")
    try{
        const language = await Flashcard.find({});
        res.json(language) //just sends the json data
    } catch(error) {
        console.log("error: ", error)
        res.json({error: "Something went wrong- check console"})
    }
});

//CREATE Route for a language flashcard (frontend will need to replace address with ${languageName})
router.post("/", async(req, res) => { //error handling
try{
    const newCard = await Flashcard.create(req.body);
        res.json(newCard)
} catch(error) {
    console.log("error: ", error)
    res.json({error: "something went wrong- check console"});
}
})

module.exports = router;