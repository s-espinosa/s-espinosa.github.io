require_relative "game"

describe Game do

  before do
    @title = "Game Sample"
    @new_game = Game.new(@title)
  end

  it "has a title" do
    @new_game.title == @title
  end

  it "has a "


end
