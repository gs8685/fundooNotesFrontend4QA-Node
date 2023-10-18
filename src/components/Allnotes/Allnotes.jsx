import React, { useState, useEffect } from "react";
import TakeNote3 from "../TakeNote3/TakeNote3";
import { GetnotesApi } from "../../services/dataservice";
import "./allnotes.css";

const Allnotes = () => {
  let getnotes = [];
  const [allnotes, setAllnotes] = useState(getnotes);
  const getNotes = async () => {
    const response = await GetnotesApi();
    console.log(response);
    getnotes = response.data.data;
    setAllnotes(getnotes.reverse());
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div className="display-notes">
        {allnotes
          .filter((note) => note.isArchived === false)
          .filter((note) => note.isTrash === false)
          .map((note) => {
            return <TakeNote3 key={note._id} note={note} getNotes={getNotes} />;
          })}
      </div>
    </>
  );
};

export default Allnotes;
