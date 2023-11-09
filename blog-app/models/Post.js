const db = require("../config/db");

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  async save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;
    let sql = `
    INSERT INTO posts(
        title,
        body,
        created_at
    )
    VALUES(
        '${this.title}',
        '${this.body}',
        '${createdAtDate}'        
    );`;

    await db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM posts;";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id = ${id};`;
    return db.execute(sql);
  }

  // Kenttien muuttaminen (tehtävä 5)
  static changeById(id, title, body) {
    let sql = `
    UPDATE posts
    SET title = '${title}', body = '${body}'
    WHERE id = ${id};
    `;
    return db.execute(sql);
  }

  // Kenttien poistaminen (tehtävä 5)
  static deleteById(id) {
    let sql = `
    DELETE FROM posts
    WHERE id = ${id};
    `;
    return db.execute(sql);
  }
}

module.exports = Post;
