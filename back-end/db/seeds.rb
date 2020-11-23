# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

MedicalProvider.destroy_all
Patient.destroy_all
Encounter.destroy_all
Diagnostic.destroy_all

#Medical Provider
jane_doe = MedicalProvider.create(name: "Jane Doe", image: "https://ca.slack-edge.com/T02MD9XTF-U014PHQJDB6-b1c7816d3d41-512", email: "janedoe@gmail.com", specialty: "Emergency Medicine", password: "3693", credentials: "MD", practice: "Houston Emergency Medical Group")

#Patient
john_doe = Patient.create(name: "John Doe", gender: "M", dob: "01/01/90", mrn: 1234567890, age: 30, medications: "Test Medications", allergies: "NKDA", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: true)

#Encounter
encounter1 = Encounter.create(date: "12/01/20", chief_complaint: "Chest Pain", acuity: 5, vitals: "Test Vitals", hpi: "Test HPI", ros: "Test ROS", physical_exam: "Test PE", assessment: "Test Assessment", treatment: "Test Treatment", provider_id: jane_doe.id, patient_id: john_doe.id)

#Diagnostic Testing
diagnostic1 = Diagnostic.create(date: "12/01/20", description: "EKG", received: true, abnormalities: "N/A", patient_id: john_doe.id, provider_id: jane_doe.id)

puts "Good to go!"