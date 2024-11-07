// Henter data fra albums(3).json filen.
fetchData("data/albums (3).json").then((data) => {
 
    // Refererer til tablen i HTML-elementet med id="table" ved brugen af document.getElementById("table", 
    // så vi kan indsætte data i selve tabellen.
    let tableContent = document.getElementById("table");
    
    console.log(tableContent, 'Tjekker om tabellen er hentet')
    
    // Et for-loop til indsættelse af data.
    // For-loopet starter med (i = 0), hvilket betyder, at vi starter ved 0.
    // Så er der en betingelse, der tjekker, om i er mindre end længden af data-arrayet,
    // hvis den er true forsætter for-loopet, men hvis den er false, stopper for-loopet.
    // data.length viser antallet af elementer i arrayet, så i < data.length sikre, at vi ikke forsætter efter slutning af arrayet.
    // i++ beskriver, at i øger med 1, hvilket gør, at for-loopet rykker til næste element i arrayet for hver iteration.
    for (let i = 0; i < data.length; i++) {

        // Opretter en ny række for hvert album med albummets data.
        // Jeg har tilføjet ekstra information i albums (3).json, som er albumCover.
        // Der tilføjes et <img> tag for at for at vise albumCovers via igennmem URL-adresse.
        // Tilføjer også <a> tag til at linke hjemmesiderne, og target="_blank" åbner linket i en ny fane.
        let nyAlbum = 

             "<tr>" +
                "<td><img src='" + data[i].albumCover + "' alt='" + data[i].albumCover + " cover' width='150'height='150' style='border-radius: 16px;'></td>" + 
                "<td>" + data[i].albumName + "</td>" +
                "<td>" + data[i].artistName + "</td>" +
                "<td>" + data[i].productionYear + "</td>" +
                "<td>" + data[i].trackList.length + "</td>" +
                "<td><a href='" + data[i].artistWebsite + "' target='_blank'>" + data[i].artistWebsite + "</a></td>" +
            "</tr>";

        // Tilføjer den nye række til tabelens indhold
        tableContent.innerHTML += nyAlbum;
    }
});

//Taget fra Thomas' eksempel på Github
async function fetchData(url) {
    let request = await fetch(url);
    let json = await request.json();
    return json;
}