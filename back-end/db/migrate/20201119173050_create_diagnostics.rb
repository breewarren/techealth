class CreateDiagnostics < ActiveRecord::Migration[6.0]
  def change
    create_table :diagnostics do |t|
      t.string :date
      t.string :description
      t.boolean :received
      t.string :abnormalities
      t.integer :patient_id
      t.integer :provider_id

      t.timestamps
    end
  end
end
