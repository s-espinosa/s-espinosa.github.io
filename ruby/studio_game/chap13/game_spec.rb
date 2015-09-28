require_relative "game"

describe Game do

  before do
    @title = "Knuckleheads"
    @game = Game.new(@title)

    @initial_health = 100
    @player = Player.new("moe", @initial_health)

    @game.add_player(@player)
  end

  it "has a title" do
    @new_game.title == @title
  end

  it "has a "


end
