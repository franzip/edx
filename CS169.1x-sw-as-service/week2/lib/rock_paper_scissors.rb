class RockPaperScissors

  # Exceptions this class can raise:
  class NoSuchStrategyError < StandardError ; end

  def self.winner(player1, player2)
    legal_move = ['R', 'P', 'S']
    # check for legal moves
    raise RockPaperScissors::NoSuchStrategyError,
      "Strategy must be one of R,P,S" unless
       legal_move.include? player1[1] and legal_move.include? player2[1]
    check = { ['R', 'P'] => 1, ['P', 'S'] => 1, ['S', 'R'] => 1}
    # as per spec, handling just player1 losing cases is fine
    couple = [player1[1], player2[1]]
    check.has_key?(couple) ? player2 : player1
  end

  def self.tournament_winner(tournament)
    # cut left and right branch in half until base case -> f([foo, a], [bar, b])
    # recursion will stop when tournament[0].size == 2 -> [['foo', 'S'], ['bar', 'R']]
    left_branch = if tournament[0].flatten(1).size == tournament[0].size
                    tournament[0]
                  else
                    self.tournament_winner(tournament[0])
                  end

    right_branch = if tournament[1].flatten(1).size == tournament[1].size
                    tournament[1]
                   else
                    self.tournament_winner(tournament[1])
                   end
    self.winner(left_branch, right_branch)
  end
end
