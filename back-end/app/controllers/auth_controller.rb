class AuthController < ApplicationController
    # skip_before_action :authorized, only: [:create]

    def create
        # byebug; test params
        medical_provider = MedicalProvider.find_by(email: medical_provider_params[:email])
        # .authenticate uses bycrypt to check password
        if medical_provider && medical_provider.authenticate(medical_provider_params[:password])
            render json: {medical_provider: medical_provider}
        else
            render json: { message: 'Invalid username or password. Please try again.' }, status: :unauthorized
        end
    end
    
    private

    def medical_provider_params
        params.require(:medical_provider).permit(:email, :password)
    end

    # def create
    #     @user = User.find_by(username: user_login_params[:username])
    #     #User#authenticate comes from BCrypt
    #     if @user && @user.authenticate(user_login_params[:password])
    #       # encode token comes from ApplicationController
    #       token = encode_token({ user_id: @user.id })
    #       render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
    #     else
    #       render json: { message: 'Invalid username or password' }, status: :unauthorized
    #     end
    #   end

end
