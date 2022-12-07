import React, { useState, useEffect } from "react";
import Dashboard from "../../pages/dashboard/Dashboard";
import { GetnotesApi, GetArchivedNotes } from "../../services/dataservice";
import Header from "../Header/Header";
import TakeNote3 from "../TakeNote3/TakeNote3";

const Archived = () => {
  let archivednotes = [];
  const [allarchivednotes, setArchivednotes] = useState(archivednotes);
  const getArchivedNotes = async () => {
    // const response = await GetArchivedNotes();
    // archivednotes = response.data.data.data;
    // setArchivednotes(archivednotes.reverse());

    const response = await GetnotesApi();
    console.log("archive", response);
    archivednotes = response.data.data;
    setArchivednotes(archivednotes.reverse());
  };

  useEffect(() => {
    getArchivedNotes();
  }, []);

  return (
    <>
      <Header />
      <div className="display-notes">
        {allarchivednotes
          .filter((note) => note.isArchived === true)
          .map((note) => {
            return <TakeNote3 key={note._id} note={note} />;
          })}
      </div>
    </>
  );
};

export default Archived;
