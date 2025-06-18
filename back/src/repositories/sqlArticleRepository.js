//
//  This repository shall:
//  - Connect to the database (using the pool provided by the database.js)
// -  Perfrom the SQL querries to implement the bellow API
//

// Get all articles
export async function getArticles() {
    // TODO
    const [rows] = await pool.query("SELECT * FROM articles");
    return rows;
}

// Get one article by ID
export async function getArticleById(id) {
    // TODO
    const [rows] = await pool.query("SELECT * FROM articles WHERE id = ?", [id]);
    return rows[0];
}

// Create a new article
export async function createArticle(article) {
    // TODO
    const { title, content, journalist, category } = article;
    const [result] = await pool.query("INSERT INTO articles (title, content, journalist, category) VALUES (?, ?, ?, ?)",[title, content, journalist, category]);
    return result.insertId;
}

// Update an article by ID
export async function updateArticle(id, updatedData) {
    // TODO
    const { title, content, journalist, category } = updatedData;
    await pool.query("UPDATE articles SET title = ?, content = ?, journalist = ?, category = ? WHERE id = ?",[title, content, journalist, category, id]);
}

// Delete an article by ID
export async function deleteArticle(id) {
    // TODO
    await pool.query("DELETE FROM articles WHERE id = ?", [id]);
}
