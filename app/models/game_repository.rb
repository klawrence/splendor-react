require 'singleton'

class GameRepository
  include Singleton

  def initialize
    @games = {}
  end

  def clear
    @games.clear
  end

  def count
    @games.count
  end

  def all
    @games.values
  end

  def find name
    game = @games[name.parameterize]
    raise ActiveRecord::RecordNotFound.new("Can't find game #{name}") unless game
    game
  end

  def delete name
    @games.delete name
  end

  def start_game
    game = Splendor::Game.new
    game.name = "game #{@games.count + 1}"
    @games[game.to_param] = game
  end

end
