var resources = {
    rock: {
        name: 'Rock',
        biome: 'Forest',
        chance: 0.6,
        min: 1,
        max: 5,
		amount: 0
    },
    stick: {
        name: 'Stick',
        biome: 'Forest',
        chance: 0.8,
        min: 1,
        max: 4,
		amount: 0
    }
};

function numberBetween(min, max) {
    return (Math.floor(Math.random() * max) + min);
}

