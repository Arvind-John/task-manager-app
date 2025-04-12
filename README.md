# Task Manager App

A role-based Task Manager web application built using **React** and **Material UI (MUI)**. It supports user-specific task workflows, multi-user calendar views, photo uploads, and approval flows managed by Admins.

## Features

### User Roles

#### Admin

- View all submitted tasks.
- Approve/reject tasks with optional comments.
- View all tasks in a multi-user calendar.
- Create and delete any task.

#### Regular User

- Create and submit tasks for approval.
- Upload photos to tasks.
- View and manage personal tasks.
- See personal calendar with task status.

---

### Core Modules

#### 1. Dashboard

- Role-specific view for both Admin and User.
- Shows:
  - Pending Tasks
  - Tasks with deadlines approaching
  - Task progress bar
  - Quick links to calendar and profile

#### 2. Task Management

- Create new tasks (title, description, progress %, deadline).
- Upload multiple images.
- Submit for Admin approval.

#### 3. Calendar View

- FullCalendar or react-big-calendar integration.
- User: View own tasks (color-coded).
- Admin: View all tasks, filter by user or status.

#### 4. Admin Panel

- Approve/reject submitted tasks.
- Add/delete tasks.
- View task statuses: pending/approved/rejected.

#### 5. Profile Page

- Editable profile info (Full Name, Mobile Number, Photo).
- Role is read-only.
- Profile data view and edit capability.

---

## Technologies Used

- React.js
- Material UI

---

## Installation

- Clone the repository: git clone https://github.com/Arvind-John/task-manager-app
- Install dependencies: npm install
- Start the application: npm start

---

## How to use

### Creating a Task (User Flow)

1. Navigate to **"Task Page"**.
2. Fill in:
   - Task title
   - Description
   - Progress percentage (0–100)
   - Deadline (date picker)
3. Upload photo (optional).
4. Click **"Submit Task for Approval"**.

You'll get a confirmation once submitted. The Admin will then review it.

### Admin Panel (Admin Only)

1. Navigate to **"Admin Panel"**.
2. View all submitted tasks.
3. For each task:
   - Approve
   - Reject
   - Delete

---

## Future Improvements

- Connect to a backend (Node.js, Express, MongoDB, etc.)
- Set tasks to repeat on daily/weekly/monthly basis.
