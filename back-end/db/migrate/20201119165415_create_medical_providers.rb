class CreateMedicalProviders < ActiveRecord::Migration[6.0]
  def change
    create_table :medical_providers do |t|
      t.string :name
      t.string :image
      t.string :email
      t.string :specialty
      t.string :password
      t.string :credentials
      t.string :practice

      t.timestamps
    end
  end
end
