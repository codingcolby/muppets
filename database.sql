CREATE TABLE "cast" (
"cast_id" SERIAL PRIMARY KEY,
"name" VARCHAR(50) NOT NULL,
"species" VARCHAR(50) NOT NULL,
"about_info" TEXT
);

CREATE TABLE "photos" (
"photo_id" SERIAL PRIMARY KEY,
"photo_title" VARCHAR(100),
"photo_composition" VARCHAR(40),
"imagefile" VARCHAR(120)
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
('Kermit', 'Portrait', '/image/kermit.jpeg'),
('Beaker', 'Ted Talk shot', '/image/beaker.jpeg'),
('Fozzie', 'Portrait', '/image/fozzie.jpeg'),
('Miss Piggy', 'Portrait', '/image/miss_piggy.jpeg'),
('Statler and Waldorf', 'In their element - the box', '/image/Statler_Waldorf.jpg'),
('Who is this again?', 'Candid', '/image/MahnaMahna.jpg'),
('My main man', 'Mugshot', '/image/animal.jpg'),
('He is so loveable - hold on!', 'Action shot', '/image/gonzo.jpg'),
('PSA: Wash your hands', 'Stately', '/image/rizzo-the-rat.jpg'),
('PSA: Take this very seriously', 'Podium shot', '/image/sam-the-eagle.jpg'),
('Not Dr No, a Dr in the know!', 'Article feature', '/image/DrBunsenHoneydew.jpg'),
('Making do with whatcha got', 'On the job', '/image/swedishchef.jpg');
