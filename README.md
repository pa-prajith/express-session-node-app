Node application with express session

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