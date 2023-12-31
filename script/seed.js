'use strict';

const { db, models: { User, Image } } = require('../server/db');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  // Creating User
  const arek = await User.create({ username: 'arek', password: '123' });
  console.log(`seeded user arek`);

  // Creating Images
  const imagesToCreate = [
    { name: 'Image 1', description: 'Description for image 1', filePath: '/Assets/Images/2023-12-04_00-16-24_8774.png', userId: arek.id },
    { name: 'Image 2', description: 'Description for image 2', filePath: '/Assets/Images/2023-12-03_23-57-19_6710.png', userId: arek.id },
    { name: 'Image 3', description: 'Description for image 2', filePath: '/Assets/Images/2023-12-03_22-28-19_9478.png', userId: arek.id },
    { name: 'Image 4', description: 'Description for image 2', filePath: '/Assets/Images/2023-12-03_23-30-29_4972.png', userId: arek.id },
    { name: 'Image 5', description: 'Description for image 2', filePath: '/Assets/Images/00003-3787907948.png', userId: arek.id },
    { name: 'Image 6', description: 'Description for image 2', filePath: '/Assets/Images/00012-1078574000.png', userId: arek.id },
    { name: 'Image 7', description: 'Description for image 2', filePath: '/Assets/Images/00001-1078573999.png', userId: arek.id },
    { name: 'Image 8', description: 'Description for image 2', filePath: '/Assets/Images/00002-1078573999.png', userId: arek.id },
    { name: 'Image 9', description: 'Description for image 2', filePath: '/Assets/Images/00011-651612451.png', userId: arek.id },
    { name: 'Image 10', description: 'Description for image 2', filePath: '/Assets/Images/00010-651612450.png', userId: arek.id },
    { name: 'Image 11', description: 'Description for image 2', filePath: '/Assets/Images/00009-651612449.png', userId: arek.id },
    { name: 'Image 12', description: 'Description for image 2', filePath: '/Assets/Images/00004-4129308988.png', userId: arek.id },
    { name: 'Image 13', description: 'Description for image 2', filePath: '/Assets/Images/00001-4129308985.png', userId: arek.id },
    { name: 'Image 14', description: 'Description for image 2', filePath: '/Assets/Images/00000-4129308984.png', userId: arek.id },


  ];
  const images = await Promise.all(
    imagesToCreate.map(image => Image.create(image))
  );
  console.log(`seeded ${images.length} images`);

  return {
    users: { 'arek': arek },
    images
  };
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;