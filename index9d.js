   const authHeader = req.headers.authorization

    // 1️⃣ Check if header exists
    if (!authHeader) {
        return res.status(401).send("Authorization header missing")
    }

    // 2️⃣ Split "Bearer 1234"
    const parts = authHeader.split(" ")

    // 3️⃣ Validate format and token
    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(401).send("Invalid authorization format")
    }

    const token = parts[1]

    if (token === "1234") {
        next()
    } else {
        return res.status(401).send("Unauthorized")
    }