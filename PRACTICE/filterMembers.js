function findMembers(club) {
    return club.filter((user) => {
        return user.member
    })
}

const club = [
    {name: "John", member: true},
    {name: "Bob", member: false},
    {name: "Slice", member: true},
    {name: "Adam", member: true},
    {name: "Chris", member: false}
]

const result = findMembers(club)
console.log(result)