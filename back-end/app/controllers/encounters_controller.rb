class EncountersController < ApplicationController

    def index
        encounters = Encounter.all
        render json: encounters, include: [:medical_provider, :patient]
    end

    def show
        encounter = Encounter.find(params[:id])
        render json: encounter, include: [:medical_provider, :patient]
    end

    def create
        encounter = Encounter.create!(encounter_params)
        render json: {encounter: encounter}, status: :created
    end

    def update
    end

    private

    def encounter_params
    params.require(:encounter).permit(:date, :chief_complaint, :acuity, :vitals, :hpi, :ros, :physical_exam, :assessment, :treatment, :medical_provider_id, :patient_id)
    end

end
