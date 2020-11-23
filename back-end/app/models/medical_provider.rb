class MedicalProvider < ApplicationRecord

    has_many :encounters
    has_many :diagnostics
    has_many :patients, through: :encounters
    has_many :patients, through: :diagnostics

    validates :name, :email, :password, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 4}
    
    has_secure_password
end
