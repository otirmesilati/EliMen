const getAllPosts = (req, res) => {
    res.send("App get post");
}

const createNewPost = (req, res) => {
    res.send("App post post");
}

module.exports = {
    getAllPosts,
    createNewPost
};