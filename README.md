# techealth

## Models & Relationships

### MedicalProvider | Encounter (Join Model) | Diagnostic Testing (Join Model) | Patient

<br/>

### MedicalProvider <br />
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
