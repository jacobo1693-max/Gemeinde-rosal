// ============================================================================
// calendar-data.js — Gemeinsame Kalenderdaten für gemeindegottesrosal.org
// Wird sowohl von index.html als auch von kalender.html eingebunden, damit
// Termine nur an EINER Stelle gepflegt werden müssen.
// ============================================================================

// ---------------------------------------------------------------
// Kalenderdaten pro Monat. Jeder Eintrag hat:
//   events:   { Tag: [ {c: Farbe, t: Text}, ... ] }
//   upcoming: [ {badge, icon, date, title, desc}, ... ]  -> "Zukünftiges"
// Um einen neuen Monat hinzuzufügen, einfach einen weiteren
// Eintrag "JAHR-MONAT" (Monat 1-12) nach demselben Muster ergänzen.
// ---------------------------------------------------------------
const monthsData = {

  "2026-6": {
    label: "Juni 2026",
    events: {
      3: [ {c:'gold', t:'6:30 pm – Gitarren üben'}, {c:'blue', t:'7:30 pm – Gebetsstunde'} ],
      5: [ {c:'blue', t:'7:30 pm – Jugendstunde'} ],
      7: [ {c:'gold', t:'Frauenchor üben'}, {c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'}, {c:'gold', t:'5:00 pm – Minijugend'} ],
      8: [ {c:'green', t:'7:00 pm – Programm Centro Luz en mi Camino (Gruppe 1)'} ],
      10: [ {c:'blue', t:'7:30 pm – Gebetsstunde'} ],
      11: [ {c:'grey', t:'Kein Frauen-Bibelstudium'} ],
      12: [ {c:'blue', t:'7:30 pm – Jugendstunde'} ],
      14: [ {c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'} ],
      17: [ {c:'blue', t:'7:30 pm – Gebetsstunde'}, {c:'green', t:'Kinderstunde'} ],
      19: [ {c:'blue', t:'7:30 pm – Jugendstunde'} ],
      20: [ {c:'gold', t:'7:00 am – Männerfrühstück – Pizzería La Sierra'} ],
      21: [ {c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'} ],
      24: [ {c:'green', t:'Ferienbibelschule'} ],
      25: [ {c:'green', t:'Ferienbibelschule'} ],
      26: [ {c:'green', t:'Ferienbibelschule'} ],
      28: [ {c:'purple', t:'Jugendfreizeit (Ruidoso)'} ],
      29: [ {c:'purple', t:'Jugendfreizeit (Ruidoso)'} ],
      30: [ {c:'purple', t:'Jugendfreizeit (Ruidoso)'} ],
    },
  },

  "2026-7": {
    label: "Juli 2026",
    events: {
      1: [ {c:'gold', t:'6:30 pm – Gitarren üben'}, {c:'blue', t:'7:30 pm – Gebetsstunde'} ],
      3: [ {c:'grey', t:'Keine Jugendstunde'} ],
      5: [ {c:'gold', t:'Gemeindechor üben'}, {c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'} ],
      8: [ {c:'blue', t:'7:30 pm – Gebetsstunde'} ],
      9: [ {c:'grey', t:'Kein Frauen-Bibelstudium und Gebetsstunde'} ],
      10: [ {c:'blue', t:'7:30 pm – Jugendstunde'} ],
      12: [ {c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'}, {c:'gold', t:'5:00 pm – Mini-Jugend'} ],
      15: [ {c:'blue', t:'7:30 pm – Gebetsstunde'} ],
      17: [ {c:'blue', t:'7:30 pm – Jugendstunde'} ],
      18: [ {c:'grey', t:'Das Männerfrühstück fällt aus'} ],
      19: [ {c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'}, {c:'gold', t:'5:00 pm – Gemeinschaftsabend'} ],
      22: [ {c:'blue', t:'7:30 pm – Gebetsstunde'} ],
      23: [ {c:'grey', t:'Kein Frauen-Bibelstudium'} ],
      24: [ {c:'blue', t:'7:30 pm – Jugendstunde'} ],
      26: [ {c:'gold', t:'Kinderchor üben'}, {c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'} ],
      29: [ {c:'gold', t:'6:30 pm – Gitarren üben'}, {c:'blue', t:'7:30 pm – Gebetsstunde und Kinderstunde'} ],
      31: [ {c:'grey', t:'Keine Jugendstunde in Rosal'}, {c:'blue', t:'7:30 pm – Jugendstunde in Neustadt'} ],
    },
  },

  "2026-8": {
    label: "August 2026",
    events: {
      2: [ {c:'gold', t:'Frauenchor üben'}, {c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'} ],
      5: [ {c:'blue', t:'7:30 pm – Gebetsstunde'} ],
      7: [ {c:'blue', t:'7:30 pm – Jugendstunde'} ],
      9: [ {c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'}, {c:'gold', t:'5:00 pm – Mini-Jugend'} ],
      12: [ {c:'blue', t:'7:30 pm – Gebetsstunde'} ],
      13: [ {c:'grey', t:'Kein Frauen-Bibelstudium und Gebetsstunde'} ],
      14: [ {c:'purple', t:'Gemeindeausflug'}, {c:'blue', t:'Jugendstunde'} ],
      15: [ {c:'purple', t:'Gemeindeausflug mit Campo 101 in Sainapochi'} ],
      16: [ {c:'grey', t:'Kein Gottesdienst in Rosal'}, {c:'purple', t:'Gemeindeausflug mit Neustadt zusammen in Sainapuchi'} ],
      19: [ {c:'blue', t:'7:30 pm – Gebetsstunde'} ],
      21: [ {c:'blue', t:'7:30 pm – Jugendstunde'} ],
      23: [ {c:'gold', t:'Kinderchor üben'}, {c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'} ],
      26: [ {c:'blue', t:'7:30 pm – Gebetsstunde und Kinderstunde'} ],
      27: [ {c:'grey', t:'Kein Frauen-Bibelstudium'} ],
      28: [ {c:'blue', t:'7:00 pm – Jugendstunde in Neustadt'} ],
    },
  },

  "2026-9": {
    label: "September 2026",
    events: {
      4: [ {c:'grey', t:'Keine Jugendstunde'} ],
      14: [ {c:'green', t:'7:00 pm – Programm Centro Luz en mi Camino (Gruppe 2)'}, {c:'grey', t:'Wenn es dir nicht möglich ist mitzumachen, suche dir bitte selbst einen Ersatz, damit die Gruppe vollständig ist'}, {c:'grey', t:'Bitte bring auch dein Glaubenslieder-Buch mit'} ],
      18: [ {c:'grey', t:'Keine Jugendstunde'} ],
      20: [ {c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'}, {c:'gold', t:'Heute 5:00 pm – Gemeinschaftsabend im Gym: Abendbrot, jeder bringt Essen und Getränke mit, Kaffee wird gestellt'}, {c:'grey', t:'Diese Woche sind unsere Abendversammlungen. Sie fangen am Mittwoch an. Alle sind herzlich eingeladen — ihr könnt auch Freunde und Familie mitbringen'} ],
      23: [ {c:'purple', t:'7:30 pm – Abendversammlung mit Br. David Knelsen – Thema: „Gottes Weg folgen"'} ],
      24: [ {c:'gold', t:'9:00 am – Frauenfrühstück und Bibelstudium – Restaurant La Huerta km 10 – mit Karina Knelsen'}, {c:'purple', t:'7:30 pm – Abendversammlung mit Br. David Knelsen – Thema: „Auf dem schmalen Weg bleiben"'} ],
      25: [ {c:'purple', t:'7:30 pm – Abendversammlung mit Br. David Knelsen – Thema: „Die Weisheit der Welt"'}, {c:'gold', t:'Jugendstunde mit Neustadt zusammen nach dem Gottesdienst mit einem kleinen Imbiss in Rosal'} ],
      26: [ {c:'gold', t:'7:00 am – Männer-Gebetsfrühstück – Pizzería La Sierra km 6 – mit Br. David Knelsen – Thema: „Nicht sehen wollen"'} ],
      27: [ {c:'blue', t:'10:00 am – Gottesdienst mit Br. David Knelsen – Thema: „Worauf wartet Jesus?"'}, {c:'gold', t:'Gemeinsames Mittagessen in der Gym'} ],
    },
  },

  "2026-10": {
    label: "Oktober 2026",
    events: {
      2: [ {c:'blue', t:'7:30 pm – Jugendstunde'} ],
      9: [ {c:'grey', t:'Keine Jugendstunde'} ],
      16: [ {c:'blue', t:'7:30 pm – Jugendstunde'} ],
      17: [ {c:'gold', t:'7:00 am – Männer-Gebetsfrühstück'} ],
      23: [ {c:'grey', t:'Keine Jugendstunde'} ],
      27: [ {c:'gold', t:'9:00 am – Frauenstunde'} ],
      30: [ {c:'blue', t:'7:00 pm – Jugendstunde in Neustadt'} ],
      18: [ {c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'}, {c:'blue', t:'3:30 pm – Männer- und Jungsabend im Gimnasio der Gemeinde Gottes Campo 101, Film „The Forge / La Forga", alle Männer und Jungen ab dem Jugendalter sind eingeladen'}, {c:'gold', t:'Abendessen & Gemeinschaft folgt'} ],
    },
  },

  "2026-11": {
    label: "November 2026",
    events: {
      6: [ {c:'grey', t:'Keine Jugendstunde'} ],
      8: [ {c:'red', t:'10:00 am – Erntedankfest'}, {c:'gold', t:'Gemeinsames Mittagessen für die ganze Gemeinde'} ],
      13: [ {c:'blue', t:'7:30 pm – Jugendstunde'} ],
      20: [ {c:'grey', t:'Keine Jugendstunde'} ],
      21: [ {c:'gold', t:'7:00 am – Männer-Gebetsfrühstück'} ],
      22: [ {c:'gold', t:'Kinderchor üben'}, {c:'blue', t:'10:00 am – Hauptgottesdienst (keine Sonntagsschule)'}, {c:'purple', t:'Verordnung Abendmahl'} ],
      24: [ {c:'gold', t:'9:00 am – Frauenstunde'} ],
      27: [ {c:'blue', t:'7:00 pm – Jugendstunde in Neustadt'} ],
    },
  },

  "2026-12": {
    label: "Dezember 2026",
    events: {
      13: [ {c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'}, {c:'purple', t:'5:00 pm – Singabend in der Kirche, nach dem Abendbrot im Gym'} ],
      17: [ {c:'green', t:'Weihnachtsprogramm der Schule'} ],
      19: [ {c:'grey', t:'Kein Männerfrühstück'} ],
      23: [ {c:'grey', t:'Keine Gebetsstunde'} ],
      25: [ {c:'red', t:'10:00 am – Weihnachtsbotschaft'} ],
      30: [ {c:'grey', t:'Keine Gebetsstunde'} ],
      31: [ {c:'purple', t:'6:00 pm – Silvesterabend'} ],
    },
  },

  "2027-1": {
    label: "Januar 2027",
    events: {
      1: [ {c:'gold', t:'10:00 am – Neujahrsgottesdienst'} ],
      20: [ {c:'gold', t:'6:30 pm – Geschäftsversammlung'} ],
    }
  },

  "2027-5": {
    label: "Mai 2027",
    events: {
      12: [ {c:'green', t:'Musikabend der Schule'} ],
    }
  }

};
function dotClass(c){ return 'dot dot-' + c; }
const MONTH_ABBR_DE = ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'];
function monthAbbrevDE(month1to12){ return MONTH_ABBR_DE[month1to12 - 1]; }

// aktueller angezeigter Monat: automatisch der heutige Monat
// (mit Sicherheitsgrenze, damit nie vor Juni 2026 angezeigt wird)
function monthKey(y, m){ return y + '-' + m; }
function germanMonthLabel(y, m){
  const d = new Date(y, m-1, 1);
  const label = d.toLocaleDateString('de-DE', {month:'long', year:'numeric'});
  return label.charAt(0).toUpperCase() + label.slice(1);
}

// Übliche wöchentliche Ordnung, die automatisch gilt, wenn für diesen Tag
// kein spezieller Eintrag in monthsData steht:
//  - Sonntag: 1. Sonntag = Chor übt (wechselt Gemeindechor/Frauenchor),
//             3. Sonntag = Worship-Team singt ein besonderes Lied, und alle
//             zwei Monate (ab Juli 2026) zusätzlich Gemeinschaftsabend
//             (wechselt zwischen Haus und Gym), 4. Sonntag = Kinderchor übt,
//             immer Hauptgottesdienst+Sonntagsschule
//  - Mittwoch: 7:30 pm – Gebetsstunde (plus 6:30 pm – Gitarren üben am Mittwoch
//              direkt vor dem 1. Sonntag des Monats, auch wenn das in den
//              letzten Tagen des Vormonats liegt)
//  - Freitag: 7:30 pm – Jugendstunde
//  - Montag: alle 3 Monate ab Juni 2026, am 2. Montag des Monats,
//            7:00 pm – Programm Centro Luz en mi Camino (Gruppe wechselt 1/2)
function isGitarrenWednesday(date){
  // date ist ein Mittwoch. Prüfen, ob der folgende Sonntag (4 Tage später)
  // der 1. Sonntag seines Monats ist (Tag 1 bis 7).
  const nextSunday = new Date(date);
  nextSunday.setDate(date.getDate() + 4);
  return nextSunday.getDate() <= 7;
}
function computeDefaultWeeklyEvent(year, month, day){
  const date = new Date(year, month - 1, day);
  const weekday = date.getDay(); // 0=So, 1=Mo, 3=Mi, 5=Fr

  if(weekday === 0){
    const nth = Math.ceil(day / 7);
    const events = [];
    if(nth === 1){
      const choir = (month % 2 === 1) ? 'Gemeindechor üben' : 'Frauenchor üben';
      events.push({c:'gold', t:choir});
      events.push({c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'});
      return events;
    } else if(nth === 2){
      events.push({c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'});
      events.push({c:'gold', t:'5:00 pm – Minijugend'});
      return events;
    } else if(nth === 3){
      // Workshipteam singt an diesem Sonntag (steht automatisch bei "wird uns ein Lied vortragen" in den Bekanntmachungen; erscheint absichtlich nicht extra im Kalender)
      // Gemeinschaftsabend: alle 2 Monate ab Juli 2026, abwechselnd Haus/Gym
      const monthsSinceJuly2026 = (year - 2026) * 12 + (month - 7);
      if(monthsSinceJuly2026 >= 0 && monthsSinceJuly2026 % 2 === 0){
        const cycleIndex = monthsSinceJuly2026 / 2;
        const venue = (cycleIndex % 2 === 0) ? 'im Haus' : 'im Gym';
        events.push({c:'gold', t:'5:00 pm – Gemeinschaftsabend ' + venue});
      }
    } else if(nth === 4){
      events.push({c:'gold', t:'Kinderchor üben'});
    }
    events.push({c:'blue', t:'10:00 am – Hauptgottesdienst und Sonntagsschule'});
    return events;
  }
  if(weekday === 1){
    const nth = Math.ceil(day / 7);
    if(nth === 2){
      // Programm Centro Luz en mi Camino: alle 3 Monate ab Juni 2026,
      // Gruppe wechselt jedes Mal (Juni=1, September=2, Dezember=1, ...)
      const monthsSinceJune2026 = (year - 2026) * 12 + (month - 6);
      if(monthsSinceJune2026 >= 0 && monthsSinceJune2026 % 3 === 0){
        const cycleIndex = monthsSinceJune2026 / 3;
        const gruppe = (cycleIndex % 2 === 0) ? 1 : 2;
        return [ {c:'green', t:'7:00 pm – Programm Centro Luz en mi Camino (Gruppe ' + gruppe + ')'} ];
      }
    }
    return null;
  }
  if(weekday === 3){
    const events = [];
    if(isGitarrenWednesday(date)){
      events.push({c:'gold', t:'6:30 pm – Gitarren üben'});
    }
    events.push({c:'blue', t:'7:30 pm – Gebetsstunde'});
    return events;
  }
  if(weekday === 5){
    // Ab Oktober 2026 wird jeder Freitag von Hand in monthsData eingetragen
    // (auch "normale" Jugendstunde-Freitage), damit z.B. Dezember wirklich leer
    // bleiben kann, statt automatisch aufgefüllt zu werden.
    const isBeforeOct2026 = (year < 2026) || (year === 2026 && month < 10);
    if(isBeforeOct2026){
      return [ {c:'blue', t:'7:30 pm – Jugendstunde'} ];
    }
    return null;
  }
  return null;
}
function getEventsFor(y, m, day){
  const data = monthsData[monthKey(y, m)];
  const explicit = data && data.events ? data.events[day] : null;
  if(explicit) return explicit;
  return computeDefaultWeeklyEvent(y, m, day);
}
const GLOBAL_UPCOMING = [
  { year:2026, month:12, day:13, date:'13. Dezember 2026',          badge:'purple', icon:'🎵', title:'Singabend', desc:'5:00 pm – in der Kirche, nach dem Abendbrot im Gym',
    schedule: {
      de: [
        'Am Sonntag, den 13. Dezember, um 5:00 pm: Singabend in der Kirche.',
        'Er findet nach dem Abendbrot im Gym statt.'
      ],
      es: [
        'El domingo 13 de diciembre, a las 5:00 pm: noche de cantos en la iglesia.',
        'Será después de la cena en el gimnasio.'
      ],
      en: [
        'On Sunday, December 13, at 5:00 pm: evening of singing in the church.',
        'It will take place after supper in the gym.'
      ]
    }
  },
  { year:2026, month:9,  day:24, date:'24. September 2026',         badge:'gold',   icon:'☕', title:'Frauenfrühstück und Bibelstudium', desc:'9:00 am – Restaurant La Huerta km 10, mit Karina Knelsen',
    schedule: {
      de: [
        'Am Donnerstag, den 24. September, findet um 9:00 am ein Frauenfrühstück mit Bibelstudium statt.',
        'Es ist im Restaurant La Huerta (km 10), mit Karina Knelsen.',
        'Alle Frauen sind herzlich eingeladen.'
      ],
      es: [
        'El jueves 24 de septiembre, a las 9:00 am, habrá un desayuno de mujeres con estudio bíblico.',
        'Será en el Restaurante La Huerta (km 10), con Karina Knelsen.',
        'Todas las mujeres están cordialmente invitadas.'
      ],
      en: [
        'On Thursday, September 24, at 9:00 am, there will be a women\'s breakfast with Bible study.',
        'It will take place at Restaurant La Huerta (km 10), with Karina Knelsen.',
        'All women are warmly invited.'
      ]
    }
  },
  { year:2026, month:10, day:18, date:'18. Oktober 2026',           badge:'blue',   icon:'🧑‍🤝‍🧑', title:'Männer- und Jungsabend', desc:'3:30 pm – Gimnasio der Gemeinde Gottes Campo 101 – Film: „The Forge / La Forga"',
    image: 'manner-jungsabend-flyer.jpg',
    verse: { text: 'Eisen schärft Eisen, und ein Mann schärft den andern.', ref: 'Sprüche 27,17' },
    schedule: {
      de: [
        'Am Sonntag, den 18. Oktober, um 3:30 pm: Männer- und Jungsabend – alle Männer und Jungen ab dem Jugendalter sind eingeladen.',
        'Film: „The Forge / La Forga". Danach Abendessen & Gemeinschaft.',
        'Ort: Gimnasio der Gemeinde Gottes Campo 101.',
        'Ziel: aufbauende Verbindungen zwischen Männern und Jungen herzustellen, die das geistliche Leben fördern.',
        '„Eisen schärft Eisen, und ein Mann schärft den andern." (Sprüche 27,17)',
        'Eintritt ist frei.'
      ],
      es: [
        'El domingo 18 de octubre, a las 3:30 pm: Tarde de Hombres y Jóvenes – todos los hombres y jóvenes desde la adolescencia están invitados.',
        'Película: "The Forge / La Forga". Después, cena y convivencia.',
        'Lugar: Gimnasio de la Gemeinde Gottes Campo 101.',
        'Objetivo: crear vínculos edificantes entre hombres y jóvenes que fortalezcan la vida espiritual.',
        '"El hierro con hierro se aguza; y así el hombre aguza el rostro de su amigo." (Proverbios 27:17)',
        'Entrada libre.'
      ],
      en: [
        'On Sunday, October 18, at 3:30 pm: Men & Boys Evening – all men and boys from youth age are invited.',
        'Film: "The Forge / La Forga". Dinner & fellowship follow.',
        'Location: Gymnasium of Gemeinde Gottes Campo 101.',
        'Goal: to build up connections between men and boys that foster spiritual life.',
        '"Iron sharpeneth iron; so a man sharpeneth the countenance of his friend." (Proverbs 27:17)',
        'Admission is free.'
      ]
    }
  },
  { year:2027, month:5,  day:12, date:'12. Mai 2027',                badge:'green',  icon:'🎵', title:'Musikabend der Schule', desc:'' },
  { year:2026, month:12, day:17, date:'17. Dezember 2026',           badge:'green',  icon:'🎄', title:'Weihnachtsprogramm der Schule', desc:'' },
  { year:2026, month:11, day:22, date:'22. November 2026',          badge:'purple', icon:'🍞', title:'Verordnung Abendmahl',  desc:'10:00 am – Hauptgottesdienst (keine Sonntagsschule)' },
  { year:2026, month:9,  day:14, date:'14. September 2026',         badge:'green',  icon:'🎤', title:'Programm Centro Luz en mi Camino', desc:'7:00 pm – Gruppe 2',
    schedule: {
      de: [
        '7:00 pm – Gruppe 2 ist an der Reihe.',
        'Wenn es dir nicht möglich ist mitzumachen, suche dir bitte selbst einen Ersatz, damit die Gruppe vollständig ist.',
        'Bitte bring auch dein Glaubenslieder-Buch mit.'
      ],
      es: [
        '7:00 pm – Le toca al Grupo 2.',
        'Si no te es posible participar, por favor busca tú mismo un reemplazo, para que el grupo esté completo.',
        'Trae también tu libro de cantos de fe (Glaubenslieder).'
      ],
      en: [
        '7:00 pm – Group 2\'s turn.',
        'If you are unable to take part, please find a replacement yourself so the group is complete.',
        'Please also bring your hymn book (Glaubenslieder).'
      ]
    }
  },
  { year:2026, month:8,  day:14, date:'14. – 16. August 2026',      badge:'blue',   icon:'🚌', title:'Gemeindeausflug',       desc:'Neustädt und Rosal in Sainapuchi',
    schedule: {
      de: [
        'Beginn: Freitag ab 3:00 pm. Wer möchte, kann schon früher kommen und dort übernachten.',
        'Freitag, 8:00 pm: Jugendstunde – alle Erwachsenen sind ebenfalls herzlich eingeladen.',
        'Samstag, 10:00 am–2:00 pm: Kindertag für die Kinder; für die Erwachsenen Gemeinschaft und verschiedene Aktivitäten.',
        'Samstag, 8:00 pm: Abendgottesdienst.',
        'Sonntag, 10:00 am: Gottesdienst.',
        'Sonntagnachmittag: Gemeinschaft und verschiedene Aktivitäten.',
        'Essen: Für Freitag und Samstagmorgen sorgt jeder selbst. Für die restlichen Mahlzeiten sorgt das Speisekomitee. Für die eigenen Getränke soll jeder selbst sorgen.'
      ],
      es: [
        'Inicio: viernes a partir de las 3:00 pm. Quien guste puede llegar antes para quedarse a dormir ahí también.',
        'Viernes, 8:00 pm: hora de jóvenes — todos los adultos también están invitados.',
        'Sábado, 10:00 am–2:00 pm: día de niños para los pequeños; para los adultos, convivencia y diversas actividades.',
        'Sábado, 8:00 pm: culto de la noche.',
        'Domingo, 10:00 am: culto.',
        'Domingo por la tarde: convivencia y diversas actividades.',
        'Comida: para el viernes y el sábado por la mañana, cada quien lleva lo suyo. Para las demás comidas, el comité de alimentos se encargará. Cada quien debe llevar sus propias bebidas.'
      ],
      en: [
        'Starts: Friday from 3:00 pm. Anyone who wants to can arrive earlier and stay overnight there too.',
        'Friday, 8:00 pm: Youth hour — all adults are warmly invited as well.',
        'Saturday, 10:00 am–2:00 pm: Kids\' day for the children; fellowship and various activities for the adults.',
        'Saturday, 8:00 pm: Evening service.',
        'Sunday, 10:00 am: Service.',
        'Sunday afternoon: fellowship and various activities.',
        'Food: everyone brings their own for Friday and Saturday morning. The food committee will provide the rest of the meals. Everyone should bring their own drinks.'
      ]
    }
  },
  { year:2026, month:9,  day:20, date:'20. September 2026',         badge:'gold',   icon:'🏡', title:'Gemeinschaftsabend',    desc:'5:00 pm im Gym – Abendbrot, bitte Essen und Getränke mitbringen',
    schedule: {
      de: [
        'Der Gemeinschaftsabend findet um 5:00 pm im Gym statt.',
        'Alle sind herzlich eingeladen, gemeinsam Zeit zu verbringen und ein Abendbrot zu genießen.',
        'Jeder soll etwas zu essen und zu trinken mitbringen. Kaffee wird vor Ort bereitgestellt.'
      ],
      es: [
        'El convivio (Gemeinschaftsabend) será a las 5:00 pm en el gimnasio.',
        'Todos están cordialmente invitados a compartir tiempo juntos y disfrutar de una cena ligera.',
        'Cada quien debe traer algo de comer y de tomar. Habrá café disponible en el lugar.'
      ],
      en: [
        'The fellowship evening will take place at 5:00 pm in the gym.',
        'Everyone is warmly invited to spend time together and enjoy a light supper.',
        'Everyone should bring something to eat and drink. Coffee will be provided on site.'
      ]
    }
  },
  { year:2026, month:9,  day:23, date:'23. – 25. September 2026',   badge:'green',  icon:'📗', title:'Herbstversammlung (Abendversammlungen)',    desc:'Täglich 7:30 pm, mit Br. David Knelsen',
    schedule: {
      de: [
        'Vom 23. bis 25. September finden jeden Abend um 7:30 pm besondere Abendversammlungen statt.',
        'Br. David Knelsen wird uns an diesen Tagen dienen und Gottes Wort mit uns teilen.',
        'Themen: 23. – „Gottes Weg folgen"; 24. – „Auf dem schmalen Weg bleiben"; 25. – „Die Weisheit der Welt".',
        'Alle sind herzlich eingeladen, an allen drei Abenden dabei zu sein.'
      ],
      es: [
        'Del 23 al 25 de septiembre habrá reuniones especiales cada noche a las 7:30 pm.',
        'El hermano David Knelsen nos ministrará estos días y compartirá la Palabra de Dios con nosotros.',
        'Temas: 23 – "Seguir el camino de Dios"; 24 – "Permanecer en el camino angosto"; 25 – "La sabiduría del mundo".',
        'Todos están cordialmente invitados a asistir las tres noches.'
      ],
      en: [
        'From September 23 to 25, special evening meetings will be held each night at 7:30 pm.',
        'Brother David Knelsen will minister to us during these days and share God\'s Word with us.',
        'Topics: 23rd – "Following God\'s Path"; 24th – "Staying on the Narrow Path"; 25th – "The Wisdom of the World".',
        'Everyone is warmly invited to attend all three evenings.'
      ]
    }
  },
  { year:2026, month:9,  day:26, date:'26. September 2026',         badge:'gold',   icon:'☕', title:'Männer-Gebetsfrühstück', desc:'7:00 am – Pizzería La Sierra km 6 – Thema: „Nicht sehen wollen"',
    schedule: {
      de: [
        'Am Samstag, den 26. September, sind alle Männer herzlich zu einem gemeinsamen Männer-Gebetsfrühstück eingeladen.',
        'Es findet um 7:00 am in der Pizzería La Sierra (km 6) statt, gemeinsam mit Br. David Knelsen.',
        'Thema: „Nicht sehen wollen".'
      ],
      es: [
        'El sábado 26 de septiembre, todos los hombres están cordialmente invitados a un desayuno de oración para varones.',
        'Será a las 7:00 am en la Pizzería La Sierra (km 6), junto con el hermano David Knelsen.',
        'Tema: "No querer ver".'
      ],
      en: [
        'On Saturday, September 26, all men are warmly invited to a men\'s prayer breakfast together.',
        'It will take place at 7:00 am at Pizzería La Sierra (km 6), together with Brother David Knelsen.',
        'Topic: "Not Wanting to See".'
      ]
    }
  },
  { year:2026, month:9,  day:27, date:'27. September 2026',         badge:'blue',   icon:'✝️', title:'Gottesdienst mit Br. David Knelsen', desc:'10:00 am – Thema: „Worauf wartet Jesus?" – danach gemeinsames Mittagessen in der Gym',
    schedule: {
      de: [
        'Am Sonntag, den 27. September, findet um 10:00 am ein Gottesdienst mit Br. David Knelsen statt.',
        'Thema: „Worauf wartet Jesus?"',
        'Im Anschluss laden wir alle zu einem gemeinsamen Mittagessen in der Gym ein.',
        'Lasst uns im Vorfeld gemeinsam dafür beten.'
      ],
      es: [
        'El domingo 27 de septiembre, a las 10:00 am, tendremos un culto con el hermano David Knelsen.',
        'Tema: "¿Qué espera Jesús?"',
        'Después invitamos a todos a una comida en conjunto en el gimnasio.',
        'Oremos juntos por este tiempo.'
      ],
      en: [
        'On Sunday, September 27, at 10:00 am, we will have a service with Brother David Knelsen.',
        'Topic: "What Is Jesus Waiting For?"',
        'Afterward, everyone is invited to a shared lunch in the gym.',
        'Let\'s pray together for this time.'
      ]
    }
  },
  { year:2026, month:10, day:17, date:'17. Oktober 2026',           badge:'gold',   icon:'☕', title:'Männer-Gebetsfrühstück', desc:'7:00 am',
    schedule: {
      de: [
        'Am Samstag, den 17. Oktober, sind alle Männer herzlich zu einem gemeinsamen Männer-Gebetsfrühstück eingeladen.',
        'Es findet um 7:00 am statt.'
      ],
      es: [
        'El sábado 17 de octubre, todos los hombres están cordialmente invitados a un desayuno de oración para varones.',
        'Será a las 7:00 am.'
      ],
      en: [
        'On Saturday, October 17, all men are warmly invited to a men\'s prayer breakfast together.',
        'It will take place at 7:00 am.'
      ]
    }
  },
  { year:2026, month:11, day:8,  date:'8. November 2026',           badge:'red',    icon:'🌾', title:'Erntedankfest',         desc:'10:00 am – mit gemeinsamem Mittagessen' },
  { year:2026, month:11, day:21, date:'21. November 2026',          badge:'gold',   icon:'☕', title:'Männer-Gebetsfrühstück', desc:'7:00 am' },
  { year:2026, month:12, day:19, date:'19. Dezember 2026',          badge:'grey',   icon:'🚫', title:'Kein Männerfrühstück',  desc:'' },
  { year:2026, month:12, day:25, date:'25. Dezember 2026',          badge:'red',    icon:'🎄', title:'Weihnachtsbotschaft',   desc:'10:00 am' },
  { year:2026, month:12, day:31, date:'31. Dezember 2026',          badge:'purple', icon:'🎉', title:'Silvesterabend',        desc:'6:00 pm' },
  { year:2027, month:1,  day:20, date:'20. Januar 2027',            badge:'gold',   icon:'📋', title:'Geschäftsversammlung',  desc:'6:30 pm' },
];

// Nächsten Termin für "Programm Centro Luz en mi Camino" berechnen
// (alle 3 Monate ab Juni 2026, 2. Montag des Monats, Gruppe wechselt).
function getNextCentroLuzEvent(fromYear, fromMonth){
  for(let i = 0; i < 3; i++){
    let y = fromYear, m = fromMonth + i;
    while(m > 12){ m -= 12; y += 1; }
    const monthsSinceJune2026 = (y - 2026) * 12 + (m - 6);
    if(monthsSinceJune2026 >= 0 && monthsSinceJune2026 % 3 === 0){
      const cycleIndex = monthsSinceJune2026 / 3;
      const gruppe = (cycleIndex % 2 === 0) ? 1 : 2;
      const firstWeekday = new Date(y, m - 1, 1).getDay(); // 0=So
      const firstMonday = (firstWeekday <= 1) ? (1 + (1 - firstWeekday)) : (1 + (8 - firstWeekday));
      const secondMonday = firstMonday + 7;
      const monthName = germanMonthLabel(y, m).split(' ')[0];
      return {
        year: y, month: m, day: secondMonday,
        date: secondMonday + '. ' + monthName + ' ' + y,
        badge: 'green', icon: '🎤',
        title: 'Programm Centro Luz en mi Camino',
        desc: '7:00 pm – Gruppe ' + gruppe
      };
    }
  }
  return null;
}

// Nächsten Termin für den Gemeinschaftsabend berechnen
// (alle 2 Monate ab Juli 2026, 3. Sonntag des Monats, wechselt Haus/Gym).
function getNextGemeinschaftsabend(fromYear, fromMonth){
  for(let i = 0; i < 2; i++){
    let y = fromYear, m = fromMonth + i;
    while(m > 12){ m -= 12; y += 1; }
    const monthsSinceJuly2026 = (y - 2026) * 12 + (m - 7);
    if(monthsSinceJuly2026 >= 0 && monthsSinceJuly2026 % 2 === 0){
      const cycleIndex = monthsSinceJuly2026 / 2;
      const venue = (cycleIndex % 2 === 0) ? 'im Haus' : 'im Gym';
      const firstWeekday = new Date(y, m - 1, 1).getDay(); // 0=So
      const firstSunday = (firstWeekday === 0) ? 1 : (8 - firstWeekday);
      const thirdSunday = firstSunday + 14;
      const monthName = germanMonthLabel(y, m).split(' ')[0];
      return {
        year: y, month: m, day: thirdSunday,
        date: thirdSunday + '. ' + monthName + ' ' + y,
        badge: 'gold', icon: '🏡',
        title: 'Gemeinschaftsabend',
        desc: '5:00 pm – ' + venue
      };
    }
  }
  return null;
}
const CURRENT_BIBELTEXT_REF = 'Kolosser 3:12-17';

// Wer die Botschaft am Sonntag bringt - EIN Ort zum Ändern (steht im Abschluss der Bekanntmachungen).
const CURRENT_SPEAKER = 'Pastor Hans Klassen';

// Karten für "diese Woche" in Bekanntmachungen - von Hand mit Übersetzungen gepflegt.
// Jede Karte: key (für später ein eigenes Foto), dateLabel, title, icon (Platzhalter bis
// ein echtes Foto da ist), und de/es/en als Beschreibungstext.
const READERS = {
  '2026-8-2':  'Willy Klassen',
  '2026-8-9':  'Jacob Wiebe',
  '2026-8-23': 'Cornelius Fehr',
  '2026-8-30': 'Willy Friessen',
  '2026-9-6':  'Johan Neufeld',
  '2026-9-13': 'Johnny Fehr',
  '2026-9-20': 'Pancho Thiessen',
  '2026-9-27': 'Johnny Peters',
  '2026-10-4':  'Delfino Froesse',
  '2026-10-11': 'Corny Froesse',
  '2026-10-18': 'Jacob Wiebe',
  '2026-10-25': 'Willy Friesen',
  '2026-11-1':  'Cornelius Fehr',
  '2026-11-8':  'Erwin Rempel',
  '2026-11-15': 'Johan Neufeld',
  '2026-11-22': 'Armando Enns',
  '2026-11-29': 'Pancho Thiessen',
  '2026-12-6':  'Peter Peters',
  '2026-12-13': 'Delfino Froesse',
  '2026-12-20': 'Martin Wiebe',
  '2026-12-25': 'Jacob Wiebe',
  '2026-12-27': 'Pancho Friesen',
};
