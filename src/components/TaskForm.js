import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function TaskForm({ onAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    onAdd({ name });
    setName('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTask">
        <Form.Label>Task name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add task
      </Button>
    </Form>
  );
}

export default TaskForm;
