class AuthController < ApplicationController
    skip_before_action :logged_in?, only: [:create]

    #sign in
    def create
        # byebug; test params
        medical_provider = MedicalProvider.find_by(email: medical_provider_params[:email])
        # .authenticate uses bycrypt to check password
        if medical_provider && medical_provider.authenticate(medical_provider_params[:password])
            render json: {medical_provider: medical_provider, token: encode_token({medical_provider_id: medical_provider.id})}
        else
            render json: { message: 'Invalid username or password. Please try again.' }, status: :unauthorized
        end
    end
    
    private

    def medical_provider_params
        params.require(:medical_provider).permit(:email, :password)
    end

end

