require_relative "player"

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
      player.w00t
      player.blam
      player.w00t
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
