function showWeaponDescription(weaponName) { // Funktsisoon relvade kirjelduste kuvamiseks nuppude kõrval oleval alal. Koodi kirjutas ChatGPT (https://chat.openai.com/).
    // Get the element where the description will be displayed
    var descriptionElement = document.getElementById("relvKirjeldus");
  
    // Define descriptions for each agent (can be expanded)
    var weaponDescriptions = {
        'Classic': 'Classic: \nIga round sündides, poes 0 raha. Parema klikiga laseb ebatäpselt kolm kuuli, vasak klik on täpsem ja laseb kuule ühe kaupa.',
        'Shorty': 'Shorty: \nMaksab 300 raha, töötab ainult väga lähedalt, tasub osta üksi ainult siis kui on plaan mõne ukseava või suitsupilve kõrval või sees istuda ja seda valvata.',
        'Frenzy': 'Frenzy: \nMaksab 450 raha, kaugemalt pole erilist kasu, lähedalt kohati päris tõhus. Enamasti ostetakse pistol roaund’il või eco round’il',
        'Ghost': 'Ghost: \nMaksab 500 raha, 15 kuuli, enamjaolt ostetakse pistol round’il',
        'Sheriff': 'Sheriff: \nMaksab 800 raha, 6 kuuli, enamjaolt ostetakse raha kokkuhoiu mõttes',
        'Stinger': 'Stinger: \nMaksab 1100 raha, 20 kuuli, tulistab üsna kiirelt. Sihikuga sihtides tulistab kuule kolme kaupa. Stinger on hea valik eco round’idel, Stinger on mõistlik kasutada pigem lähedal paikneva vastase peal. Mõistlik osta raha muuks pole',
        'Spectre': 'Spectre: \nMaksab 1600 raha, 30 kuuli, tulistab aeglasemini kui Stinger kuid tänu sellele veidi täpsem ja kasutatavam ka natuke kaugemalt.',
        'Bucky': 'Bucky: \nMaksab 850 raha, 5 kuuli, vasaku klikiga tulistades on lähedalt kohati väga tõhus. Parema klikiga tulistab veidi kaugemale, lähedalt ei tee vigasta vaenlaseid eriti.',
        'Judge': 'Judge: \nMaksab 1850 raha, 12 kuuli, tulistab automaatselt mille tõttu on lähedalt väga tõhus, mida kaugemal vastasest olla, seda ebatõhusamaks muutub. ',
        'Bulldog': 'Bulldog: \nMaksab 2050 raha, tulistab automaatselt, sihikut all hoides tulistab kolme kiirema kuuli kaupa aga veidi pikemate pausidega. Mõistlik osta, kui Vandali või Phantomi jaoks raha pole, aga ülejäänud tiim saab endale paremaid relvi lubada',
        'Guardian': 'Guardian: \nMaksab 2250 raha, 12 kuuliga, pool automaatne, pähe laskmine tapab ühe lasuga. Mõistlik osta, kui raha Vandalin või Phantomi jaoks pole. Kuulid läbivad seinu hästi.',
        'Phantom': 'Phantom: \nMaksab 2900 raha, 30 kuuliga, automaatne, veidi kiirema laskmiskiirusega Vandalist, mille tõttu ei ole pähe laskmine enam iga kauguse pealt kindel surm. Phantom on enamasti mõistlik valik kui tiim ostab ja seda eriti, kui sa kavatsed lasta vastaseid lähemalt kui 15 meetrit. ',
        'Vandal': 'Vandal: \nMaksab 2900 raha, 25 kuuliga, automaatne, pead tabades sureb vastane ühe lasuga. Mõistlik valik enamikul roundidest, kui tiim ostab ja seda eriti, kui sa kavatsed tulistada vastaseid kaugemalt kui 30 meetrit.',
        'Marshal': 'Marshal: \nMaksab 950 raha, 5 kuuliga, vastaseid pähe tabades saad nad ühe lasuga maha, kehasse ja jalgadesse võtab kaks lasku. Mõistlik osta, kui tiim plaanib raha säästa aga oleks tarvis mõnda kaugemat kohta valvata.',
        'Operator': 'Operator: \nMaksab 4700 raha, 5 kuuliga, lasud pähe ja kehasse on vastaste jaoks surmavad, lask jalga võtab vastastelt 120 elu. Mõistlik osta, kui soovid mõnda kaugemat kohta valvata ja kui sul selle jaoks piisavalt raha on. Kuulid läbivad seinu hästi.',
        'Ares': 'Ares: \nMaksab 1600 raha, 50 kuuli. Tulistades soovitatav sihtida, kuna aitab kaasa tagasilöögi vastu relva kontrollimisel. Soovitatav osta, kui tiim säästab raha ja eriti, kui on plaan vastaseid läbi seinte tulistada. Kuulid läbivad seinu hästi.',
        'Odin': 'Odin: \nMaksab 3200 raha, 100 kuuli, Tulistades soovitatav sihtida, kuna see teeb tagasilöögi kontrollimise kergemaks. Soovitatav osta, kui tiim ostab ja eriti, kui on plaan vastaseid läbi seinte tulistada. Kuulid läbivad seinu hästi.',
        'Tactical Knife': 'Tactical Knife: \nAlati olemas, ei saa maha visata, nuga käes liigud kiiremini. Nuga vigastab parema klikiga -75 elu  ja vasaku klikiga -50 elu. Olles vastase seljataga on vigastused kahekordsed.'
        

      // Add descriptions for other agents similarly
    };
  
    // Set the description based on the selected agent
    var descriptionText = weaponDescriptions[weaponName];

    var paragraph = document.createElement('p');
    paragraph.innerHTML = descriptionText.replace(/\n/g, '<br>'); // Convert line breaks to HTML breaks

    paragraph.classList.add('relv-kirjeldus');

    descriptionElement.innerHTML = ''; // Clear previous content
    descriptionElement.appendChild(paragraph);
}