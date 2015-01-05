-- Ex 0
-- An expression of type IO String denotes:

-- A possibly side-effecting computation that, if it terminates, produces a value of type String

-- Ex 1
-- Which of the following implementations defines a function putStr' :: String -> IO () that takes a String as its parameter
-- and writes it to the standard output?
-- Note: The helper function putChar :: Char -> IO () takes a character as its parameter and writes it to the standard output.

putStr' [] = return ()
putStr' (x : xs) = putChar x >> putStr' xs

-- Ex 2
-- Choose all possible implementations for a function putStrLn' :: String -> IO () that takes a String parameter and writes
-- it to the standard output, followed by a newline character.
-- Assume "fast and loose" reasoning where there are no bottoms involved, and all functions are total, and all values are
-- finite.

putStrLn' [] = putChar '\n'
putStrLn' xs = putStr' xs >> putStrLn' ""

putStrLn' [] = putChar '\n'
putStrLn' xs = putStr' xs >> putChar '\n'

putStrLn' [] = putChar '\n'
putStrLn' xs = putStr' xs >>= \ x -> putChar '\n'

putStrLn' [] = putChar '\n'
putStrLn' xs = putStr' xs >> putStr' "\n"

-- Ex 3
-- Which of the following implementation defines a function getLine' :: IO String that reads a line, up to the first \n
-- character, from the standard input?
-- Note: The helper function getChar :: IO Char reads a single character from the standard input.

getLine' = get ""

get :: String -> IO String
get xs
  = do x <- getChar
       case x of
           '\n' -> return xs
           _ -> get (xs ++ [x])

-- Ex 4
-- Which of the following implementations defines a function interact' :: (String -> String) -> IO () that takes as its
-- argument a function of type String -> String, and reads a line from the standard input, and passes it to this function,
-- and then prints the resulting output followed by a newline on the standard output?

interact' f
  = do input <- getLine'
       putStrLn' (f input)

-- Ex 5
-- Choose all possible implementations of the function sequence_' :: Monad m => [m a] -> m () that takes a finite,
-- non-partial, list of non-bottom, monadic values, and evaluates them in sequence, from left to right, ignoring all
-- (intermediate) results?
-- Hint: Make sure you type in all these definitions in GHCi and play around with a variety of possible input.

sequence_' [] = return ()
sequence_' (m : ms) = (foldl (>>) m ms) >> return ()

sequence_' [] = return ()
sequence_' (m : ms) = m >> sequence_' ms

sequence_' [] = return ()
sequence_' (m : ms) = m >>= \ _ -> sequence_' ms

sequence_' ms = foldr (>>) (return ()) ms

-- Ex 6
-- Choose all possible implementations of the function sequence' :: Monad m => [m a] -> m [a] that takes a finite,
-- non-partial, list of non-bottom, monadic values, and evaluates them in sequence, from left to right, collecting all
-- (intermediate) results into a list?
-- Hint: Make sure you type in all these definitions in GHCi and play around with a variety of possible input.

sequence' [] = return []
sequence' (m : ms)
  = m >>=
      \ a ->
        do as <- sequence' ms
           return (a : as)

sequence' ms = foldr func (return []) ms
  where
    func :: (Monad m) => m a -> m [a] -> m [a]
    func m acc
      = do x <- m
           xs <- acc
           return (x : xs)

sequence' [] = return []
sequence' (m : ms)
  = do a <- m
       as <- sequence' ms
       return (a : as)

-- Ex 7
-- Choose all possible implementations of a function mapM' :: Monad m => (a -> m b) -> [a] -> m [b] which takes a non-bottom
-- function of type a -> m b, and a finite, non-partial list of non-bottom elements of type a and (similarly to map) applies
-- the function to every element of the list, but produces the resulting list wrapped inside a monadic action?
-- Note: mapM' must preserve the order of the elements of the input list.
-- Hint: Make sure you try each of these options in GHCi and play around with a variety of inputs to experiment with the
-- behaviour. It's easiest to use the IO Monad for the function passed into mapM'.

mapM' f as = sequence' (map f as)

mapM' f [] = return []
mapM' f (a : as)
  = f a >>= \ b -> mapM' f as >>= \ bs -> return (b : bs)

mapM' f [] = return []
mapM' f (a : as)
  = do b <- f a
       bs <- mapM' f as
       return (b : bs)

mapM' f [] = return []
mapM' f (a : as)
  = f a >>=
      \ b ->
        do bs <- mapM' f as
           return (b : bs)

-- Ex 8
-- Which of the following definitions implements the function filterM' :: Monad m => (a -> m Bool) -> [a] -> m [a], that
-- takes a "predicate" of type Monad m => a -> m Bool and uses this to filter a finite, non-partial list of non-bottom
-- elements of type a.
-- Note: filterM' must preserve the order of the elements of the input list, as far as they appear in the result.

filterM' _ [] = return []
filterM' p (x : xs)
  = do flag <- p x
       ys <- filterM' p xs
       if flag then return (x : ys) else return ys

-- Ex 9
-- Implement the function foldLeftM :: Monad m => (a -> b -> m a) -> a -> [b] -> m a that takes an accumulation function
--  a -> b -> m a, and a seed of type a and left folds a finite, non-partial list of non-bottom elements of type b into a
-- single result of type m a
-- Hint: The recursive structure of foldLeftM looks as follows:
foldLeftM f a [] = ... a ...
foldLeftM f a (x:xs) = foldLeftM f (... f ... a ... (>>=) ...) xs
-- What is the result of evaluating the expression:
foldLeftM (\a b -> putChar b >> return (b : a ++ [b])) [] "haskell" >>= \r -< putStrLn r

-- haskelllleksahhaskell

-- Ex 10
-- Implement the function foldRightM :: Monad m => (a -> b -> m b) -> b -> [a] -> m b which is like to foldLeftM from
-- the previous exercise, except that it folds a finite, non-partial list of non-bottom elements of type a into a single
-- monadic value of type m b.
-- What is the result of evaluating the expression:
foldRightM (\a b -> putChar a >> return (a : b)) [] (show [1, 3..10]) >>= \r -> putStrLn r
-- [9, 7, 5, 3, 1[[1, 3, 5, 7, 9]

-- Ex 11
-- Choose all possible implementations that define a function liftM :: Monad m => (a -> b) -> m a -> m b that takes a
-- function  of type a -> b and "maps" it over a non-bottom monadic value of type m a to produce a value of type m b?

liftM f m
  = do x <- m
       return (f x)

liftM f m = m >>= \ a -> return (f a)