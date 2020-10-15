import React, { useState } from "react";
import HeaderLogin from "./HeaderLogin";
import HeaderLogout from "./HeaderLogout";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Login from "./LoginPage";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path = "/">
              <HeaderLogin/>
              <Login />
              <Footer />
            </Route>
            <Route exact path ="/auth/twitter/callback">
              <HeaderLogout/>
              <CreateArea onAdd={addNote} />
              {notes.map((noteItem, index) => {
                return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />;
              })}
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
