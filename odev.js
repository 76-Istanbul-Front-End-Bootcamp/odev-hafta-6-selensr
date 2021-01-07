import { addPet } from "./petappmodule";


window.removePet = (id) => {
      fetch(`${window.mockApiUrl}${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
};

window.openPetDetail = (id) => {
    console.log(id); // show details of the pet with given id
};
