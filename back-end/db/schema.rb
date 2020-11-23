# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_19_173824) do

  create_table "diagnostics", force: :cascade do |t|
    t.string "date"
    t.string "description"
    t.boolean "received"
    t.string "abnormalities"
    t.integer "patient_id"
    t.integer "medical_provider_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "encounters", force: :cascade do |t|
    t.string "date"
    t.string "chief_complaint"
    t.integer "acuity"
    t.string "vitals"
    t.string "hpi"
    t.string "ros"
    t.string "physical_exam"
    t.string "assessment"
    t.string "treatment"
    t.integer "medical_provider_id"
    t.integer "patient_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "medical_providers", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "email"
    t.string "specialty"
    t.string "password_digest"
    t.string "credentials"
    t.string "practice"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "patients", force: :cascade do |t|
    t.string "name"
    t.string "gender"
    t.string "dob"
    t.integer "mrn"
    t.integer "age"
    t.string "medications"
    t.string "allergies"
    t.string "mhx"
    t.string "shx"
    t.string "sohx"
    t.string "fhx"
    t.boolean "insured"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
