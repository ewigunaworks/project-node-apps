export const getIndex = (req, res) => {
    return res.status(200).send({'message': 'Hello World'})
}

export const getUser = (req, res) => {
    const userList = [
        {
            "name": "Budi",
            "email": "budi@mail.com"
        },
        {
            "name": "Toni",
            "email": "toni@mail.com"
        },
        {
            "name": "Abdul",
            "email": "abdul@mail.com"
        },
    ]

    return res.send(userList)
}