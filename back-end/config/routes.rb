Rails.application.routes.draw do
  resources :patients
  resources :diagnostics
  resources :encounters
  resources :medical_providers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
