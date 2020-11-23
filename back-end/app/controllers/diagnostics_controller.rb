class DiagnosticsController < ApplicationController

    def index
        diagnostics = Diagnostic.all
        render json: diagnostics, include: [:medical_provider, :patient]
    end

    def create
    end

    def update
    end

end
