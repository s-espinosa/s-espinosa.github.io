require_relative "treasure_trove"

class Player
  ##ATTRIBUTES##
  attr_reader :health, :name

  def name=(new_name)
    @name = new_name.capitalize
  end


  ##INITIALIZE AND BASIC METHODS##
  def initialize (name, health=100)
    @name = name.capitalize
    @health = health
    @found_treasures = Hash.new(0)
  end

  def self.from_csv(line)
    name, health = line.split(",")
    Player.new(name, Integer(health))
  end

  def to_s
    "I'm #{@name} with health = #{@health}, points = #{points}, and score = #{score}"
  end

  def <=>(player2)
    player2.score <=> self.score
  end

  def score
    @health + points
  end

  def points
    @found_treasures.values.reduce(0, :+)
  end

  def strong?
    @health > 100 ? true : false
  end


  ##PLAYER METHODS##
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

  def found_treasure(treasure)
    @found_treasures[treasure.name] += treasure.points
    puts "#{@name} found a #{treasure.name} worth #{treasure.points} points."
  end

  def each_found_treasure
    @found_treasures.each do |name, points|
      yield Treasure.new(name, points)
    end
  end
end

if __FILE__ == $0 
  player = Player.new("moe")
  puts player.name
  puts player.health
  player.w00t
  puts player.health
  player.blam
  puts player.blam
end
