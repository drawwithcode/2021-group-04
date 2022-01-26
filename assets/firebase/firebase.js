let allArtworks; // contains all artworks

// load and initialize Firebase
async function firebaseSetup() {
  // load firebase modules using import("url")
  const fbApp = "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  const fbDatabase =
    "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

  // load functions
  const { initializeApp } = await import(fbApp);
  const { getDatabase, ref, push, set, onValue } = await import(fbDatabase);

  // firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCpJjiNjUB6No4oeokno1r3_51gMgWKV_o",
    authDomain: "metanoise-fe0c8.firebaseapp.com",
    projectId: "metanoise-fe0c8",
    storageBucket: "metanoise-fe0c8.appspot.com",
    messagingSenderId: "976903454500",
    appId: "1:976903454500:web:3f96d3a67d3435d050fdb1",
    databaseURL:
      "https://metanoise-fe0c8-default-rtdb.europe-west1.firebasedatabase.app/",
  };

  // initialize Firebase
  const app = initializeApp(firebaseConfig);

  // initialize Database
  const database = getDatabase(app);

  // database reference
  const artworksRef = ref(database, "artworks");

  // retrieve the stored artworks and put them inside the grid randomly
  onValue(artworksRef, (snapshot) => {
    // console.log(snapshot.val());
    allArtworks = snapshot.val();
    allArtworksArray = Object.values(allArtworks);

    const imageWrapper = document.getElementById("image-wrapper");

    if (!imageWrapper) {
      console.log("the image-wrapper element was not found");
      return;
    } else {
      console.log("values: ", allArtworksArray);
    }

    while (imageWrapper.childElementCount) {
      imageWrapper.innerHTML = "";
    }

    let i = 0;
    for (const artwork of allArtworksArray) {
      // add noise, like noise(i) * 5
      // generate a number
      let span = Math.floor(Math.random() * 3);

      // add a random number of empty elements before another image
      for (let x = 0; x < span; x++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("image-container");
        imageWrapper.appendChild(emptyDiv);
      }

      // add an artwork
      const el = document.createElement("div");
      el.classList.add("image-container");
      const img = document.createElement("img");
      img.src = artwork;
      img.classList.add("artwork-snapshot");
      el.appendChild(img);
      imageWrapper.appendChild(el);

      i++;
    }
  });

  // add an artwork
  addArtwork = (data) => {
    // create a reference
    const newArtworkRef = push(artworksRef);
    // add data to the database
    set(newArtworkRef, data);
  };
}

firebaseSetup();
