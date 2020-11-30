Rails.application.routes.draw do
  resources :patients
  resources :diagnostics
  resources :encounters
  resources :medical_providers
  
  #custom route for existing users to signin -> auth_controller
  post '/signin', to: 'auth#create'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end