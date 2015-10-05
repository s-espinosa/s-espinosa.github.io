class Player
  attr_reader :health, :name

  def name=(new_name)
    @name = new_name.capitalize
  end

  def initialize (name, health=100)
    @name = name.capitalize
    @health = health
  end

  def score
    @health + @name.length
  end

  def blam
    @health -= 10
    puts "#{@name} got blammed!"
    self.to_s
  end

  def w00t
    @health +=15
    puts "#{@name} got w00ted!"
    self.to_s
  end

  def to_s
    "I'm #{@name} with a health of #{@health} and a score of #{score}"
  end
end

class Game 
  attr_reader :title

  def initialize (title)
    @title = title
    @players = []
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
