const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const employees = [
  { id: 1, name: "Alice Johnson", role: "Frontend Developer", department: "Engineering" },
  { id: 2, name: "Bob Smith", role: "UX Designer", department: "Design" },
  { id: 3, name: "Charlie Davis", role: "Data Analyst", department: "Analytics" }
];

// Route 1: Get all IDs and Names
app.get('/api/employees', (req, res) => {
  const summary = employees.map(emp => ({ id: emp.id, name: emp.name }));
  res.json(summary);
});

// Route 2: Get full profile by ID
app.get('/api/employees/:id', (req, res) => {
  const employeeId = parseInt(req.params.id);
  const profile = employees.find(emp => emp.id === employeeId);
  
  if (profile) {
    res.json(profile);
  } else {
    res.status(404).send("Employee not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
