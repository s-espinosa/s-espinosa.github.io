require_relative 'player'
require_relative 'die'
require_relative 'take_turn'
require_relative 'treasure_trove'

class Game
  def initialize(name)
    @name = name.capitalize
    @players = []
  end

  attr_reader :name

  def add_player(player)
    @players.push(player)
  end

  def load_players(from_file)
    File.readlines(from_file).each do |line|
      add_player(Player.from_csv(line))
    end
  end

  def play(num_rounds)
    treasures = TreasureTrove::TREASURES

    puts "There are #{@players.length} players in #{@name}:"
    @players.each do |player|
      puts player
    end

    puts "\nThere are #{treasures.length} treasures to be found:"
    treasures.each do |treas|
      puts "A #{treas.name} is worth #{treas.points} points"
    end

    1.upto(num_rounds) do |current_round|
      puts "\nRound #{current_round}:"
      @players.each do |player|
        GameTurn.take_turn(player)
        puts player
      end
    end
    puts "\n"
  end

  def print_name_and_health(player)
    puts "#{player.name} (#{player.health})"
  end

  def print_stats()
    puts "\n#{@name} Statistics:"
    strong, weak = @players.partition {|player| player.strong?}

    puts "#{strong.length} strong players:"
    strong.each do |player|
      print_name_and_health(player)
    end

    puts "#{weak.length} weak players:"
    weak.each do |player|
      print_name_and_health(player)
    end

    @players.sort.each do |player|
      puts "\n#{player.name}'s point totals:"
      all_treasures = []
      player.each_found_treasure do |treasure|
        puts "#{treasure.points} total #{treasure.name} points"
      end

      puts "#{player.points} grand total points"
    end
  end

  def print_scores()
    puts format_scores()
  end

  def save_high_scores(filename = "high_scores.txt")
    File.open(filename, "w") do |file|
      file.puts format_scores()
    end
  end

  def format_scores()
    formatted = "#{@name} High Scores:"
    @players.sort.each do |player|
      formatted += "\n#{player.name}".ljust(15, ".") + " #{player.score}"
    end
    formatted
  end
end
