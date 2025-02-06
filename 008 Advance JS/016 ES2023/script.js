const monsters = [
    {id: 1, monster: "Mr. Mouse", level: 2},
    {id: 2, monster: "Mac", level: 30},
    {id: 3, monster: "Denodude", level: 17},
    {id: 4, monster: "Pye", level: 5}
]


// const lastMonster = monsters.findlast(item.level > 15)


const monsterNames = monsters.map(monster => monster.monster);
console.log(monsterNames);

