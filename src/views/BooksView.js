import React, { Component } from "react";

class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await Axios.get(https://api.themoviedb.org/3);
  
  }

  render() {
    return <h1>Это страница книг</h1>;

    <ul>
      {this.state.books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>;
  }
}
export default BooksView;
