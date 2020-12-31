const jwt = require('jsonwebtoken');
const PostsModels = require ('../models/Posts.js');


let postsModels = new PostsModels();


// Posts controllers


exports.getAllPosts = (req, res, next) => {
    postsModels.getAllPosts()
        .then((response) => {
            res.status(200).json(JSON.stringify(response));
        })
}
exports.createPost = (req, res, next) => {
    let title = req.body.title;
    let userId = req.body.userId;
    let content = req.body.content;
    let sqlInserts = [userId,title, content];
    postsModels.createPost(sqlInserts)
        .then((response) => {
            res.status(201).json(JSON.stringify(response));
        })
}
exports.updatePost = (req, res, next) => {
    const token = req.headers.autorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    let title = req.body.title;
    let content = req.body.content;
    let postId = req.params.id;
    let sqlInserts1 = [postId];
    let sqlInserts2 = [title, content, postId, userId];
    postsModels.updatePost(sqlInserts1, sqlInserts2)
        .then((response) =>{
            res.status(201).json(JSON.stringify(response));
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(JSON.stringify(error));
        })
}
exports.deletePost = (req, res, next) => {
    const token = req.headers.autorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    let postId = req.params.id;
    let sqlInserts1 = [postId];
    let sqlInserts2 = [postId, userId];
    postsModels.deletePost(sqlInserts1, sqlInserts2)
        .then((response) =>{
            res.status(201).json(JSON.stringify(response));
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(JSON.stringify(error));
        })
}

// Comments controllers 

exports.getComments = (req, res, next) => {
    let postId = req.params.id;
    let sqlInserts = [postId];
    postsModels.getComments(sqlInserts)
        .then((response) => {
            res.status(200).json(JSON.stringify(response));
        })
}
exports.createComment = (req, res, next) => {
    let postId = req.params.postId;
    let userId = req.body.userId;
    let content = req.body.content;
    let sqlInserts = [userId, postId, content];
    postsModels.createComment(sqlInserts)
        .then((response) => {
            res.status(201).json(JSON.stringify(response));
        })
}
exports.updateComment = (req, res, next) => {
    const token = req.headers.autorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    let content =req.body.content;
    let commentId = req.params.commentId;
    let sqlInserts1 = [commentId];
    let sqlInserts2 = [ content, commentId, userId];
    postsModels.updateComment(sqlInserts1, sqlInserts2)
        .then((response) => {
            res.status(201).json(JSON.stringify(response));
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(JSON.stringify(error));
        })
}
exports.deleteComment = (req, res, next) => {
    let commentId = req.body.commentI;
    let sqlInserts = [commentId];
    postsModels.deleteComment(sqlInserts)
        .then((response) => {
            res.status(200).json(JSON.stringify(response));
        })
}
exports.deleteComment = (req, res, next) => {
    const token = req.headers.autorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    let commentId = req.params.id;
    let sqlInserts1 = [commentId];
    let sqlInserts2 = [commentId, userId];
    postsModels.deletePost(sqlInserts1, sqlInserts2)
        .then((response) =>{
            res.status(201).json(JSON.stringify(response));
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(JSON.stringify(error));
        })
}


// Likes controllers


exports.getAllLikes = (req, res, next) => {
    postsModels.getAllLikes()
        .then((response) => {
            res.status(200).json(JSON.stringify(response));
        })
}
exports.postLike = (req, res, next) => {
    let userId = req.body.userId;
    let nbLikes = req.body.nbLikes;
    let postId = req.body.postId;
    let sqlInserts1 = [postId, userId];
    let sqlInserts2 = [nbLikes, postId];
    postsModels.postLike(sqlInserts1, sqlInserts2, req.body.liked)
        .then((response) => {
            res.status(201).json(JSON.stringify(response))
        })
}