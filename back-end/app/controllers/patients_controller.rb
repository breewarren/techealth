class PatientsController < ApplicationController

    def index
        patients = Patient.all
        # render json: patients
        render json: patients, include: [:medical_providers, :encounters, :diagnostics]
    end

    def show
        patient = Patient.find(params[:id])
        render json: patient, include: [:medical_providers, :encounters, :diagnostics]
    end

    def create
    end

    def update
    end
end
