require_relative 'treasure_trove'

class Player
  def initialize(name, health=100)
    @name = name.capitalize
    @health = health
    @found_treasures = Hash.new(0)
  end

  attr_reader :health
  attr_accessor :name

  def score
    @health + points
  end

  def to_s
    "I'm #{@name} with health = #{@health}, points = #{points}, and score = #{score}."
  end

  def w00t()
    @health = @health + 15
    puts "#{@name} got w00ted!"
  end

  def blam()
    @health = @health - 10
    puts "#{@name} got blammed!"
  end

  def strong?()
    @health > 100
  end

  def <=>(other)
    other.score <=> score
  end

  def found_treasure(treas)
    @found_treasures[treas.name] += treas.points
    puts "#{@name} found a #{treas.name} worth #{treas.points} points."
  end

  def each_found_treasure
    @found_treasures.each do |name, points|
      new_treasure = Treasure.new(name, points)
      yield(new_treasure)
    end
  end

  def points
    @found_treasures.values.reduce(0, :+)
  end

  def self.from_csv(line)
    player, health = line.split(",")
    Player.new(player, health.to_i)
  end

end

if __FILE__ == $0
  player = Player.new("moe")
  puts player.name
  puts player.health
  player.w00t
  puts player.health
  player.blam
  puts player.health
end
