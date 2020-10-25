const db = require('../utils/database');

const Post = class Post {
    constructor(id, title, user_id, cat_id, date, article) {
        this.id = id;
        this.title = title;
        this.user_id = user_id;
        this.cat_id = cat_id;
        this.date = date;
        this.article = article;
    }

    static fetchAll() {
        return db.execute('select P.id, P.title, U.name, C.title as category, P.date, article from post_89 as P, category_89 as C, user_89 as U where P.cat_id = C.id and P.user_id = U.id');
    }

}

// test
// const test = async (req, res) => {
//     try{
//         await Post.fetchAll().then( ([rows]) => {
//             console.log(JSON.stringify(rows));
//         });
//     }catch(err){
//         console.log(err);
//     }
// }

// test();

module.exports = Post;