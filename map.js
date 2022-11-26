let mapId = document.getElementById('bogotaAdministrativeMap');
let generalMap;

// mapId.style.left = `${(window.innerWidth / 2) - mapId.clientWidth}px`;
// mapId.style.top = `${(window.innerHeight / 2) - mapId.clientHeight / 2}px`;

const areas = [
   { map: 'usaquenMap', text: 'usaquenMapText' },
   { map: 'chapineroMap', text: 'chapineroMapText' },
   { map: 'santafeMap', text: 'santafeMapText' },
   { map: 'sanCristobalMap', text: 'sanCristobalMapText' },
   { map: 'usmeMap', text: 'usmeMapText' },
   { map: 'tunjuelitoMap', text: 'tunjuelitoMapText' },
   { map: 'bosaMap', text: 'bosaMapText' },
   { map: 'kennedyMap', text: 'kennedyMapText' },
   { map: 'fontibonMap', text: 'fontibonMapText' },
   { map: 'engativaMap', text: 'engativaMapText' },
   { map: 'subaMap', text: 'subaMapText' },
   { map: 'barriosUnidosMap', text: 'barriosUnidosMapText' },
   { map: 'teusaquilloMap', text: 'teusaquilloMapText' },
   { map: 'martiresMap', text: 'martiresMapText' },
   { map: 'antonioNarinoMap', text: 'antonioNarinoMapText' },
   { map: 'puenteArandaMap', text: 'puenteArandaMapText' },
   { map: 'candelariaMap', text: 'candelariaMapText' },
   { map: 'rafaelUribeMap', text: 'rafaelUribeMapText' },
   { map: 'ciudadBolivarMap', text: 'ciudadBolivarMapText' },
   { map: 'sumapazMap', text: 'sumapazMapText' }
];

const bringTopSVG = (targetElement) => {
   let parent = targetElement.ownerSVGElement;
   parent.appendChild(targetElement);
}

const area = {}

area.enter = (map, mapText) => {
   map.style.opacity = 0.5;
   mapText.style.visibility = 'visible';
}

area.out = (map, mapText) => {
   map.style.opacity = 1;
   mapText.style.opacity = 1;
   mapText.style.visibility = 'hidden';
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
   }
});

