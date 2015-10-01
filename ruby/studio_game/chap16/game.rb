require_relative "player"
require_relative "die"
require_relative "game_turn"
require_relative "treasure_trove"

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

  def print_name_and_health(player)
    puts "#{player.name} (#{player.health})"
  end
    
  def print_stats
    puts "#{@title} Statistics:\n"

    strong, wimpy = @players.partition {|player| player.strong?}

    puts "#{strong.length} strong players:"
    strong.each do |player|
      print_name_and_health(player)
    end

    puts "#{wimpy.length} wimpy players:"
    wimpy.each do |player|
      print_name_and_health(player)
    end

    puts "\n#{@title} High Scores:"
    @players.sort.each do |player|
      puts player.name.ljust(15,".") + player.score.to_s
    end
    puts "\n\n"
  end

  def play(rounds)
    treasures = TreasureTrove::TREASURES
    puts("There are #{treasures.length} treasures to be found:")
    treasures.each do |treasure|
      puts "A #{treasure.name} is worth #{treasure.points} points"
    end
    puts "\n"

    puts("There are #{@players.length} players in #{@title}:")
    @players.each do  |player|
      puts player
    end
    puts "\n"

    rounds.times do |round|
      puts "Round #{round+1}:"
      @players.each do |player|
        GameTurn.take_turn(player)
        puts player
      end
      puts "\n"
    end
    
    print_stats
  end
end

if __FILE__ == $0
  sample_game = Game.new("Sample")
  puts sample_game
  puts sample_game.title
  sample_game.add_player(Player.new("moe", 120))
  sample_game.play(2)
end
