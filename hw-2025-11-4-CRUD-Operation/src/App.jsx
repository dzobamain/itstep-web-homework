import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    modalOpen: false,
    deleting: false,
    error: null,
  };

  openModal = () => {
    this.setState({ modalOpen: true, error: null });
  };

  closeModal = () => {
    if (!this.state.deleting) {
      this.setState({ modalOpen: false });
    }
  };

  deleteCategory = async () => {
    this.setState({ deleting: true, error: null });
    const id = 242;
    try {
      const res = await fetch(
        `https://lohika.itstep.click/api/Categories/delete/${id}`,
        { method: "DELETE" }
      );
      if (!res.ok) throw new Error(`Error ${res.status}`);
      alert("Category deleted!");
      this.setState({ modalOpen: false });
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ deleting: false });
    }
  };

  render() {
    const { modalOpen, deleting, error } = this.state;

    return (
      <div className="app-container">
        <h1>React Delete Example</h1>
        <button className="delete-btn" onClick={this.openModal}>
          Delete Category
        </button>

        {modalOpen && (
          <div className="modal-backdrop">
            <div className="modal">
              <h3>Are you sure?</h3>
              <p>The category will be deleted.</p>

              {error && <p className="error-text">{error}</p>}

              <div className="modal-buttons">
                <button
                  className="confirm-btn"
                  onClick={this.deleteCategory}
                  disabled={deleting}
                >
                  {deleting ? "Deleting..." : "Delete"}
                </button>
                <button
                  className="cancel-btn"
                  onClick={this.closeModal}
                  disabled={deleting}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
