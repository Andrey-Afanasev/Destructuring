
const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }
  
  
  
  function retrievesArray(character) {
    let retrieves = []
  
  
   character.special.forEach(({
      id, name, description = 'Описание недоступно', icon,
    }) => {
      retrieves.push({
        id, name, description, icon,
      })})
  
    return retrieves
  
  }