class EncountersController < ApplicationController

    def show
        encounter = Encounter.find(params[:id])
        render json: encounter, include: [:medical_provider, :patient]
    end

    def create
    end

    def update
    end

end
