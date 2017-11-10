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

  def list
    @games.keys
  end

  def find name
    game = @games[name]
    raise ActiveRecord::RecordNotFound.new("Can't find game #{name}") unless game
    game
  end

  def delete name
    @games.delete name
  end

  def start_game
    name = "game-#{@games.count + 1}"
    @games[name] = Splendor::Game.new
  end

end
