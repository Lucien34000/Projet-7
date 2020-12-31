const bddConnect = require('../bddConnect.js');
const mysql = require('mysql');

class Posts {
    constructor() {
    }
        getAllPosts() {
            let sql = "SELECT posts.id, posts.userId, posts.title, posts.content, DATE_FORMAT(DATE(posts.date), '%d/%m/%Y') AS date, TIME(posts.date) AS time, posts.likes, users.lastName, users.firstName FROM posts JOIN users ON posts.userId = users.id ORDER BY posts.date DESC";
            return new Promise((resolve) => {
                bddConnect.query(sql, function(err, result, fields) {
                    if (err) throw err;
                    resolve(result)
                });
            })
        }
        createPost(sqlInserts) {
            let sql = 'INSERT INTO posts VALUES(NULL, ?, ?, ?, NOW(), 0)';
            sql = mysql.format(sql, sqlInserts);
            return new Promise((resolve) => {
                bddConnect.query(sql, function(err, result, fields) {
                    if (err) throw err;
                    resolve(result)
                });
            })
        }
        updatePost(sqlInserts1, sqlInserts2) {
            let sql = 'SELECT * FROM posts where id = ?';
            sql1= mysql.format(sql1, sqlInserts1);
            return new Promise((resolve) => {
                bddConnect.query(sql1, function (err, result, fields){
                    if (err) throw err;
                    if (sqlInserts2[3] == result[0].userId){
                        let sql2 = 'UPDATE posts SET title = ?, content = ?, WHERE id = ? AND userId = ?';
                        sql2 = mysql.format(sql2, sqlInserts2);
                        bddConnect.query(sql2, function (err, result, fields){
                            if (err) throw err;
                            resolve({message : 'Votre publication à été modifée !'});
                        })
                    } else {
                        reject({error: 'Vous ne pouvez pas modifier cette publication.'});
                    }
                });
            })
        }
        deletePost(sqlInserts1, sqlInserts2) {
            let sql = 'SELECT * FROM posts where id = ?';
            sql1 = mysql.format(sql1, sqlInserts1);
            return new Promise((resolve, reject) => {
                bddConnect.query(sql1, function (err, result, fields){
                    if (err) throw err;
                    if(sqlInserts2[1] == result[0].userId){
                        let sql2= 'DELETE FROM posts WHERE id = ? AND userId = ?';
                        sql2 = mysql.format(sql2, sqlInserts2);
                        bddConnect.query(sql2, function (err, result, fields){
                            if (err) throw err;
                            resolve({message: 'Votre publication à été supprimé !'});
                        })
                    } else {
                        reject({error: 'Vous ne pouvez pas supprimer cette publication.'})
                    }
                });
            })
        }


        getAllComments(sqlInserts) {
            let sql = "SELECT comments.comContent, DATE_FORMAT(comments.date, '%d/%m/%Y à %H:%i:%s') AS date, comments.id, comments.userId, users.firstName, users.lastName FROM comments JOIN users on comments.userId = users.id WHERE postId = ? ORDER BY date";
            sql = mysql.format(sql, sqlInserts);
            return new Promise((resolve) => {
                bddConnect.query(sql, function(err, result, fields) {
                    if (err) throw err;
                    resolve(result)
                });
            })
        }
        createComment(sqlInserts) {
            let sql = 'INSERT INTO comments VALUES(NULL, ?, ?, ?, NOW(), 0)';
            sql = mysql.format(sql, sqlInserts);
            return new Promise((resolve) => {
                bddConnect.query(sql, function(err, result, fields) {
                    if (err) throw err;
                    resolve({message : 'Vous venez de poster un nouveau commentaire !'})
                });
            })
        }
        updateComment(sqlInserts1, sqlInserts2) {
            let sql = 'SELECT * FROM comments where id = ?';
            sql1= mysql.format(sql1, sqlInserts1);
            return new Promise((resolve) => {
                bddConnect.query(sql1, function (err, result, fields){
                    if (err) throw err;
                    if (sqlInserts2[3] == result[0].userId){
                        let sql2 = 'UPDATE comments SET comContent = ? WHERE id = ? AND userId = ?';
                        sql2 = mysql.format(sql2, sqlInserts2);
                        bddConnect.query(sql2, function (err, result, fields){
                            if (err) throw err;
                            resolve({message : 'Votre commentaire à été modifé !'});
                        })
                    } else {
                        reject({error: 'Vous ne pouvez pas modifier ce commentaire.'});
                    }
                });
            })
        }
        deleteComment(sqlInserts1, sqlInserts2) {
            let sql = 'SELECT * FROM comments where id = ?';
            sql1 = mysql.format(sql1, sqlInserts1);
            return new Promise((resolve, reject) => {
                bddConnect.query(sql1, function (err, result, fields){
                    if (err) throw err;
                    if(sqlInserts2[1] == result[0].userId){
                        let sql2= 'DELETE FROM comments WHERE id = ? AND userId = ?';
                        sql2 = mysql.format(sql2, sqlInserts2);
                        bddConnect.query(sql2, function (err, result, fields){
                            if (err) throw err;
                            resolve({message: 'Votre commentaire à été supprimé !'});
                        })
                    } else {
                        reject({error: 'Vous ne pouvez pas supprimer ce commentaire.'})
                    }
                });
            })
        }


        getAllLikes(){
            let sql = 'SELECT * FROM likes';
            return new Promise((resolve) => {
                bddConnect.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    resolve(result);
                });
            })
        }
        postLike(sqlInserts1, sqlInserts2, liked){
            let sql1 = 'INSERT INTO likes VALUES (NULL, ? ?)';
            sql1 = mysql.format(sql1, sqlInserts1);
            let sql2 = 'UPDATE posts SET likes = ? WHERE id = ?';
            sql2 = mysql.format(sql2, sqlInserts2);
            let sql3 = 'DELETE FROM likes WHERE postId = ? AND userId = ?';
            sql3 = mysql.format(sql3, sqlInserts1);
            return new Promise((resolve) =>{
                bddConnect.query(sql2, function (err, result, fields){
                    if (err) throw err;
                });
                if (liked === false){
                    bddConnect.query(sql1, function (err, result, fields){
                        if (err) throw err;
                        resolve({message: 'Like !'})
                    })
                }
                if (liked === true){
                    bddConnect.query(sql3, function(err, result, fields){
                        if (err) throw err;
                        resolve({message : 'Like annulé.'})
                    })
                }
            })
        }
}

module.exports = Posts;