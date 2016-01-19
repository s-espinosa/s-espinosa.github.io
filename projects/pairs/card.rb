class Card
  def initialize(points, owner="deck")
    @points = points
    @owner = owner.capitalize
  end

  attr_reader :points
  attr_accessor :owner

end
