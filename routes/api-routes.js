var Workout = require("../models/workoutModel.js");

module.exports = function (app) {
    app.get("/api/workouts", async (req, res) => {
        try {
            const workouts = await Workout.find();
            return res.json(workouts);
        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    });
    app.post("/api/workouts", async (req, res) => {
        try {
            const data = await Workout.create({});
            res.json(data);
        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    });
    app.put("/api/workouts/:id", async (req, res) => {
        try {
            const data = await Workout.findByIdAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } });
            return res.json(data);
        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    });
    app.get("/api/workouts/range", async (req, res) => {
        try {
            const workouts = await Workout.find();
            return res.json(workouts);
        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    });
};