class GamesController < ApplicationController
  before_action :set_game, only: [:show, :update, :destroy]

  def index
    @games = repository.all
  end

  def show
    respond_to do |format|
      format.html { render :index }
      format.json
    end
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
