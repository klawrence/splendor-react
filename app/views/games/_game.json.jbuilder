json.extract! game, :cards, :gems
json.players game.players do |player|
  json.partial! 'players/player', player: player, my_turn: (player == game.next_player)
end
json.url game_url(game.to_param, format: :json)
