require_relative "player"
require_relative "die"
require_relative "game_turn"

class Game 
  attr_reader :title

  def initialize (title)
    @title = title
    @players = []
  end

  def to_s
    @title
  end

  def add_player(player)
    @players.push(player)
  end

  def play
    puts("There are #{@players.length} players in #{@title}:")
    @players.each do  |player|
      puts player
    end

    @players.each do |player|
      GameTurn.take_turn(player)
      puts player
    end
  end
end

if __FILE__ == $0
  sample_game = Game.new("Sample")
  puts sample_game
  puts sample_game.title
  sample_game.add_player(Player.new("moe", 120))
  sample_game.play
end
