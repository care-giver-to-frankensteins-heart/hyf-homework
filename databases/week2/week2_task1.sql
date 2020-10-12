-- Add a task with these attributes:
-- title, description, created, updated, dueDate, statusID, userID
INSERT INTO hyf.task (
title,
description,
created, 
updated,
due_date,
status_id,
user_id
) VALUES (
'learn about mysql',
'google how to insert values with queries',
NOW(),
NOW(),
'2021-01-01 12:00:00',
1,
2
);

-- Change the title of a task with these attributes: taskID, newTitle
UPDATE hyf.task
SET title = 'Already a billionaire'
WHERE id = 2;

-- Change the task due date with these attributes: taskID, newDueDate
UPDATE hyf.task
SET due_date = '2020-05-01 12:30:00'
WHERE id = 2;

-- Change the task status with these attributes: taskID, newStatus
UPDATE hyf.task
SET status_id = 3
WHERE id = 2;

-- Mark a task as complete with this attribute: taskID
UPDATE hyf.task
SET status_id = 3
WHERE id = 2;

-- Delete task with this attribute: taskID
DELETE FROM hyf.task
WHERE id = 3;