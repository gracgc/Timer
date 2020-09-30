const {Router} = require('express');
const Timer = require('../models/Timer');
const router = Router();

router.get('/', (req, res) => {
    try {
        Timer.findById({_id: "5f70b7a294b15820c02c50f0"}, {_id: 0, __v: 0}).then(timer => res.json(timer))
    } catch (e) {
        res.status(500).json({message: "Opps, try again"})
    }

});
// _id: "5f70b7a294b15820c02c50f0"
// router.put('/', (req, res) => {
//     // const minutes = req.body.minutes;
//     // const seconds = req.body.seconds;
//     // const milliseconds = req.body.milliseconds;
//     Timer.findOneAndUpdate({_id: "5f70b7a294b15820c02c50f0"},
//         req.body, {new: true})
//         .then(function () {
//             Timer.findOne({})
//                 .then(function (timer) {
//                     res.send(timer)
//                 })
//         })
// });


router.put('', (req, res) => {
    const minutes = req.body.minutes;
    const seconds = req.body.seconds;
    const milliseconds = req.body.milliseconds;
    Timer.findByIdAndUpdate({_id: "5f70b7a294b15820c02c50f0"},
        {
            minutes: minutes,
            seconds: seconds,
            milliseconds: milliseconds

        }, {returnOriginal: false, new: true }
    ).then(result => {
        res.json(result)
    })
});

module.exports = router;
