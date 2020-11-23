class Diagnostic < ApplicationRecord

    belongs_to :medical_provider
    belongs_to :patient
    
end
