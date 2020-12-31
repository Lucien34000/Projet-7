const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const postsCtrl = require('../controllers/posts');

try {
    // Routes sur les publications
    router.get('/', auth, postsCtrl.getAllPosts);
    router.post('/', auth, postsCtrl.createPost);
    router.put('/:id', auth, postsCtrl.updatePost);
    router.delete('/:id', auth, postsCtrl.getAllPost);


    // Routes sur les commentaires
    router.get('/:id/comments', auth, postsCtrl.getComments);
    router.post('/:id/comments', auth, postsCtrl.createComment);
    router.put('/comments', auth, postsCtrl.updateComment);
    router.delete('/comments/:id', auth, postsCtrl.deleteComment);

    // ROutes sur les likes
    router.get('/likes', auth, postsCtrl.getAllLikes);
    router.post('/:id/like', auth, postsCtrl.postLike);
}catch (error) {
    console.log(error)
}


module.exports = router;