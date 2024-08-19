const { Task } = require("../models/task");


//render all task
const taskIndex = (req, res) => {
    if(!req.user) return res.redirect("/login");
    Task.find({createdBy:req.user._id})
        .then(tasks => {
            res.render('home', { tasks })
        })
        .catch(err => {
            console.error(err);
            res.status(500).send();
        })
}

//get addtask page
const newTask = (req, res) => {
    res.render("new");
}

//post the task
const postTask = async (req, res) => {
    const { title, description } = req.body;
    if(title && description){
        if(!req.user) return res.redirect("/login");
        const task = new Task({title , description ,createdBy:req.user._id});
        try {
            await task.save();
            res.redirect("/task");
        } catch (err) {
            console.error(err);
        }
    }
}

// view the task and details
const taskDetails = (req, res) =>{
    let {id} = req.params;
    Task.findById(id)
        .then(task => {
            res.render("view" , {task});
        })
        .catch((err) => console.error(err));
}

//edit the task 
const editTaskGet = (req,res)=>{
    const {id } = req.params;

    Task.findById(id)
        .then((task)=> res.render("edit" , {task}))
        .catch((err) => console.error(err));
}

//editTaskPut
const editTaskPost = (req,res)=>{
    const {id} = req.params;
    const {title , description} = req.body;
    if(title && description){
        Task.findByIdAndUpdate(id , {title , description})
            .then((_) => res.redirect(`/task/${id}`))
            .catch((err) => console.error(err));
    }
}

//delet Task 
const deleteTask = (req, res)=>{
    const { id } = req.params;

    Task.findByIdAndDelete(id)
        .then((_) => res.redirect(`/task`))
        .catch((err) => console.error(err));
}


module.exports = {
    taskIndex,
    newTask,
    postTask,
    taskDetails,
    editTaskGet,
    deleteTask,
    editTaskPost
}