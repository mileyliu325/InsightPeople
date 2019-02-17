This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Insight People Management System
* Commercial Rate: 5
* Hardness Rate: 5

#### System Includes

Time & Attendance Mangement

Performance Management

Shift Shceduling

Time Tracker

Time-off Management

#### UI Design (Reference)

![add-leave](https://raw.githubusercontent.com/australiaitgroup/jr-full-stack-projects/master/Insight-People-Management-System/add-leave.png)
- Add Leave
![add-approval](https://raw.githubusercontent.com/australiaitgroup/jr-full-stack-projects/master/Insight-People-Management-System/add-approvals.png)
- Add Approval

#### Site Structure

- Settings
	- Organization
		- departments
		- locations
		- staff
		- Holiday Calendar
	- Employee
		- Users
		- Employee profiles
	- Notification
		- Workflows
		- Mail Alerts
		- Scheduler
	- Approvals
- Time Tracker
	- Log Time
	- List roaster
		- List by Calender
		- List by table
- Leave Tracker
	- Leave List
	- Add Leave
- Organization
	- Department
		- Assign Department Lead
	- Employee
		- Employee(List all employee)
		- Directory(List all employee by directory)
	- Company Policy
	- Announcements
- My Approvals
	- My Approvals
	- My Requests

#### Features

##### Update company profiles

**description**

AS a Admin

I WANT to modify the profile of the company

SO THAT I'm able to change the company profile any time

**attributes (reference)**
- Email ID
- Current Locale
- Name
- Phone
- Address

##### Apply for leave

**description**

AS a Staff

I WANT to apply for a leave

SO THAT I'm able to change the company profile any time

**attributes (reference)**

- Leave type
- Duration
	- Full Day
	- Multiple Days
	- Part Day 
- Start Date
- Details
- Sent to (Supvervisor)
- Message
- Submit

##### Approve leave

**description**

AS a Admin

I WANT to approve for a leave

SO THAT I'm able to change the company profile any time

**attributes (reference)**
- User id
- Who approved
