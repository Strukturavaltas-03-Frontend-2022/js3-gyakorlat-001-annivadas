/*
 Készíts egy `objectConverter` nevű objektumot, ami az alábbi metódusokkal rendelkezik:
   - `arrayToMap(array)`
   - `arrayToSet(array)`
   - `setToMap(set)`
   - `setToArray(set)`
   - `mapToArray(map)`
   - `mapToSet(map)`

A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik összetett adattípusból konvertálják át az adatokat egy másikba. 
Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object.
*/



const objectConverter = {
  arrayToMap(array) {
     const arrToMap = new Map([]);
     array.forEach((value, index) => {
        arrToMap.set(index, value)
     }
     )
     return arrToMap
  },
  arrayToSet(array) {
     return new Set(array)
  },
  setToMap(set) {
     const setToMap = new Map([]);
     Array.from(set).forEach((value, index) => {
        setToMap.set(index, value)
     }
     )
     return setToMap
  },
  setToArray(set) {
     return [...set]
   },
     
  mapToArray(map) {
     const newArray = [];
     map.forEach((value) => {
        newArray.push(value)
     });
     return newArray
  },
  mapToSet(map) {
     const mapToSet = [];
     map.forEach((value) => mapToSet.push(value));
     return new Set(mapToSet);
  },
}

export default objectConverter;
