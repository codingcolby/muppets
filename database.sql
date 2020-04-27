CREATE TABLE "cast" (
"cast_id" SERIAL PRIMARY KEY,
"name" VARCHAR(50) NOT NULL,
"species" VARCHAR(50) NOT NULL,
"about_info" TEXT
);

CREATE TABLE "photos" (
"photo_id" SERIAL PRIMARY KEY,
"photo_title" VARCHAR(100),
"photo_composition" VARCHAR(40)
);

INSERT INTO "cast" ("name", "species", "about_info") VALUES
('Kermit', 'Frog', 'Likes flies in his soup'),
('Miss Piggy', 'Porcine', 'Believes eating a BLT is not cannabalism'),
('Beaker', 'Human', 'Once set off a skunk bomb during a science demo in the Pentagon'),
('Fozzie', 'Bear', 'Wants to be the official mascot for the Ursus cohort'),
('Gonzo', 'Fowl', 'Is hoarding tacos'),
('MahnaMahna', 'Dude', 'Is fond of earworms'),
('Statler and Waldorf', 'Grouchy Old Men', 'Have enthusiastically and successfully mastered the art of becoming curmudgeonly in their respective retirements - note: someone should really separate these two - it is like they feed off of one another or something'),
('Swedish Chef', 'Human', 'Great at dinner parties - food and entertainment!'),
('Animal', 'Wildlife', 'Carefree, fun-loving, boisterous soul that reminds us not to take ourselves too seriously');

INSERT INTO "photos" ("photo_title", "photo_composition", "imagefile") VALUES
('Kermit', 'Portrait', '/images/kermit.jpeg'),
('Beaker', 'Ted Talk shot', '/images/beaker.jpeg'),
('Fozzie', 'Portrait', '/images/fozzie.jpeg'),
('Miss Piggy', 'Portrait', '/images/miss_piggy.jpeg'),
('Statler and Waldorf', 'In their element - the box', '/images/Statler_Waldorf.jpg'),
('Who is this again?', 'Candid', '/images/MahnaMahna.jpg'),
('My main man', 'Mugshot', '/images/animal.jpg'),
('He is so loveable - hold on!', 'Action shot', '/images/gonzo.jpg'),
('PSA: Wash your hands', 'Stately', '/images/rizzo-the-rat.jpg'),
('PSA: Take this very seriously', 'Podium shot', '/images/sam-the-eagle.jpg'),
('Not Dr No, a Dr in the know!', 'Article feature', '/images/DrBunsenHoneydew.jpg'),
('Making do with whatcha got', 'On the job', '/images/swedishchef.jpg');
