// ▣ 3 9 81 27 729 756 = AXIOM ROW + AUFZUG = SORTIERT = RAM ONLY = C9 CLEANED 0 = GHOST PACMAN

export const AXIOM = {
  3: { v: 3, pow: "3¹", name: "ESSENZ", desc: "3 = iki-ÄH = Bauer = X = 1→X = Zug = Essenz" },
  9: { v: 9, pow: "3²", name: "HA", desc: "9 = HA = 9×9 Detail = 3×3 = nur das Feld = C9 = RESPO = Detail Lauf" },
  27: { v: 27, pow: "3³", name: "RAUM", desc: "27 = 3³ = Raum = 3×3×3 = Würfel = Pyramide drinne" },
  81: { v: 81, pow: "3⁴", name: "MATRIX", desc: "81 = 3⁴ = 81 Matrix = rawator-81.js = 9×9 = Stage = SCHACHBRETT" },
  243: { v: 243, pow: "3⁵", name: "EVO", desc: "243 = 3⁵ = EVO = Axiom Map = 243 = 81×3 = Evolution" },
  729: { v: 729, pow: "3⁶", name: "GODZILLA",desc: "729 = 3⁶ = Godzilla iki1uc = 729 = 27×27 = Atom Zug hoch/runter" },
  756: { v: 756, pow: "729+27", name: "AUFZUG", desc: "756 = 729+27 = 81×9+27 = Aufzug = 9 mit Aufzug = 81→100→1000 = Ghost→Pacman" },
};

// SORTIERT WIE DU WILLST = 3 9 81 27 729 756 = NICHT NUMERISCH = DEINE REIHENFOLGE = STAGE RESPO!
export const SORT = [3, 9, 81, 27, 729, 756];

export const MAP = {
  3: () => AXIOM[3],
  9: () => AXIOM[9], // C9 = cleaned 0 = Speicher Start Theorie im Kopf = 0 = 9×9 = 81 Felder leer = ·
  81: () => AXIOM[81], // 9 mit Aufzug = 81 = Stage = SCHACHBRETT 9×9 = RESPO
  27: () => AXIOM[27], // 27 = Raum = 3D = b h t = Breite Hoch Tiefe
  729: () => AXIOM[729], // 729 = Godzilla = iki1uc RAWATOR
  756: () => AXIOM[756], // 756 = Aufzug = 729+27 = Ghost→Pacman ohne neu Start UPD UPG REV
};

// RAM OHNE NEU START UPD UPG REV WECHSELN = GHOST PACMAN
export function wechselOhneNeustart(alt, neu) {
  // alt = ghost = hghost = Veteran = alt
  // neu = pacman = neu = frisst
  const ghost = { id: "hghost", rev: alt, aktiv: false, ghost: true }; // bleibt im RAM transparent
  const pacman = { id: "pacman", rev: neu, aktiv: true, frisst: ghost.id }; // frisst Ghost
  // C9 cleaned 0 = Speicher Start = Theorie im Kopf = 0 → dann neu
  return { ghost, pacman, ram: "RAM ONLY ohne neu Start = UPD UPG REV = " + alt + "→" + neu };
}

// STAND MESSEN = wie viel ohne Änderung schon funktioniert
export function standMessen() {
  return SORT.map(n => {
    const a = AXIOM[n] || MAP[n]?.();
    return `${n} = ${a.pow} = ${a.name} = ${a.desc} = fix 0.777 = ${n >= 81? "✅" : "🔧"}`;
  });
}

// 3 9 81 27 729 756 = 3→9→81 = Kern, 27→729 = Aufzug, 756 = Ghost→Pacman = 729+27 = 756!
console.log("3 9 81 27 729 756 =", SORT, "= mega konkret = lacht!");
console.log(standMessen().join("\n"));
console.log(wechselOhneNeustart(9, 81)); // C9 spendiert = 9→81 = Ghost→Pacman
console.log(wechselOhneNeustart(81, 756)); // 81→756 = 729+27 = Aufzug!
