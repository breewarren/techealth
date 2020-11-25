# electronic medical record application


## Application GIF/Image
![Electrify Image](https://i.imgur.com/EznkQCT.png)

## Table of Contents

- [Application Description](#application-description)
- [Video Walkthrough](#intro-video)
- [Technologies](#technologies)
- [Setup](#setup)
- [Code Examples](#code-examples)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
- [Contact](#contact)
- [License](#license)

## Application Description

Electrify is a full-stack application that allows the user to find and compare Electric Vehicles! A user can view electric cars and trucks currently on the market as well as those coming soon and compare them side-by-side.

Dive in and find the perfect Electric Vehicle for you! The world is surging forward. Are you?

## Video Walkthrough

[EMR on YouTube](https://youtu.be/nzWYBCkjfmE)

## Technologies

- HTML5
- CSS
- JavaScript
- React
- Material UI
- Flaticon
- Animista
- Ruby
- Rails
- PostgreSQL

## Setup

Electrify is live! Visit Electrify out in the wild at https://get-electrified.web.app today. No further setup required!

## Code Examples

```javaScript
class Cars extends Component {
	state = {
		allVehicles: [],
		carsArray: [],
		carsCompare: [],
	};

	componentDidMount() {
		fetch(baseURL)
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					carsArray: data,
				})
			);
	}

	collectCars = (vehicle) => {
		const allCars = this.state.allVehicles.filter(
			(vehicle) => vehicle.category == "car"
		);
		this.setState({
			carsArray: allCars,
		});
	};
```

```javascript
function CarsCollection(props) {
	const result = props.carsArray.filter(
		(vehicle) => vehicle.category === "car"
	);

	const showCars = result.map((car) => {
		return (
			<CarCard
				vehicle={car}
				action={props.addCar}
				carsCompare={props.carsCompare}
				color={
					props.carsCompare.find((favorite) => favorite.id === car.id)
						? "gray"
						: "primary"
				}
				iconBoolean={true}
			/>
		);
	});

	return (
		<div>
			<Grid container spacing={6} justify="center">
				{showCars}
			</Grid>
		</div>
	);
}
```

## Features

- View electric cars and trucks currently on the market
- View electric cars and trucks coming to market soon
- Compare electric vehicles and their stats side-by-side to find the right fit for you
- Fully responsive web-app that looks clean on all devices

## Status

Version 1.0 is complete and deployed (https://get-electrified.web.app)!

Future versions may include an expanded vehicle inventory, vehicle sort features, and UI/UX improvements.

## Inspiration



EMR is designed to be a tool that ...

I hope that you find using Electrify to be enjoyable and helpful!

## Contact

[Bree Warren](https://www.linkedin.com/in/bree-warren/)

Feel free to contact me with any questions or suggestions!

## License

[Click to view](https://github.com/MattLong34/electrify-frontend/blob/master/LICENSE.md)

#
# electronic medical record application (lite)

## Models & Relationships

### MedicalProvider | Encounter (Join Model) | Diagnostic Testing (Join Model) | Patient

<br/>

### MedicalProvider<br />
* A MedicalProvider has many Encounters
* A MedicalProvider has many Patients, through Encounters (& DiagnosticTests)
* A MedicalProvider has many DiagnosticTests

### Encounter (Join Model) <br />
* An Encounter belongs to a MedicalProvider
* An Encounter belongs to a Patient

### DiagnosticTest (Join Model) <br />
* A DiagnosticTest belongs to a MedicalProvider
* A DiagnosticTest belongs to a Patient

### Patient <br/>
* A Patient has many Encounters
* A Patient has many MedicalProviders, through Encounters (& DiagnosticTests)
* A Patient has many DiagnosticTests

#

## SQL Database Table Properties
### MedicalProvider Table Properties
* Name
* Image
* Email
* Specialty
* Password
* Credentials (MD, RN, etc.)
* Practice Location

### Encounter Table Properties
* Date
* Chief Complaint
* Acuity (1-5)
* Vitals
* History of Present Illness (HPI)
* Review of Systems
* Physical Exam
* Assessment
* Treatment
* Provider ID (Foreign Key)
* Patient ID (Foreign Key)

### Diagnostics Table Table Properties
* Date of Order
* Test Description
* Received?
* Patient ID (Foreign Key)
* Provider ID (Foreign Key)

### Patient Table Properties
* Name
* Gender
* DOB
* Medical Record Number (MRN)
* Age
* Medications
* Allergies
* Medical History
* Surgical History
* Social History
* Family History
* Insured?

#

## Component Hierarchy


#

## Functionality
* UI Flow: Landing Page -> SignUp -> LogIn -> Medical Provider Profile -> View Medical Provider Details -> Create New Encounter -> Select From "My Patients, "All Patients," or "Create New Patient" -> Complete New Encounter Form -> View Encounter Details -> Order (New) Diagnostic Test -> View Test -> Change to Received -> Abnormalities -> Update Encounter with Treatment/Plan -> Patient Details

1. Patient Exists
2. Select as "My Patient"
3. New Encounter with Patient Dropdown List

* Styling: React Bootstrap

* Landing Page
  * Video in Background
  * Logo appears on Timer
* SignIn/SignUp
  * JWT Authorization
* Medical Provider Profile
  * Profile Details Container
    * Full CRUD Functionality
  * "My Encounters" Container
    * Create "New Encounter" Feature
  * "My Patients" Container
    * Cards of "My Patients" in Columns
    * Access to View "My Patients" or All Patients
    * On each card, feature to view "Patient Details"
    * On each card, feature to remove Patient from "My Patients"
  * Navagation Bar
* Patient Dashboard
  * Filter Options (by acuity)
  * Sort Options (by name, alphabetically)
  * Search Bar (by name)
  * "All Patients" Component
    * Cards of All Patients in Columns
    * On each card, feature to add Patient to "My Patients"
    * On each card, feature to view "Patient Details"
  * Navagation Bar
* New Encounter
  * Soft Scroll Feature (react-scroll)
  * Complex Form
* Encounter Details
  * All attributes dynamically rendered in an user-friendly, aesthically pleasing format
* New Patient
  * Soft Scroll Feature
  * Complex Form
* Patient Details 
  * All attributes dynamically rendered in an user-friendly, aesthically pleasing format

#
## Stretch Goals
* Diagnostic Testing (bloodwork, imaging)

-----

## Tenative Schedule

## Related Information
<br/>

### Video Demo:
 [Video Demo Link](https://video.com/blahblahblah)

### Difficulties/Things Learned:
* 

### Changes/Modifications/Additions:
* 


### Highlights
* 

# active., by ambreea and abbosbek

### Technical Description: 
A web application with CRUD functioning and analytic features, incorporating:
* Object Orientation Models (via Ruby)
* MVC-based Architectural Framework Design (via Rails)
* Object Relational Mapping (with ActiveRecord)
* SQL Databases (using sqlite3)
* User Sesssions/Cookies
* Username/Password Validation & Authentication
* User Authorizations

<br />

### App Description:
active. was inspired by its creators who believe in the importance of an agile, athletic lifestyle. With a series of features, including: Assessment, where one is able to gain knowledge regarding an individual's overall health, as well as WorkoutLogs/RecoveryLogs, which enables one to keep track of movement from a selection of our comprehensive list of options, a user has the ability to attain their health goals, regardless of experience level.
#
## Instructions:
### Click [here](http://localhost:3000/) to begin the application!

#
#
## Models & Relationships

        Assessment | User | WorkoutLog (Join Model) | Workout | RecoveryLog (Join Model) | Recovery

### User <br/>
* A User has many Assessments

* A User has many WorkoutLogs
* A User has many Workouts, through WorkoutLogs
* A User has many RecoveryLogs
* A User has many Recoveries, through RecoveryLogs

### Workout <br/>
* A Workout has many WorkoutLogs

* A Workout has many Users, through WorkoutLogs

### Recovery <br/>
* A Recovery has many RecoveryLogs

* A Recovery has many Users, through RecoveryLogs

### Assessment <br/>
* An Assessment belongs to a User

### WorkoutLog <br/>
* A WorkoutLog belongs to a User

* A WorkoutLog belongs to a Workout

### RecoveryLog <br/>
* A RecoveryLog belongs to a User

* A RecoveryLog belongs to a Recovery
#
#
## SQL Database Table Properties
<br>

### User Table Properties
* Name

* Username (Email Address)
* Password

### Assessment Table Properties
* Age (in years)

* Sex (M or F)
* Height (in inches)
* Weight (in pounds)
* Body Fat Percentage
* Health Goal (Fat Loss, Muscle Gain, or Maintenance)
* User ID

### Workout Table Properties
* Workout Type

### Recovery Table Properties
* Recovery Type

### Workout Log Table Properties
* Date

* Duration (in minutes)
* Calories Burned
* User ID
* Workout ID

### Recovery Log Table Properties
* Date

* Duration (in minutes)
* Recovery Points (up tp 5)
* User ID
* Recovery ID

#
#
## CRUD Functionality
<br>

### Create
* User can create a new User account

        UsersController#new
        UsersController#create

* User can create a new Assessment

        AssessmentsController#new
        AssessmentsController#create

* User can create a new WorkoutLog
        
        WorkoutLogsController#new
        WorkoutLogsController#create

* User can create a new RecoveryLog

        RecoveryLogsController#new
        RecoveryLogsController#create
#
### Read
* User can view User account details, along with associated Assessments, WorkoutLogs, and RecoveryLogs

        UsersController#show

* User can view a list of all Workouts

        WorkoutsController#index

* User can view a list of all Recoveries

        RecoveriesController#index
* User can view Assessment details

        AssessmentsController#show

* User can view WorkoutLog details

        WorkoutLogsController#show

* User can view RecoveryLog details

        RecoveryLogsController#show 
#
### Update
* User can update User account details

        UsersController#edit
        UsersController#update
* User can update an existing Assessment

        AssessmentsController#edit
        AssessmentsController#update

* User can update an existing WorkoutLog details

        WorkoutLogsController#edit
        WorkoutLogsController#update
* User can update an existing RecoveryLog details

        RecoveryLogsController#edit
        RecoveryLogsController#update
#
### Delete
* User can delete its existing User account

        UsersController#destory

* User can delete an existing Assessment

        AssessmentsController#destory

* User can delete an existing WorkoutLog

        WorkoutLogsController#destroy

* User can delete an existing RecoveryLog

        RecoveryLogsController#destroy
#
## Additional Model Methods
<br/>

### Assessment
* User is provided with calculated Body Mass Index (BMI) based on height and weight
    
        Assessment#current_bmi
* User is provided with recommended Body Mass Index (BMI) based on height and weight
    
        Assessment#recommended_bmi
* User is provided with body fat category, based on sex and current body fat %

        Assessment#current_bf_percent
* User is provided with recommended body fat range, based on sex and current body fat %

        Assessment#recommended_bf_percent
* User is provided with maximum, based on age

        Assessment#max_hr
* User is provided with target heart rate, based on age

        Assessment#target_hr
* User is provided with recommended caloric intake based on Health Goal

        Assessment#caloric_intake
* User is provided with recommended water intake, based on weight

        Assessment#water_intake
#
### User
* User is provided with a Workout accomplishment message upon logging 10 WorkoutLogs

        User#workout_accomplishment

* User is provided with a Recovery accomplishment message upon accumulation of 15 Recovery Points

        User#recovery_accomplishment

#
### WorkoutLog
* User is provided with total number of WorkoutLog entries

        WorkoutLog#total_workouts
* User is provided with total calories burned of all WorkoutLogs

        WorkoutLog#total_calories_burned
* User is provided with total duration of all WorkoutLogs

        WorkoutLog#total_duration
* User is provided with WorkoutLog with highest amount of calories burned
        
        WorkoutLog#highest_calories_burned
* User is provided with WorkoutLog with longest duration

        WorkoutLog#longest_duration
* User is provided with total Workout Points

        WorkoutLog#total_workout_points
#
### RecoveryLog
* User is provided with total number of RecoveryLog entries

        RecoveryLog#total_recoveries
* User is provided with total duration of all RecoveryLogs

        RecoveryLog#total_duration
* User is provided with RecoveryLog with longest duration

        RecoveryLog#longest_duration
* User is provided with total Recovery Points

        RecoveryLog#total_recovery_points

#
#
## Related Information
<br/>

### Video Demo:
 [Video Demo Link](https://video.com/blahblahblah)

### Difficulties/Things Learned:
* Sessions and cookies
* Authentication & authorization
* Requiring Login
* 6y 

### Changes/Modifications/Additions:
* Frontend
  * More front-end styling incorporation
* Backend
  * Use of partial forms, commenting and overall refinement of code

  * Default dropdown selection on new/edit forms
* Application Features:
  * More specific points system for WorkoutLog and RecoveryLog

  * Ability for creationg of custom Workouts and Recoveries
  * Links to details on Workouts and Recoveries

### Highlights
* Introduction to CSS, aesthetic of form pages, navigation bar, and single-selection checkboxes
#

## Thank you! <br> Bree Warren and Abbosbek Muydinboev





-readme
-fix resources on back-end
-finish resources on controller

stretch:
-validation/feedback to forms