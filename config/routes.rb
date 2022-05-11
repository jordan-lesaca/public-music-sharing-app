Rails.application.routes.draw do

  resources :favorites
  resources :songs
  resources :users
  resources :profiles
  resources :guests

  post '/signup', to: "users#create"

  get "/me", to: "users#show"
  get "/guestUser", to: "guests#show"

  post "/login", to: "sessions#create"
  post "/guestLogin", to: "sessions#guestCreate"

  delete "/logout", to: "sessions#destroy"  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
