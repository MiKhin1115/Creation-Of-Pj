const myAnimal =[
    {
      id: 1,
      name: "axolotl",
    },
    {
      id: 2,
      name: "crab",
    },
    { 
      id: 3,
      name: "dog",
    },
    {
      id: 4,
      name: "jelly fish",
    },
    {
      id: 5,
      name: "octopus",
    },
    {
      id: 6,
      name: "parrot",
    },
    {
      id: 7,
      name: "pig",
    },
    {
      id: 8,
      name: "slider",
    },
    {
      id: 9,
      name: "sloth",
    },
    {
      id: 10,
      name: "snake",
    },
    {
      id: 11,
      name: "squid",
    },
    {
      id: 12,
      name: "star fish",
    },
  ];
    const PopupSearchbox = document.getElementsByClassName('search-box')[0];
    const searchBar = document.getElementById('searchBar');
    
    
    function showPopupSearchbox() {
        PopupSearchbox.style.display = "block";
    }
    
    function hidePopupSearchbox() {
        PopupSearchbox.style.display = "none";
    }
 
    searchBar.addEventListener('click', (event) => {
        event.stopPropagation(); 
        showPopupSearchbox();
    });

    searchBar.addEventListener('focus', () => {
        showPopupSearchbox();
    });

    document.addEventListener('click', () => {
        hidePopupSearchbox();
    });

window.addEventListener("load", () => {
  myAnimal.forEach((element) => {
      const { name} = element;

      let card = document.createElement("a");
      card.innerHTML = `
          <div class="s-column">
          <div class="s-text">${name}</div>
          </div>`;
          PopupSearchbox.appendChild(card);
  });
});

searchBar.addEventListener('keyup', () => {
    let filter = searchBar.value.toUpperCase();
    let a = PopupSearchbox.getElementsByTagName('a');
    let noMatches = true;

    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('s-column')[0];
        let c = b.getElementsByClassName('s-text')[0];

        let TextValue = c.textContent || c.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = ''; // Show the element if it matches the filter
            noMatches = false;
        } else {
            a[i].style.display = 'none'; // Hide the element if it doesn't match the filter
        }
    }

    // If no matches were found in the list, redirect to Google search
    /*if (noMatches && filter.trim() !== '') {
        
    }*/
});
