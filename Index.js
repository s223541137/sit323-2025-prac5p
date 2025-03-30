const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Arithmetic Microservice! Use /add, /subtract, /multiply, or /divide endpoints with num1 and num2 query parameters.');
});

// Middleware to parse query parameters
app.use(express.json());

// Helper function to validate inputs
const validateNumbers = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    return 'Both num1 and num2 should be valid numbers.';
  }
  return null;
};

// Addition
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json({ error });

  res.json({ result: Number(num1) + Number(num2) });
});

// Subtraction
app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json({ error });

  res.json({ result: Number(num1) - Number(num2) });
});

// Multiplication
app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json({ error });

  res.json({ result: Number(num1) * Number(num2) });
});

// Division
app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  const error = validateNumbers(num1, num2);
  if (error) return res.status(400).json({ error });
  if (Number(num2) === 0) return res.status(400).json({ error: 'Division by zero is not allowed.' });

  res.json({ result: Number(num1) / Number(num2) });
});

// Start server
app.listen(PORT, () => {
  console.log(`Arithmetic microservice running at http://localhost:${PORT}`);
});
