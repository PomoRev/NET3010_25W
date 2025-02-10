const wordList = [
        {
            "word": "elephant",
            "clue": "Self-showering animal",
            "used": false
        },
        {
            "word": "giraffe",
            "clue": "Has a long neck",
            "used": false
        },
        {
            "word": "computer",
            "clue": "Ubiquitous machine of our age",
            "used": false
        },
        {
            "word": "mountain",
            "clue": "A large natural elevation",
            "used": false
        },
        {
            "word": "ocean",
            "clue": "A large body of water",
            "used": false
        },
        {
            "word": "airplane",
            "clue": "A powered flying vehicle",
            "used": false
        },
        {
            "word": "bicycle",
            "clue": "Two wheels held in a frame",
            "used": false
        },
        {
            "word": "library",
            "clue": "Where books are kept",
            "used": false
        },
        {
            "word": "universe",
            "clue": "All existing matter and space",
            "used": false
        },
        {
            "word": "rainbow",
            "clue": "An arc formed in the sky",
            "used": false
        },
        {
            "word": "volcano",
            "clue": "A hot crater",
            "used": false
        },
        {
            "word": "diamond",
            "clue": "A precious stone",
            "used": false
        },
        {
            "word": "galaxy",
            "clue": "A system of stars",
            "used": false
        },
        {
            "word": "hurricane",
            "clue": "A violent wind",
            "used": false
        },
        {
            "word": "jungle",
            "clue": "Place of tangled vegetation",
            "used": false
        },
        {
            "word": "kangaroo",
            "clue": "A large plant-eating marsupial",
            "used": false
        },
        {
            "word": "language",
            "clue": "A system of communication",
            "used": false
        },
        {
            "word": "microscope",
            "clue": "To see very small objects",
            "used": false
        },
        {
            "word": "notebook",
            "clue": "A small blank book",
            "used": false
        },
        {
            "word": "octopus",
            "clue": "An animal with tentacles",
            "used": false
        },
        {
            "word": "pyramid",
            "clue": "A structure with a square or triangular base",
            "used": false
        },
        {
            "word": "quicksand",
            "clue": "Loose wet sand",
            "used": false
        },
        {
            "word": "robot",
            "clue": "A machine that automates actions",
            "used": false
        },
        {
            "word": "satellite",
            "clue": "Placed in orbit",
            "used": false
        },
        {
            "word": "telescope",
            "clue": "To make distant objects appear nearer",
            "used": false
        },
        {
            "word": "umbrella",
            "clue": "Protection against the rain",
            "used": false
        },
        {
            "word": "vaccine",
            "clue": "Stimulates antibody production",
            "used": false
        },
        {
            "word": "whistle",
            "clue": "A device that is blown",
            "used": false
        },
        {
            "word": "xylophone",
            "clue": "A hammered musical instrument",
            "used": false
        },
        {
            "word": "avalanche",
            "clue": "Falling down a mountainside",
            "used": false
        },
        {
            "word": "butterfly",
            "clue": "Has large fairylike wings",
            "used": false
        },
        {
            "word": "caterpillar",
            "clue": "Before it was a moth",
            "used": false
        },
        {
            "word": "dolphin",
            "clue": "Whale with a beaklike snout",
            "used": false
        },
        {
            "word": "eclipse",
            "clue": "The shadow of one celestial body",
            "used": false
        },
        {
            "word": "fireworks",
            "clue": "Paint the sky",
            "used": false
        },
        {
            "word": "glacier",
            "clue": "Slowly carves out the landscape",
            "used": false
        },
        {
            "word": "hologram",
            "clue": "The interference of light beams",
            "used": false
        },
        {
            "word": "island",
            "clue": "Surrounded by water",
            "used": false
        },
        {
            "word": "jewelry",
            "clue": "Personal ornaments",
            "used": false
        },
        {
            "word": "kaleidoscope",
            "clue": "Mirrors and colored glass",
            "used": false
        },
        {
            "word": "labyrinth",
            "clue": "A network of passages",
            "used": false
        },
        {
            "word": "meteor",
            "clue": "A small body from outer space",
            "used": false
        },
        {
            "word": "nebula",
            "clue": "A cloud of gas and dust",
            "used": false
        },{
            "word": "orchid",
            "clue": "Bizarrely shaped flowers",
            "used": false
        },
        {
            "word": "penguin",
            "clue": "A fancy dressed seabird",
            "used": false
        },
        {
            "word": "quarantine",
            "clue": "A state of isolation",
            "used": false
        },
        {
            "word": "radiation",
            "clue": "The emission of energy over time",
            "used": false
        },
        {
            "word": "symphony",
            "clue": "An elaborate musical composition",
            "used": false
        },
        {
            "word": "tornado",
            "clue": "A destructive vortex",
            "used": false
        },
        {
            "word": "utopia",
            "clue": "An imagined perfect place",
            "used": false
        },
        {
            "word": "voltage",
            "clue": "An unit of electromotive force",
            "used": false
        },
        {
            "word": "waterfall",
            "clue": "A cascade of water",
            "used": false
        },
        {
            "word": "xenophobia",
            "clue": "Prejudice against foreigners",
            "used": false
        },
        {
            "word": "yogurt",
            "clue": "Remedy for hot food",
            "used": false
        },
        {
            "word": "zodiac",
            "clue": "A significant belt of the heavens",
            "used": false
        },
        {
            "word": "asteroid",
            "clue": "A small rocky body",
            "used": false
        },
        {
            "word": "bacteria",
            "clue": "Microscopic single-celled organisms",
            "used": false
        },
        {
            "word": "canyon",
            "clue": "A deep, wet gorge",
            "used": false
        },
        {
            "word": "dinosaur",
            "clue": "Victims of an asteroid",
            "used": false
        },
        {
            "word": "earthquake",
            "clue": "A violent shaking",
            "used": false
        },
        {
            "word": "fossil",
            "clue": "The remains of a prehistoric organism",
            "used": false
        },
        {
            "word": "geyser",
            "clue": "An elevated hot spring",
            "used": false
        },
        {
            "word": "horizon",
            "clue": "Land and sky meet here",
            "used": false
        },
        {
            "word": "iceberg",
            "clue": "Lettuce best served cold",
            "used": false
        },
        {
            "word": "jigsaw",
            "clue": "A puzzle with pieces",
            "used": false
        },
        {
            "word": "kiwi",
            "clue": "A flightless bird",
            "used": false
        },
        {
            "word": "landscape",
            "clue": "The visible features of a place",
            "used": false
        },
        {
            "word": "mammoth",
            "clue": "An elephant ancestor",
            "used": false
        },
        {
            "word": "obsidian",
            "clue": "Volcanic rock",
            "used": false
        },
        {
            "word": "pinnacle",
            "clue": "The highest point",
            "used": false
        },
        {
            "word": "quartz",
            "clue": "A hard, crystalline mineral",
            "used": false
        },
        {
            "word": "reef",
            "clue": "A wet ridge of rock and coral",
            "used": false
        },
        {
            "word": "savanna",
            "clue": "Grassy plain",
            "used": false
        },
        {
            "word": "tundra",
            "clue": "Arctic region",
            "used": false
        },
        {
            "word": "uranium",
            "clue": "A dense metal",
            "used": false
        },
        {
            "word": "vortex",
            "clue": "A whirling mass",
            "used": false
        },
        {
            "word": "wilderness",
            "clue": "An uncultivated land",
            "used": false
        },
        {
            "word": "xenon",
            "clue": "A colorless gas",
            "used": false
        },
        {
            "word": "yawn",
            "clue": "Sign of fatigue",
            "used": false
        },
        {
            "word": "zephyr",
            "clue": "A gentle breeze",
            "used": false
        },
        {
            "word": "albatross",
            "clue": "A large seabird",
            "used": false
        },
        {
            "word": "bamboo",
            "clue": "Koala delight",
            "used": false
        },
        {
            "word": "carnivore",
            "clue": "Enjoys a good steak",
            "used": false
        },
        {
            "word": "dandelion",
            "clue": "A common weed",
            "used": false
        },
        {
            "word": "eucalyptus",
            "clue": "Australian evergreen",
            "used": false
        },
        {
            "word": "fjord",
            "clue": "Found between cliffs",
            "used": false
        },
        {
            "word": "gondola",
            "clue": "A canal boat",
            "used": false
        },
        {
            "word": "hummingbird",
            "clue": "A small but speedy bird",
            "used": false
        },
        {
            "word": "iguana",
            "clue": "A large lizard",
            "used": false
        },
        {
            "word": "javelin",
            "clue": "A thrown weapon",
            "used": false
        },
        {
            "word": "koala",
            "clue": "Australian marsupial",
            "used": false
        },
        {
            "word": "lemur",
            "clue": "Has a pointed snout and a long tail",
            "used": false
        },
        {
            "word": "mangrove",
            "clue": "A swamp tree",
            "used": false
        },
        {
            "word": "narwhal",
            "clue": "A whale that makes a point",
            "used": false
        },
        {
            "word": "oasis",
            "clue": "A fertile spot in a desert",
            "used": false
        },
        {
            "word": "panda",
            "clue": "Black and white bear",
            "used": false
        },
        {
            "word": "quokka",
            "clue": "A small marsupial",
            "used": false
        },
        {
            "word": "raccoon",
            "clue": "A trash panda",
            "used": false
        },
        {
            "word": "ant",
            "clue": "Hill people of the insect world",
            "used": false
        },
        {
            "word": "bat",
            "clue": "A winged night flier",
            "used": false
        },
        {
            "word": "cat",
            "clue": "A small, furry predator",
            "used": false
        },
        {
            "word": "dog",
            "clue": "A friendly pet",
            "used": false
        },
        {
            "word": "egg",
            "clue": "Sunnyside up",
            "used": false
        },
        {
            "word": "fox",
            "clue": "A cunning mammal",
            "used": false
        },
        {
            "word": "gem",
            "clue": "A desirable stone",
            "used": false
        },
        {
            "word": "hat",
            "clue": "Topper",
            "used": false
        },
        {
            "word": "ink",
            "clue": "Powerful medium",
            "used": false
        },
        {
            "word": "jar",
            "clue": "A mason",
            "used": false
        },
        {
            "word": "key",
            "clue": "An important idea",
            "used": false
        },
        {
            "word": "log",
            "clue": "Where we find errors",
            "used": false
        },
        {
            "word": "map",
            "clue": "Giving directions",
            "used": false
        },
        {
            "word": "net",
            "clue": "Slang for the World Wide Web",
            "used": false
        },
        {
            "word": "owl",
            "clue": "Animal that is always asking who",
            "used": false
        },
        {
            "word": "pen",
            "clue": "Place to keep animals",
            "used": false
        },
        {
            "word": "rat",
            "clue": "New York pizza lover",
            "used": false
        },
        {
            "word": "sun",
            "clue": "The center of our solar system",
            "used": false
        },
        {
            "word": "tap",
            "clue": "A device for controlling flow",
            "used": false
        },
        {
            "word": "urn",
            "clue": "Modern coptic jar",
            "used": false
        },
        {
            "word": "van",
            "clue": "A vehicle for moving goods",
            "used": false
        },
        {
            "word": "web",
            "clue": "A network of fine threads",
            "used": false
        },
        {
            "word": "zip",
            "clue": "To move really fast",
            "used": false
        },
        {
            "word": "apple",
            "clue": "Keeps the doctor away",
            "used": false
        },
        {
            "word": "banana",
            "clue": "Yellow skinned fruit",
            "used": false
        },
        {
            "word": "cherry",
            "clue": "Tops a sundae",
            "used": false
        },
        {
            "word": "dragon",
            "clue": "A mythical monster",
            "used": false
        },
        {
            "word": "eagle",
            "clue": "A large bird of prey",
            "used": false
        },
        {
            "word": "forest",
            "clue": "Trees make this hard to see",
            "used": false
        },
        {
            "word": "grapes",
            "clue": "Fruit of the vine",
            "used": false
        },
        {
            "word": "honey",
            "clue": "Used to make mead",
            "used": false
        },
        {
            "word": "kitten",
            "clue": "Come in a litter",
            "used": false
        },
        {
            "word": "lemon",
            "clue": "A sour addition to tea",
            "used": false
        },
        {
            "word": "monkey",
            "clue": "A business animal",
            "used": false
        },
        {
            "word": "nectar",
            "clue": "The wine of the flower",
            "used": false
        },
        {
            "word": "orange",
            "clue": "A juicy fruit",
            "used": false
        },
        {
            "word": "peach",
            "clue": "A fuzzy fruit",
            "used": false
        },
        {
            "word": "rabbit",
            "clue": "A bouncy animal",
            "used": false
        },
        {
            "word": "safari",
            "clue": "Hunting an animal in its natural habitat",
            "used": false
        },
        {
            "word": "tiger",
            "clue": "A large mammal with stripes",
            "used": false
        },
        {
            "word": "airport",
            "clue": "A complex of runways and buildings",
            "used": false
        },
        {
            "word": "balloon",
            "clue": "A small rubber party bag",
            "used": false
        },
        {
            "word": "cabinet",
            "clue": "Has shelves or drawers",
            "used": false
        },
        {
            "word": "earring",
            "clue": "Pretty tennitus",
            "used": false
        },
        {
            "word": "factory",
            "clue": "Where we get the goods",
            "used": false
        },
        {
            "word": "gallery",
            "clue": "Artists display",
            "used": false
        },
        {
            "word": "harbour",
            "clue": "Place of shelter",
            "used": false
        },
        {
            "word": "kitchen",
            "clue": "Where a meal is prepared",
            "used": false
        },
        {
            "word": "orchard",
            "clue": "Land for keeping the doctor away",
            "used": false
        },
        {
            "word": "painter",
            "clue": "Colours our world",
            "used": false
        },
        {
            "word": "quilted",
            "clue": "Patchwork blanket",
            "used": false
        },
        {
            "word": "railway",
            "clue": "Parallel tracks",
            "used": false
        },
        {
            "word": "sandbox",
            "clue": "Play area for kids",
            "used": false
        },
        {
            "word": "teacher",
            "clue": "A doctor",
            "used": false
        },
        {
            "word": "frog",
            "clue": "A small hopper",
            "used": false
        },
        {
            "word": "wolf",
            "clue": "A wild canine",
            "used": false
        },
        {
            "word": "crab",
            "clue": "Beware the claws",
            "used": false
        },
        {
            "word": "deer",
            "clue": "A beloved animal",
            "used": false
        },
        {
            "word": "goat",
            "clue": "Eater of tin cans",
            "used": false
        },
        {
            "word": "hawk",
            "clue": "A bird of prey",
            "used": false
        },
        {
            "word": "mole",
            "clue": "A burrowing mammal",
            "used": false
        },
        {
            "word": "seal",
            "clue": "A marine mammal",
            "used": false
        },
        {
            "word": "toad",
            "clue": "A warty fellow",
            "used": false
        },
        {
            "word": "zebu",
            "clue": "A type of cow",
            "used": false
        },
        {
            "word": "lynx",
            "clue": "A wild cat",
            "used": false
        },
        {
            "word": "clam",
            "clue": "A shellfish",
            "used": false
        },
        {
            "word": "crow",
            "clue": "A black bird",
            "used": false
        },
        {
            "word": "dove",
            "clue": "A symbol of peace",
            "used": false
        },
        {
            "word": "flea",
            "clue": "Attracted to pets",
            "used": false
        },
        {
            "word": "gnat",
            "clue": "A small flying insect",
            "used": false
        },
        {
            "word": "lamb",
            "clue": "Mary had one of these",
            "used": false
        },
        {
            "word": "moth",
            "clue": "Hangs aroung the light",
            "used": false
        },
        {
            "word": "newt",
            "clue": "What a witch turns you into",
            "used": false
        },
        {
            "word": "slug",
            "clue": "Leaves a trail of slime",
            "used": false
        },
        {
            "word": "swan",
            "clue": "A graceful water bird",
            "used": false
        },
        {
            "word": "turtle",
            "clue": "A slow moving pet",
            "used": false
        },
        {
            "word": "vulture",
            "clue": "Bad sign in the sky",
            "used": false
        },
        {
            "word": "walrus",
            "clue": "A large mammal with tusks",
            "used": false
        },
        {
            "word": "xerox",
            "clue": "Innovators in duplicate",
            "used": false
        },
        {
            "word": "yeti",
            "clue": "Abominable creature",
            "used": false
        },
        {
            "word": "zebra",
            "clue": "Black and white",
            "used": false
        },
        {
            "word": "accordion",
            "clue": "A squeeze box",
            "used": false
        },
        {
            "word": "barracuda",
            "clue": "A predatory fish",
            "used": false
        },
        {
            "word": "cactus",
            "clue": "Grow in the desert",
            "used": false
        },
        {
            "word": "emu",
            "clue": "A flightless bird",
            "used": false
        },
        {
            "word": "falcon",
            "clue": "Bird that can be handled",
            "used": false
        },
        {
            "word": "gorilla",
            "clue": "A large primate",
            "used": false
        },
        {
            "word": "hedgehog",
            "clue": "A spiny mammal",
            "used": false
        },
        {
            "word": "jellyfish",
            "clue": "Stinging sea creature",
            "used": false
        },
        {
            "word": "parrot",
            "clue": "A talkative pet",
            "used": false
        },
        {
            "word": "quail",
            "clue": "A small bird",
            "used": false
        },
        {
            "word": "rhinoceros",
            "clue": "A dangerous animal",
            "used": false
        },
        {
            "word": "squid",
            "clue": "Cousin of the kraken",
            "used": false
        },
        {
            "word": "tarantula",
            "clue": "Hairy with a lot of legs",
            "used": false
        },
        {
            "word": "urchin",
            "clue": "Child on the street",
            "used": false
        },
        {
            "word": "viper",
            "clue": "A venomous snake",
            "used": false
        },
        {
            "word": "wombat",
            "clue": "A burrowing marsupial",
            "used": false
        },
        {
            "word": "xenopus",
            "clue": "A genus of aquatic frogs",
            "used": false
        },
        {
            "word": "yak",
            "clue": "A long-haired bovid",
            "used": false
        },
        {
            "word": "zebu",
            "clue": "Cow with a hump",
            "used": false
        },
        {
            "word": "antelope",
            "clue": "They play on the range",
            "used": false
        },
        {
            "word": "buffalo",
            "clue": "A large bovid",
            "used": false
        },
        {
            "word": "cheetah",
            "clue": "Fast cat",
            "used": false
        },
        {
            "word": "dingo",
            "clue": "A wild dog that might eat babies",
            "used": false
        },
        {
            "word": "flamingo",
            "clue": "A pink bird",
            "used": false
        },
        {
            "word": "gazelle",
            "clue": "Graceful prey of lions",
            "used": false
        },
        {
            "word": "hippopotamus",
            "clue": "Most dangerous mammal",
            "used": false
        }
        ,
        {
            "word": "ibex",
            "clue": "A wild goat",
            "used": false
        },
        {
            "word": "jackal",
            "clue": "A wild dog",
            "used": false
        },
        {
            "word": "llama",
            "clue": "Make soft wool",
            "used": false
        },
        {
            "word": "mongoose",
            "clue": "Enemy of the snake",
            "used": false
        },
        {
            "word": "ocelot",
            "clue": "A small wild cat",
            "used": false
        },
        {
            "word": "puma",
            "clue": "A cougar",
            "used": false
        },
        {
            "word": "reindeer",
            "clue": "Arctic deer",
            "used": false
        },
        {
            "word": "sloth",
            "clue": "A slow-moving mammal",
            "used": false
        },
        {
            "word": "tapir",
            "clue": "A mammal with a short trunk",
            "used": false
        },
        {
            "word": "urial",
            "clue": "A wild sheep",
            "used": false
        },
        {
            "word": "vicuna",
            "clue": "South American camels",
            "used": false
        },
        {
            "word": "wolverine",
            "clue": "Ornery superhero",
            "used": false
        },
        {
            "word": "xerus",
            "clue": "Ground squirrels",
            "used": false
        },
        {
            "word": "yellowjacket",
            "clue": "A hunting wasp",
            "used": false
        },
        {
            "word": "zorilla",
            "clue": "A striped polecat",
            "used": false
        },
        {
            "word": "alpaca",
            "clue": "Spitting animal",
            "used": false
        },
        {
            "word": "bison",
            "clue": "Run off cliffs in Canada",
            "used": false
        },
        {
            "word": "chimpanzee",
            "clue": "A great ape",
            "used": false
        },
        {
            "word": "dugong",
            "clue": "A sea cow",
            "used": false
        },
        {
            "word": "echidna",
            "clue": "A spiny critter",
            "used": false
        },
        {
            "word": "fennec",
            "clue": "A desert fox",
            "used": false
        },
        {
            "word": "gecko",
            "clue": "Always sticks around",
            "used": false
        },
        {
            "word": "hyena",
            "clue": "A laughing animal",
            "used": false
        },
        {
            "word": "ibis",
            "clue": "Egyptian bird",
            "used": false
        },
        {
            "word": "jaguar",
            "clue": "A wild American cat",
            "used": false
        },
        {
            "word": "kudu",
            "clue": "A large antelope",
            "used": false
        },
        {
            "word": "astronaut",
            "clue": "Travels in space",
            "used": false
        },
        {
            "word": "bridge",
            "clue": "Spans a physical obstacle",
            "used": false
        },
        {
            "word": "castle",
            "clue": "A fortified building",
            "used": false
        },
        {
            "word": "desert",
            "clue": "Dry area",
            "used": false
        },
        {
            "word": "engine",
            "clue": "Brought on the Industrial Age",
            "used": false
        },
        {
            "word": "fountain",
            "clue": "Spits water into the air",
            "used": false
        },
        {
            "word": "garden",
            "clue": "Gnome home",
            "used": false
        },
        {
            "word": "hospital",
            "clue": "A place where sick or injured people are treated",
            "used": false
        },
        {
            "word": "lighthouse",
            "clue": "A tower with a light to guide ships",
            "used": false
        },
        {
            "word": "observatory",
            "clue": "A building equipped for observing celestial events",
            "used": false
        },
        {
            "word": "quarry",
            "clue": "A place where stone or minerals are extracted",
            "used": false
        },
        {
            "word": "river",
            "clue": "A large natural stream of water flowing in a channel",
            "used": false
        },
        {
            "word": "stadium",
            "clue": "A large structure for sports or entertainment events",
            "used": false
        },
        {
            "word": "temple",
            "clue": "A building devoted to worship",
            "used": false
        },
        {
            "word": "university",
            "clue": "An institution of higher education and research",
            "used": false
        },
        {
            "word": "yacht",
            "clue": "A medium-sized sailboat",
            "used": false
        },
        {
            "word": "zeppelin",
            "clue": "A large airship",
            "used": false
        }
        ,
        {
            "word": "an",
            "clue": "A short article",
            "used": false
        },
        {
            "word": "be",
            "clue": "To exist",
            "used": false
        },
        {
            "word": "do",
            "clue": "To perform an action",
            "used": false
        },
        {
            "word": "go",
            "clue": "To move from one place to another",
            "used": false
        },
        {
            "word": "if",
            "clue": "A conditional word",
            "used": false
        },
        {
            "word": "it",
            "clue": "A pronoun for a thing",
            "used": false
        },
        {
            "word": "me",
            "clue": "A pronoun for oneself",
            "used": false
        },
        {
            "word": "no",
            "clue": "A negative response",
            "used": false
        },
        {
            "word": "on",
            "clue": "A preposition indicating position",
            "used": false
        },
        {
            "word": "up",
            "clue": "A direction opposite to down",
            "used": false
        }
    ];


