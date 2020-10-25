var express = require('express');
var router = express.Router();

const Post = require('../model/postModel');
const dashboard = require('../model/dashboard');

/* GET home page. */
router.get('/post', async (req, res) => {
    
    let posts;
    try{
        await Post.fetchAll().then( ([rows]) => {
            console.log(JSON.stringify(rows));

            posts = rows;
        });
        res.render('./posts', { title: 'Posts', data: posts});

    }catch(err){
        console.log(err);
    }
});

router.get('/details', async (req, res) => {
    
    res.render('./details', { title: 'Posts'});

});

router.get('/dashboard', async (req, res) => {
    let data = {};

    try{
        await dashboard.fetchAll().then( ([rows]) => {
            console.log(JSON.stringify(rows));
            data.posts = rows;
        });

        await dashboard.get_post_count().then( ([rows]) => {
            console.log(JSON.stringify(rows));
            data.post_count = rows[0].post_count;
        });

        await dashboard.get_category_count().then( ([rows]) => {
            console.log(JSON.stringify(rows));
            data.category_count = rows[0].category_count;
        });

        await dashboard.get_user_count().then( ([rows]) => {
            console.log(JSON.stringify(rows));
            data.user_count = rows[0].user_count;
        });

        res.render('./dashboard', { title: 'Dashboard', data});

    }catch(err){
        console.log(err);
    }

});

module.exports = router;
