class Player
  def initialize(name, health=100)
    @name = name.capitalize
    @health = health
  end

  attr_reader :health
  attr_accessor :name

  def to_s
    "I'm #{@name} with a health of #{@health} and a score of #{score}."
  end

  def score
    @health + @name.length
  end

  def w00t()
    @health = @health + 15
    puts "#{@name} got w00ted!"
  end

  def blam()
    @health = @health - 10
    puts "#{@name} got blammed!"
  end

end

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

player1 = Player.new("moe")
player2 = Player.new("larry", 60)
player3 = Player.new("curly", 125)

players = [player1, player2, player3]

knuckleheads = Game.new("Knuckleheads")
players.each do |player|
  knuckleheads.add_player(player)
end
knuckleheads.play

