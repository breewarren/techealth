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
jane_doe = MedicalProvider.create(name: "Jane Doe", image: "https://ca.slack-edge.com/T02MD9XTF-U014PHQJDB6-b1c7816d3d41-512", email: "janedoe@houstonemg.com", specialty: "Emergency Medicine", password: "3693", credentials: "MD", practice: "Houston Emergency Medical Group")

#Patient
paige_willis = Patient.create(name: "Paige Willis", gender: "F", dob: "1993-04-28", mrn: 9876543210, age: 27, medications: "Test Medications", allergies: "Penicillin", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: true)
ambreea_warren = Patient.create(name: "Ambreea Warren", gender: "F", dob: "1993-03-06", mrn: 1357924680, age: 27, medications: "Test Medications", allergies: "Bactrim", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: false)
andre_armstead = Patient.create(name: "Andre Armstead", gender: "M", dob: "1988-05-13", mrn: 2468013579, age: 32, medications: "Test Medications", allergies: "NKDA", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: true)
drew_thompson = Patient.create(name: "Drew Thompson", gender: "M", dob: "2000-07-05", mrn: 1234567890, age: 20, medications: "Test Medications", allergies: "NKDA", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: false)
hallie_townsell = Patient.create(name: "Hallie Townsell", gender: "F", dob: "1993-06-12", mrn: 3694705812, age: 39, medications: "Test Medications", allergies: "NKDA", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: true)
devin_davis = Patient.create(name: "Devin Davis", gender: "M", dob: "1995-05-03", mrn: 4859601237, age: 25, medications: "Test Medications", allergies: "NKDA", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: true)
stephanie_segura = Patient.create(name: "Stephanie Segura", gender: "F", dob: "1993-07-21", mrn: 5061728394, age: 27, medications: "Test Medications", allergies: "NKDA", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: true)
peyton_williams = Patient.create(name: "Peyton Williams", gender: "M", dob: "1993-01-07", mrn: 876543210, age: 38, medications: "Test Medications", allergies: "NKDA", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: true)
olivia_smith = Patient.create(name: "Olivia Smith", gender: "F", dob: "1993-02-08", mrn: 1357924680, age: 65, medications: "Test Medications", allergies: "NKDA", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: false)
joshua_miller = Patient.create(name: "Joshua Miller", gender: "M", dob: "1993-03-09", mrn: 9876543210, age: 54, medications: "Test Medications", allergies: "NKDA", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: true)
mia_lopez = Patient.create(name: "Mia Lopez", gender: "F", dob: "1993-04-10", mrn: 2468013579, age: 76, medications: "Test Medications", allergies: "NKDA", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: false)
ashley_johnson = Patient.create(name: "Ashley Johnson", gender: "F", dob: "1993-10-30", mrn: 3694705812, age: 82, medications: "Test Medications", allergies: "NKDA", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: true)
alex_jones = Patient.create(name: "Alex Jones", gender: "M", dob: "1993-11-14", mrn: 4859601237, age: 44, medications: "Test Medications", allergies: "NKDA", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: false)
kim_nguyen = Patient.create(name: "Kim Nguyen", gender: "F", dob: "1993-12-19", mrn: 5061728394, age: 83, medications: "Test Medications", allergies: "NKDA", mhx: "Test MHx", shx: "Test SHx", sohx: "Test SoHx", fhx: "Test FHx", insured: true)
john_doe = Patient.create(name: "John Doe", gender: "M", dob: "1970-03-07", mrn: 1234567890, age: 50, medications: "Metformoin 500mg, Atorvastatin 75mg, Lisinopril 10mg", allergies: "Penicillin", mhx: "Diabetes Mellitus, Hyperlipidemia, Hypertension", shx: "Coronary Artery Bypass Surgery, 2015; Knee Replacement (right), 1984", sohx: "Patient denies tobacco or drug use, but admits to alcohol consumption on occasion", fhx: "Coronary Heart Disease, Paternal; Esophageal Cancer, Maternal", insured: true)

#Encounter
encounter1 = Encounter.create(date: "2020-12-02", chief_complaint: "Abdominal Pain", acuity: "Emergent", vitals: "Test Vitals", hpi: "Test HPI", ros: "Test ROS", physical_exam: "Test PE", assessment: "Test Assessment", treatment: "Test Treatment", medical_provider_id: jane_doe.id, patient_id: paige_willis.id)
encounter2 = Encounter.create(date: "2020-12-01", chief_complaint: "COVID-19 Symptoms", acuity: "Urgent", vitals: "Test Vitals", hpi: "Test HPI", ros: "Test ROS", physical_exam: "Test PE", assessment: "Test Assessment", treatment: "Test Treatment", medical_provider_id: jane_doe.id, patient_id: ambreea_warren.id)
encounter3 = Encounter.create(date: "2020-12-02", chief_complaint: "Headache", acuity: "Less Urgent", vitals: "Test Vitals", hpi: "Test HPI", ros: "Test ROS", physical_exam: "Test PE", assessment: "Test Assessment", treatment: "Test Treatment", medical_provider_id: jane_doe.id, patient_id: andre_armstead.id)
encounter4 = Encounter.create(date: "2020-11-30", chief_complaint: "Syncope", acuity: "Urgent", vitals: "Test Vitals", hpi: "Test HPI", ros: "Test ROS", physical_exam: "Test PE", assessment: "Test Assessment", treatment: "Test Treatment", medical_provider_id: jane_doe.id, patient_id: drew_thompson.id)
encounter5 = Encounter.create(date: "2020-12-02", chief_complaint: "Chest Pain", acuity: "Emergent", vitals: "Heart Rate: 120 bpm, Blood Pressure: 145/87 mmHg, Temperature: 98.7 F, Respiratory Rate: 22 bpm, Pulse Oximetry: 99%", hpi: "Onset of chest pain began on Wednesday night, which has lasted for 2 hours. Patient brought in by EMS. Chest pain is located in the epigastric region, radiates to the left arm, and is squeezing, pressured, and aching in character. Patient states severity is 9/10. Modifying factors include improvement when seated and worsening when walking or talking. Patient has taken 200mg Ibuprofen with no relief. Associating symptoms include diaphoresis and nausea.", ros: "Test ROS", physical_exam: "General: Patient appears fatigued and in distress, Vision: No Abnormal Findings, Head & Neck: No Abnormal Findings, Pulmonary: No Abnormal Findings, Cardiovascular: RRR. S1, S2 normal without murmur/gallop/rub. No S3, S4. Chest pain elicited with palpation of left chest, Gastrointestinal: No Abnormal Findings, Genitourinary: No Abnormal Findings, Hemotalogy & Oncology: No Abnormal Findings, ObGyn & Breast (female only): N/A, Neurological: No Abonormal Findings, Endocrine: No Abnormal Findings, Musculoskeletal: Decreased range of motion in shoulders. Chest pain elicited with movement of arms, Psychiatric: No Abnormal Findings, Skin & Hair: No Abnormal Findings", assessment: "I21.3 ST elevation (STEMI) myocardial infarction of unspecified site", treatment: "1. Admit; Coronary Artery Bypass Surgery 2. Start Metopropol 100mg Intravaneously 3. Cardiac Rehabilitation Therapy 4. Follow up with PCP and Cardiologist in 4 weeks", medical_provider_id: jane_doe.id, patient_id: john_doe.id)

#Diagnostic Testing
diagnostic1 = Diagnostic.create(date: "2020-12-02", description: "COVID-19 Anterior Nasal Swab", received: false, abnormalities: "Not currently applicable. Please revisit once status of diagnostic testing is no longer pending", patient_id: paige_willis.id, medical_provider_id: jane_doe.id)
diagnostic2 = Diagnostic.create(date: "2020-11-30", description: "CBC/CMP Blood Panel", received: false, abnormalities: "Not currently applicable. Please revisit once status of diagnostic testing is no longer pending", patient_id: ambreea_warren.id, medical_provider_id: jane_doe.id)
diagnostic3 = Diagnostic.create(date: "2020-12-01", description: "MRI Head & Neck", received: true, abnormalities: "No abnormalities noted, as there is unremarkable evidence showing potential aneurysm", patient_id: andre_armstead.id, medical_provider_id: jane_doe.id)
diagnostic4 = Diagnostic.create(date: "2020-12-01", description: "CT Abdomen & Pelvis", received: true, abnormalities: "Indication of a swollen appendix without contrast in the lumen. Possible appendicitis", patient_id: drew_thompson.id, medical_provider_id: jane_doe.id)
diagnostic5 = Diagnostic.create(date: "2020-12-02", description: "EKG", received: true, abnormalities: "ST elevation noted. Acute myocardial infarction suspected", patient_id: john_doe.id, medical_provider_id: jane_doe.id)

puts "Good to go!"