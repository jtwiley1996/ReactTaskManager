const mongoose = require('mongoose');
const Task = require('./models/Tasks');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/task-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to seed the database with initial data
async function seedDatabase() {
  try {
    // Clear existing data
    await Task.deleteMany();

    // Insert some initial tasks
    const tasks = [
      { title: 'Complete task 1', description: 'This is task 1' },
      { title: 'Complete task 2', description: 'This is task 2' },
      { title: 'Complete task 3', description: 'This is task 3' },
    ];

    // Insert tasks into the database
    await Task.insertMany(tasks);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    mongoose.disconnect();
  }
}

// Seed the database
seedDatabase();
