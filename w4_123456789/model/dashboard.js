const db = require('../utils/database');

const dashboard = class dashboard {
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

    static get_post_count(){
        return db.execute('select count(id) as post_count from post_89');
    }
    
    static get_category_count(){
        return db.execute('select count(id) as category_count from category_89');
    }

    static get_user_count(){
        return db.execute('select count(id) as user_count from user_89');
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

module.exports = dashboard;