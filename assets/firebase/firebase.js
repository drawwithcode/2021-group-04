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

  // retrieve the stored artworks
  onValue(artworksRef, (snapshot) => {
    // console.log(snapshot.val());
    allArtworks = snapshot.val();
    allArtworksAll = Object.values(allArtworks);

    const imageWrappre = document.getElementById("image-wraper");

    if (!imageWrappre) {
      console.log("not found");
      return;
    } else {
      console.log("Values ", allArtworksAll);
    }

    while (imageWrappre.childElementCount) {
      imageWrappre.innerHTML = "";
    }
    for (const artwork of allArtworksAll) {
      console.log(artwork);

      const el = document.createElement("div");

      el.classList.add("image-container");

      const img = document.createElement("img");
      img.src = artwork;
      img.classList.add("artwork-snapshot");

      el.appendChild(img);

      imageWrappre.appendChild(el);
    }

    // console.log("sss ", allArtworksAll);
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
