-- Ex 0
-- Given this implementation of Parser and the associated combinators, what is the result of evaluating the expression:
-- parse item "hello"?

[('h', "ello")]


-- Ex 1
-- Assume "fast and loose" reasoning where there are no bottoms involved and all functions are total.
-- The parser return 1 +++ return 2:

-- Always succeeds

-- Ex 2
-- What is the result of evaluating the expression parse (return 1) "hello"?

[(1, "hello")]

-- Ex 3
-- What is the result of evaluating the expression parse (item +++ return 'a') "hello"?

[('h', "ello")]

-- Ex 4
-- To make the type Parser (week X slide Y) a proper Monad we need to define the (>>=) (bind) operator and provide
-- the required instance declaration for the Monad class such that we can use the do notation that was illustrated
-- in the lectures.

newtype Parser a    = P (String -> [(a, String)])

instance Monad Parser where
    return                  :: a -> Parser a
    return v                =  P (\inp -> [(v, inp)])

    (>>=)                   :: Parser -> a -> (a -> Parser b) -> Parser b
    p >>= f                 = ...

-- Given the instance declaration above, choose a correct implementation of (>>=), assume "fast and loose" reasoning
-- where there are no bottoms involved and all functions are total.

p >>= f
  = P (\ inp ->
         case parse p inp of
            [(v, out)] -> parse (f v) out
            [] -> [])

-- Ex 5
-- Assume "fast and loose" reasoning where there are no bottoms involved and all functions are total.
-- The parser char 'a' +++ return 'b':

-- Always succeeds

-- Ex 6
-- Given the following implementation of the parser nat, that parses a sequence of one or more digits:

nat :: Parser Int
nat
  = do xs <- many1 digit
       return (read xs)

-- Define a parser int :: Parser Int that parses an integer literal. An integer literal consists of an optional minus sign,
-- followed by a sequence of one or more digits. Note: "-007" should parse as a valid integer according to this
-- specification, but the resulting value is -7, just like GHCi does. Try it out!

int
  = (do char '-')
        n <- nat
        return (-n))
      +++ nat

-- Ex 7
-- Define a parser comment :: Parser () for ordinary Haskell-like comments that begin with the symbol -- and extend to
-- the end of the current line, which is represented by the control character '\n' (beware Windows users!).
-- Note: /= is the syntax for "not equals" in Haskell. Yes, we know it's weird but it's not our fault.
-- Assume "fast and loose" reasoning where there are no bottoms involved and all functions are total.

comment
  = do string "--"
       many (sat (/= '\n'))
       return ()

-- Ex 8
-- Consider expressions built up from non-negative numbers, greater or equal to zero using a subtraction operator that
-- is associates to the left. A possible grammar for such expressions would look as follows:

expr ::= expr - nat | nat
nat ::= 0 | 1 | 2 | ...

-- However, this grammar is left-recursive and hence directly transliterating this grammar into parser combinators would
-- result in a program that does not terminate because of the left-recursion. In the lectures of week 7 we showed how to
-- factor recursive grammars using iteration.
-- Choose an iterative implementation of left-asociative expressions that does not suffer from non-termination.
-- Assume "fast and loose" reasoning where there are no bottoms involved and all functions are total.

expr
  = do n <- natural
       ns <- many
               (do symbol "-"
                   natural)
       return (foldl (-) n ns)