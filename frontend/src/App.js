import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/notes/")
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Notes App 📝</h1>

      {notes.length === 0 ? (
        <p>No notes yet</p>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
