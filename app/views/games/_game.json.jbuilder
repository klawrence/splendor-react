json.players game.players do |player|
  json.partial! 'players/player', player: player, my_turn: (player == game.current_player)
end
json.extract! game, :cards, :gems, :nobles
json.url game_url(game.to_param, format: :json)
