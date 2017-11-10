class GamesController < ApplicationController
  before_action :set_game, only: [:show, :edit, :update, :destroy]

  @repository = GameRepository.instance

  def index
    @games = @repository.all_games
  end

  def show
  end

  def create
    @game = @repository.start_game
    render :show, status: :created, location: @game
  end

  def update
    game_action.process @game
    render :show, status: :ok, location: @game
  end

  def destroy
    @repository.destroy_game @game
    head :no_content
  end

  private
    def set_game
      @game = @repository.find params[:id]
    end

    def game_action
      @action = GameAction.find params[:action]
    end
end
