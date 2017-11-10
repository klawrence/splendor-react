class GamesController < ApplicationController
  before_action :set_game, only: [:show, :edit, :update, :destroy]

  def index
    @names = repository.list
  end

  def show
  end

  def create
    @game = repository.start_game
    render :show, status: :created
  end

  def update
    game_action.process @game
    render :show, status: :ok, format: :json
  end

  def destroy
    repository.delete params[:id]
    head :no_content
  end

  private
    def set_game
      @game = repository.find params[:id]
    end

    def game_action
      @action = GameAction.find params[:action]
    end

    def repository
      GameRepository.instance
    end
end
