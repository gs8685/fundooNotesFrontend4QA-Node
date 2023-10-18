import axios from "axios";

const headerConfig = {
  headers: {
    //for bridgelabz backend
    // Authorization: localStorage.getItem("fundooToken"),

    Authorization: `Bearer ${localStorage.getItem("MyfundooToken")}`,
  },
};

export const CreatnoteApi = (note) => {
  let response = axios.post(
    "http://localhost:3000/api/v1/notes",
    note,
    headerConfig
  );
  return response;
};

export const GetnotesApi = () => {
  let response = axios.get("http://localhost:3000/api/v1/notes", headerConfig);
  console.log(response);
  return response;
};

export const UpdatecolorApi = (color) => {
  let response = axios.put(
    `http://localhost:3000/api/v1/notes/${color._id}/colorupdate`,
    color,
    headerConfig
  );
  console.log(response);
  return response;
};

export const UpdateArchiveApi = (archive) => {
  console.log(archive);

  let response = axios.put(
    `http://localhost:3000/api/v1/notes/${archive._id}/archive`,
    archive,
    headerConfig
  );

  console.log("note archive api");
  return response;
};
export const UpdateTrashApi = (trash) => {
  let response = axios.put(
    `http://localhost:3000/api/v1/notes/${trash._id}/trash`,
    trash,
    headerConfig
  );
  console.log("note trash api");
  return response;
};

export const EditnoteApi = (update) => {
  let response = axios.put(
    `http://localhost:3000/api/v1/notes/${update._id}`,
    update,
    headerConfig
  );
  console.log("note updated");
  console.log(response);
  return response;
};

// export const GetTrashedNotes = () => {
//   let response = axios.get(
//     "http://fundoonotes.incubation.bridgelabz.com/api/notes/getTrashNotesList",
//     headerConfig
//   );
//   console.log("trashed notes", response);
//   return response;
// };

// export const GetArchivedNotes = () => {
//   let response = axios.get(
//     "http://fundoonotes.incubation.bridgelabz.com/api/notes/getArchiveNotesList",
//     headerConfig
//   );
//   console.log("archived notes", response);
//   return response;
// };
