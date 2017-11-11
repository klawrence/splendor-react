class GameAction
  def self.find name
    TakeTurnAction.new
  end
end


require_relative 'take_turn_action.rb'
