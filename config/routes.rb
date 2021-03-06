Rails.application.routes.draw do
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  get :search, controller: :main

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :update, :index] do 
      resources :follows, only: [:create]
    end
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:index, :show, :create, :update, :destroy] do 
      resources :likes, only: [:create]
      resources :comments, only: [:index, :create]
    end
    resources :comments, only: [:update, :destroy]

    delete 'follows/:user_id', to: 'follows#destroy', as: 'follows'
    delete 'likes/:photo_id', to: 'likes#destroy', as: 'likes'
    
    
    # get 'search', to: 'main#search'
  end
end