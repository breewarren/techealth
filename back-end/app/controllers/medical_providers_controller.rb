class MedicalProvidersController < ApplicationController

    #landing page
    def welcome
        render json: "Landing Page"
    end

    #for testing purposes
    def index
        medical_providers = MedicalProvider.all
        render json: medical_providers, include: [:encounters, :patients, :diagnostics]
    end

    #medical provider profile
    def show
        medical_provider = MedicalProvider.find(params[:id])
        render json: medical_provider, include: [:encounters, :patients, :diagnostics]
    end

    #sign up
    def create
        medical_provider = MedicalProvider.create(medical_provider_params)
        if user.valid?
            render json: {medical_provider: medical_provider}, status: :created
        else
            render json: {error: "Attempt to create new Medical Provider unsuccessful"}, status: :not_acceptable
        end
    end

    def update
    end

    def destroy
    end

    private

    def medical_provider_params
        params.require(:medical_provider).permit(:name, :image, :email, :specialty, :password, :password_confirmation, :credentials, :practice)
    end
end
