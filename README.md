# Node application with express session

## Cookie-Session Based Authentication
    * Client sends user name and password
    * Server checks whether user exists with cresentials
    * If exists create a new session and send back session-id to client
    * Client header includes SET-COOKIE and saves that calue in client cookie storage
    * All the further request client includes cookie in the request header

Seesion is created on the server side and saved to mongoDB store. Session-Id is sent to client

Packages Used 

    "connect-mongo": - For Creating Mongo Store,
    "dotenv",
    "express",
    "express-session": - For Creating Session,
    "mongoose"


Main Code for Session

    const sessionStore = new MongoStore({
        mongooseConnection: connection, // Mongoose connection
        collection: "session" // Collection to create on mongo
    });

    app.use(
        session({
            secret: "Secret Key",
            resave: false,
            saveUninitialized: true,
            store: sessionStore, 
            cookie: { maxAge: 1000 * 60 * 60 * 24 },
        })
    );