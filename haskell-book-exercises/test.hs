module HelloWorld where
sayHello :: String -> IO ()
sayHello x = putStrLn ("Hello, " ++ x ++ "!")
