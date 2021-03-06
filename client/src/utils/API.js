import axios from "axios";

export default {
    getPersons: function() {
        return axios.get("/api/user");
    },
    getPerson: function(id) {
        return axios.get("/api/user/" + id);
    },
    deletePerson: function(id) {
        return axios.delete("/api/user/" + id);
    },
    createPerson: function(personData) {
        return axios.post("/api/user", personData);
    }
};
// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
