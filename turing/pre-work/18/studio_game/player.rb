class Player
  def initialize(name, health=100)
    @name = name.capitalize
    @health = health
    @found_treasures = Hash.new(0)
  end

  attr_reader :health
  attr_accessor :name

  def to_s
    "I'm #{@name} with health = #{@health}, points = #{points}, and score = #{score}."
  end

  def score
    @health + points
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
    puts "#{@name}'s treasures: #{@found_treasures}"
  end

  def points
    @found_treasures.values.reduce(0, :+)
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
