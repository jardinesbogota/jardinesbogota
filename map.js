let mapId = document.getElementById('bogotaAdministrativeMap');
let areaName = document.getElementById('areaName');
let generalMap, isGeneralMap = true;

const areas = [
   { name: "Usaquen", map: 'usaquenMap', text: 'usaquenMapText', x: 23, y: 31.7, width: 224.7, height: 77.3 },
   { name: "Chapinero", map: 'chapineroMap', text: 'chapineroMapText', x: 215.60, y: 14.7, width: 107.5, height: 109.4 },
   { name: "Santafé", map: 'santafeMap', text: 'santafeMapText', x: 211.1, y: 108.8, width: 58.2, height: 52 },
   { name: "San Cristóbal", map: 'sanCristobalMap', text: 'sanCristobalMapText', x: 353.2, y: 68.8, width: 114.6, height: 110.7 },
   { name: "Usme", map: 'usmeMap', text: 'usmeMapText', x: 410.3, y: 109.20, width: 313.8, height: 237.60 },
   { name: "Tunjuelito", map: 'tunjuelitoMap', text: 'tunjuelitoMapText', x: 340.3, y: 197.5, width: 93.8, height: 50.7 },
   { name: "Bosa", map: 'bosaMap', text: 'bosaMapText', x: 259.5, y: 242.8, width: 85.7, height: 100.7 },
   { name: "Kennedy", map: 'kennedyMap', text: 'kennedyMapText', x: 248.4, y: 195.9, width: 97.6, height: 95.4 },
   { name: "Fontibón", map: 'fontibonMap', text: 'fontibonMapText', x: 172.8, y: 173.5, width: 113.1, height: 102.5 },
   { name: "Engativá", map: 'engativaMap', text: 'engativaMapText', x: 140.9, y: 138.2, width: 121.8, height: 116.4 },
   { name: "Suba", map: 'subaMap', text: 'subaMapText', x: 0, y: 76.1, width: 220.1, height: 138.5 },
   { name: "Barrios Unidos", map: 'barriosUnidosMap', text: 'barriosUnidosMapText', x: 211.1, y: 108.8, width: 58.2, height: 52 },
   { name: "Teusaquillo", map: 'teusaquilloMap', text: 'teusaquilloMapText', x: 244.4, y: 119.9, width: 72.3, height: 64.4 },
   { name: "Los Mártires", map: 'martiresMap', text: 'martiresMapText', x: 302.8, y: 130.5, width: 47.2, height: 48.6 },
   { name: "Antonio Nariño", map: 'antonioNarinoMap', text: 'antonioNarinoMapText', x: 340.1, y: 148.2, width: 34, height: 66.3 },
   { name: "Puente Aranda", map: 'puenteArandaMap', text: 'puenteArandaMapText', x: 274.8, y: 148.9, width: 72.5, height: 75.7 },
   { name: "La Candelaria", map: 'candelariaMap', text: 'candelariaMapText', x: 333.3, y: 111, width: 21.6, height: 31 },
   { name: "Rafael Uribe", map: 'rafaelUribeMap', text: 'rafaelUribeMapText', x: 349.6, y: 161.4, width: 75.7, height: 52.8 },
   { name: "Ciudad Bolívar", map: 'ciudadBolivarMap', text: 'ciudadBolivarMapText', x: 337.9, y: 199, width: 306.7, height: 129.60 },
   { name: "Sumapaz", map: 'sumapazMap', text: 'sumapazMapText', x: 633.3, y: 158.8, width: 107.5, height: 187.8 }
];

const bringTopSVG = (targetElement) => {
   let parent = targetElement.ownerSVGElement;
   parent.appendChild(targetElement);
}

const area = {}

area.enter = (map, mapText) => {
   if (isGeneralMap) {
      map.style.opacity = 0.5;
      mapText.style.visibility = 'visible';
   }
}

area.out = (map, mapText) => {
   if (isGeneralMap) {
      map.style.opacity = 1;
      mapText.style.opacity = 1;
      mapText.style.visibility = 'hidden';
   }
}

area.zoom = (map, mapText, info) => {
   isGeneralMap = false;
   map.style.opacity = 1;
   mapText.style.visibility = 'hidden';
   let _generalMap = generalMap.getElementById("bogotaAdministrativeMap");
   _generalMap.setAttribute("viewBox", `${info.x} ${info.y} ${info.width} ${info.height}`);
   areaName.innerHTML = info.name;
}

mapId.addEventListener("load", () => {
   generalMap = mapId.contentDocument;

   for (let _area of areas) {
      let map = generalMap.getElementById(_area.map);
      let mapText = generalMap.getElementById(_area.text);
      mapText.style.visibility = 'hidden';
      mapText.addEventListener('mouseenter', () => { area.enter(map, mapText); });
      map.addEventListener('mouseenter', () => { area.enter(map, mapText); });
      map.addEventListener('mouseout', () => { area.out(map, mapText); });
      map.addEventListener('click', () => { area.zoom(map, mapText, _area); });
   }
});