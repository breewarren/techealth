class Patient < ApplicationRecord

    has_many :encounters
    has_many :diagnostics
    has_many :medical_providers, through: :encounters
    has_many :medical_providers, through: :diagnostics

end
