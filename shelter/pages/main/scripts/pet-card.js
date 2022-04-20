import petsDataBase from "../../shared/scripts/database.js";

function createPetCard( index ) {
    let card = document.createElement('div');
    card.className = "pet-card";
    card.innerHTML = ` <div class="pet-card__image_wrapper">
                            <img src=${petsDataBase[index].img} alt=${petsDataBase[index].name}>
                        </div>
                        <p>${petsDataBase[index].name}</p>
                        <button class="button-secondary" type="button">
                            <span>Learn more</span>
                        </button>`
    console.log(`__________${petsDataBase[index].name}___________`)                    
    return card;
}

export default createPetCard;