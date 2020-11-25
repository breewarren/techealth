Rails.application.routes.draw do
  resources :patients
  resources :diagnostics
  resources :encounters
  resources :medical_providers
  
  #existing users to signin -> auth_controller
  post '/signin', to: 'auth#create'

  #new users to signup -> medical_providers_controller
  get '/signup', to: 'medical_providers#create'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end