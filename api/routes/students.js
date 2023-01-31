const router =require("express").Router();
let Student = require("../models/student");

router.route("/add").post(
    (req,res)=>{

        const name = req.body.name;
        const age = number(req.body.age);
        const gender = req.body.gender;

        const newStudent = new Student({

            name,age,gender
        })

        newStudent.save().then(()=>{
            res.json("student Added");
        }).catch((err)=>{
            console.log(err);
        })


    }
) 

router.route("/").get((req,res)=>{

    Student.find().then((students)=>{
         res.json(students)

    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{
    
    let userId =req.params.id;
    const {name,age,gender} = req.body;

    const updateStudent = new Student({
        name,age,gender
    })

    const update = await Student.findByIdAndUpdate(userId,updateStudent)
    .then(()=>{
        res.status(200).send({ status:"user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with updating data",error: err.massage});
    })

})

router.route("/delete/:id").delete(async(req,res)=>{

    let userId =req.params.id;
    
    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"user deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with delete user",error:err.massage})
    })
})

router.route("/get/:id").get(async(req,res)=>{

    let userId = req.params.id;

    const user = await Student.findById(userId).then(()=>{
        res.status(200).send({status:"user fetched"})
    }).catch((err)=>{
        console.log(err.massage);
        res.status(500).send({status: "error with getting student", error: err.massage})
    })
})

module.exports = router;

