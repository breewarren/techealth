class ApplicationController < ActionController::API
    before_action :logged_in?

    def encode_token(payload)
        # byebug, test payload
        JWT.encode(payload, "secret")
    end

    def logged_in?
        # byebug, test if able to retrieve token via request.headers['Authorization']
        header = request.headers['Authorization']
        token = header.split(" ")[1]
        begin
            medical_provider_id = JWT.decode(token, "secret")[0]["medical_provider_id"]
            return medical_provider = MedicalProvider.find(medical_provider_id)
        rescue
            medical_provider = nil
        end
        # byebug
        render json: {error: "Please log in."} unless medical_provider
    end
   
end
