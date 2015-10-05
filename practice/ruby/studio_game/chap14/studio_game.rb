require_relative "game"
require_relative "player"

player1 = Player.new("Moe")
player2 = Player.new("Larry", 60)
player3 = Player.new("Curly", 125)

players = [player1, player2, player3]

knuckleheads = Game.new("Knuckleheads")
players.each do |player|
  knuckleheads.add_player(player)
end
knuckleheads.play

rodents = [
  Player.new("Alvin", 80),
  Player.new("Simon", 120),
  Player.new("Theodore", 115)]

chipmunks = Game.new("Chipmunks")
rodents.each do |player|
  chipmunks.add_player(player)
end
chipmunks.play
