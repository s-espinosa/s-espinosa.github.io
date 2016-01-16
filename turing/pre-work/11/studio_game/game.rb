require_relative 'player'

class Game
  def initialize(name)
    @name = name.capitalize
    @players = []
  end

  attr_reader :name

  def add_player(player)
    @players.push(player)
  end

  def play
    puts "There are #{@players.length} players in #{@name}:"
    @players.each do |player|
      puts player
    end
    @players.each do |player|
      player.w00t
      player.blam
      puts player
    end
  end
end


