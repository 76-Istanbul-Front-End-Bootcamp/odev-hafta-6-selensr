
const $modalElement = document.createElement("div");
$modalElement.setAttribute("id", "modalcontainer");
document.body.appendChild($modalElement);

window.mockApiUrl = "https://5ff193d0db1158001748b15e.mockapi.io/pets/";

window.removePet = (id) => {
  fetch(`${window.mockApiUrl}${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(() => {
      const $cardEl = document.querySelector(`#pet${id}`);
      $cardEl.style.display = "none";
      window.isEditing = false;
      //location.reload();
    });
};

window.closeModal = () => {
  document.getElementById("backdrop").style.display = "none";
  document.getElementById("exampleModal").style.display = "none";
  document.getElementById("exampleModal").className += document
    .getElementById("exampleModal")
    .className.replace("show", "");
};

window.openPetDetail = (id) => {
  fetch(`${window.mockApiUrl}${id}`)
    .then((response) => response.json())
    .then((pet) => {
      const petModalHTML = `
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true"
      role="dialog">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                <h5 class="card-title">${pet.name}</h5>
              </div>
              <div class="modal-body">
                <img src=${pet.image} class="card-img-top" >
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Close</button>
              </div>
          </div>
      </div>
  </div>
    <div class="modal-backdrop fade show" id="backdrop" style="display: none;"></div>
    `;

      document.querySelector("#modalcontainer").innerHTML = petModalHTML;

      document.getElementById("backdrop").style.display = "block";
      document.getElementById("exampleModal").style.display = "block";
      document.getElementById("exampleModal").className += "show";
    });
};
