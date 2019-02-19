Rails.application.routes.draw do
  root to: "members#index"
  get 'hello_world', to: 'hello_world#index'
  resources :members
end
