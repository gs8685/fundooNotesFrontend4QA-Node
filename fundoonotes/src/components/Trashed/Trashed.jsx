import React, { useState, useEffect } from "react";
import { GetnotesApi, GetTrashedNotes } from "../../services/dataservice";
import Header from "../Header/Header";
import TakeNote3 from "../TakeNote3/TakeNote3";

const Trashed = () => {
  let trashednotes = [];
  const [alltrashednotes, setTrashednotes] = useState(trashednotes);
  const getTrashedNotes = async () => {
    // const response = await GetTrashedNotes();
    // trashednotes = response.data.data.data;
    // setTrashednotes(trashednotes.reverse());

    const response = await GetnotesApi();
    trashednotes = response.data.data;
    setTrashednotes(trashednotes.reverse());
  };

  useEffect(() => {
    getTrashedNotes();
  }, []);

  return (
    <>
      <Header />
      <div className="display-notes">
        {alltrashednotes
          .filter((note) => note.isTrash === true)
          .map((note) => {
            return <TakeNote3 key={note._id} note={note} />;
          })}
      </div>
    </>
  );
};

export default Trashed;
