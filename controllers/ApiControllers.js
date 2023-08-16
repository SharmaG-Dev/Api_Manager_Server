const APIModel = require("../Model/ApiModel")




const AddApi = async (req, res) => {
    try {
        const isSubmitApi = await new APIModel({
            ...req.body
        }).save()
        if (!isSubmitApi) return res.status(400).json({ error: true, message: "Api Not submit" })
        res.status(200).json({ error: false, message: "submitted successfully", data: isSubmitApi })
    } catch (error) {
        res.status(500).json({ error })
    }
}


// Get a specific API entry by ID
const GetAPIbyId = async (req, res) => {
    try {
        const api = await APIModel.findById(req.params.id);
        if (!api) {
            return res.status(404).json({ error: true, message: 'API entry not found.' });
        }
        res.status(200).json({ error: false, data: api });
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Get all APi Entry
const GetAllAPIEntry = async (req, res) => {
    const filter = {};

    for (let key in req.query) {
        filter[key] = req.query[key];
    }

    try {
        const api = await APIModel.find(filter);
        if (!api || api.length === 0) {
            return res.status(404).json({ error: true, message: 'API entry not found.' });
        }
        res.status(200).json({ error: false, data: api });
    } catch (error) {
        res.status(500).json({ error });
    }
};



// Update a specific API entry by ID
const UpdateByID = async (req, res) => {
    try {
        const updatedAPI = await APIModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedAPI) {
            return res.status(404).json({ error: true, message: 'API entry not found.' });
        }
        res.status(200).json({ error: false, data: updatedAPI });
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Delete a specific API entry by ID
const GetDeleteByID = async (req, res) => {
    try {
        const deletedAPI = await APIModel.findByIdAndDelete(req.params.id);
        if (!deletedAPI) {
            return res.status(404).json({ error: true, message: 'API entry not found.' });
        }
        res.status(200).json({ error: false, message: 'API entry deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error });
    }
};


module.exports = { AddApi, GetAPIbyId, GetAllAPIEntry, UpdateByID, GetDeleteByID }