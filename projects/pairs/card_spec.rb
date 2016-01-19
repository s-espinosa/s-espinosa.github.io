require_relative 'card'

describe Card do
  before do
    @card = Card.new(5, "george")
  end

  it "has a point total" do
    @card.points == 5
  end
  
  it "has an owner with a capitalized name" do
    @card.owner == "George"
  end
end
