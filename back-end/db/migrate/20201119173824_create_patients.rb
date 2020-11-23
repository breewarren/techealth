class CreatePatients < ActiveRecord::Migration[6.0]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :gender
      t.string :dob
      t.integer :mrn
      t.integer :age
      t.string :medications
      t.string :allergies
      t.string :mhx
      t.string :shx
      t.string :sohx
      t.string :fhx
      t.boolean :insured

      t.timestamps
    end
  end
end
