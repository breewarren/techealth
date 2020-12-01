Rails.application.routes.draw do
  resources :patients
  resources :diagnostics
  resources :encounters
  resources :medical_providers
  
  #custom route for existing users to signin -> auth_controller
  post '/signin', to: 'auth#create'
  #custom route to set dispatch to medical provider that is currently signed in (using token)
  get '/medical_provider', to: 'medical_providers#current_medical_provider'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end