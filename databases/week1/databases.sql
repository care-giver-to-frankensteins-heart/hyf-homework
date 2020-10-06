CREATE TABLE `HYF`.`students` (
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL,
  `class` VARCHAR(45) NULL,
  `studentid` INT NOT NULL,
  PRIMARY KEY (`studentid`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);


CREATE TABLE `HYF`.`course` (
  `name` VARCHAR(45),
  `duration` VARCHAR(45),
  `id` INT NOT NULL,
  PRIMARY KEY (`id`);
  
INSERT INTO `HYF`.`course` (`name`, `duration`) VALUES ('javascript', '9 weeks');

-- from class exercises 
-- SELECT * FROM user;
-- SELECT * FROM task;
-- SELECT * 
-- FROM task 
-- WHERE title = 'Buy new phone';
-- SELECT * from task 
-- where description IS NOT NULL
 -- AND created BETWEEN '2017-10-01' AND '2017-10-30'
 -- AND title LIKE 'buy%'

-- select title, status from task 
-- ORDER BY due_date DESC;

-- select title, status_id as status from task 
-- where status_id = '1';

-- HOMEWORK
-- Find out how many tasks are in the task table
SELECT COUNT(id) AS count_task
FROM task;

-- Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(id) AS count_invalid_date
FROM task
WHERE due_date IS null;

-- Find all the tasks that are marked as done
SELECT * FROM task
WHERE status_id=3;

-- Find all the tasks that are not marked as done
SELECT * FROM task
WHERE status_id!=3;

-- Get all the tasks, sorted with the most recently created first
SELECT * FROM task
ORDER BY created DESC;

-- Get the single most recently created task
SELECT * FROM task
ORDER BY created DESC
LIMIT 1;

-- Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date FROM task
WHERE title LIKE '%database%' OR description LIKE '%database%';

-- Get the title and status (as text) of all tasks
SELECT title AS task_title, status.name AS status
FROM task
JOIN status ON status.id = task.status_id;


-- Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS status, COUNT(task.title)
FROM task
JOIN status ON status.id = task.status_id
GROUP BY status_id;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name AS status, COUNT(task.title) as count_tasks
FROM task
JOIN status ON status.id = task.status_id
GROUP BY status_id
ORDER BY count_tasks DESC;
