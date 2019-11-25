var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dog_app", { useNewUrlParser: true ,useUnifiedTopology: true});


//dog schema

var dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Dog = mongoose.model("Dog", dogSchema);

//adding a new dog
// var matt = new Dog({
//     name: "Matt",
//     age:"4",
//     temperament:"Friendly"
// });

// matt.save(function(err, dog){
//     if(err){
//         console.log("boom");
//     }
//     else{
//         console.log(dog);
//     }
// });

//create() : creates and saves
Dog.create({
    name:"spike",
    age:"3",
    temperament:"aggressive"
    }, function(err, newDog){
        if(err){
            console.log("boo");
        }else{
            console.log(newDog)
        }
    });



Dog.find({}, function(err, dogs){
    if(err){
        console.log("boom");
    }else{
         console.log(dogs);
    }
})