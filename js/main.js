//persistencia en memoria de personajes
// const character_data = [
//   {
//     photo:
//       "https://i.pinimg.com/564x/c3/2e/a6/c32ea6ae8a4ce8add9777ba7826be322.jpg",
//     name: "Gnomo1",
//     race: "Gnomo",
//     defense: 14,
//     initiative: 2,
//   },
//   {
//     photo:
//       "https://i.pinimg.com/564x/c3/2e/a6/c32ea6ae8a4ce8add9777ba7826be322.jpg",
//     name: "Gnomo2",
//     race: "Gnomo",
//     defense: 16,
//     initiative: 3,
//   },
//   {
//     photo:
//       "https://i.pinimg.com/564x/c3/2e/a6/c32ea6ae8a4ce8add9777ba7826be322.jpg",
//     name: "Gnomo3",
//     race: "Gnomo",
//     defense: 17,
//     initiative: 4,
//   },
// ];
const character_data = JSON.parse(localStorage.getItem("characters"));

//renderizar personajes
function renderCharacter() {
  let character_table = document.getElementById("character-table");
  let character_rows = "";
  character_data.forEach((character) => {
    character_rows += `<tr>
                            <td><img src="${character.photo}"
                                    alt="${character.name} photo" class="character-img center">
                            </td>
                            <td>${character.name}</td>
                            <td>${character.race}</td>
                            <td>${character.defense}</td>
                            <td>+${character.initiative}</td>
                            <td class="text-center">
                                <button class="btn btn-danger px-1" onclick="borrarPais()">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>`;
  });
  character_table.innerHTML = character_rows;
}

//Manejador de carga de personajes
const character_form = document.getElementById("character-form");
character_form.addEventListener("submit", (event) => {
  event.preventDefault();

  let new_character = {
    photo: event.target.elements.photo.value,
    name: event.target.elements.name.value,
    race: event.target.elements.race.value,
    defense: Number(event.target.elements.defense.value),
    initiative: Number(event.target.elements.initiative.value),
  };

  character_data.push(new_character);
  let data_json = JSON.stringify(character_data);
  localStorage.setItem("characters", data_json);
  renderCharacter();
});

renderCharacter();
