class CreateEncounters < ActiveRecord::Migration[6.0]
  def change
    create_table :encounters do |t|
      t.string :date
      t.string :chief_complaint
      t.string :acuity
      t.string :vitals
      t.string :hpi
      t.string :ros
      t.string :physical_exam
      t.string :assessment
      t.string :treatment
      t.integer :medical_provider_id
      t.integer :patient_id

      t.timestamps
    end
  end
end
