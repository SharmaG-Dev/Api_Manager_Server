const ProjecModel = require("../Model/ProjectModel")
const UserModel = require("../Model/UserModel")

const CreateNewProject = async (req, res) => {
    try {
        const isCreated = await new ProjecModel(req.body).save()
        if (!isCreated) return res.status(400).json({ error: true, message: "facing issue in creating project" })
        res.status(200).json({ error: false, data: isCreated })
    } catch (error) {
        res.status(500).json({ error })
    }
}


// get all projects 
const GetAllProjects = async (req, res) => {
    const filter = {};

    for (let key in req.query) {
        filter[key] = req.query[key];
    }

    try {
        const result = await ProjecModel.find(filter)
        if (!result) return res.status(400).json({ error: true, message: 'no data found' })
        res.status(200).json({ error: false, data: result })
    } catch (error) {
        res.status(500).json({ error })
    }
}


// delete the project 
const GetDeleteProject = async (req, res) => {
    try {
        const isDeleted = await ProjecModel.findByIdAndDelete(req.params.id)
        if (!isDeleted) return res.status(404).json({ error: true, message: 'no Project found' })
        res.status(200).json({ error: false, data: isDeleted })
    } catch (error) {
        res.status(500).json({ error })
    }
}

const updateProjectById = async (req, res) => {
    try {
        const isUpdated = await ProjecModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!isUpdated) return res.status(404).json({ error: true, message: 'updation failed ' })
        res.status(200).json({ error: false, data: isUpdated })
    } catch (error) {
        res.status(500).json({ error })
    }
}


// add person in the collaborations

const AddInCollaboration = async (req, res) => {
    // colaboratepersor id 
    const { owner, id } = req.params
    try {
        const isUser = await UserModel.findById(id)
        if (!isUser) return res.status(404).json({ error: true, messag: "User have no account please create first" })
        // find the project as per owner 
        const project = await ProjecModel.findOne({ _id: owner })
        if (!project) return res.status(404).json({ error: true, messag: 'no project found your' })
        project.colaborated.push(id)
        project.save()
        res.status(200).json({ error: false, message: `successfully colaborated ${project.projectName} to ${isUser.name}` })
    } catch (error) {
        res.status(500).json({ error })
    }

}

// add person in the collaborations

const RemoveFromCollaboration = async (req, res) => {
    // colaboratepersor id 
    const { owner, id } = req.params
    try {
        // find the project as per owner 
        const project = await ProjecModel.findOne({ _id: owner })
        if (!project) return res.status(404).json({ error: true, messag: 'no project found your' })
        project.colaborated.pop(id)
        project.save()
        res.status(200).json({ error: false, message: `successfully Rmoved` })
    } catch (error) {
        res.status(500).json({ error })
    }
}


module.exports = { CreateNewProject, GetAllProjects, GetDeleteProject, updateProjectById, AddInCollaboration, RemoveFromCollaboration }