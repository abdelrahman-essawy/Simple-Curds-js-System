var users = [
    [
        { name: 'mohamed', gender: 'male' },
        { name: 'azza', gender: 'female' },
        { name: 'loay', gender: 'male' },
        { name: 'abdelrahman', gender: 'male' }
    ],
    [
        { name: 'ahmed', gender: 'male' },
        { name: 'sohaila', gender: 'female' },
        { name: 'yousif', gender: 'male' }
    ]
]
users.forEach(family => {
    family.forEach(user => {
        console.log(getTitleBasedOnGender(user.gender) + user.name);
    });
});

function getTitleBasedOnGender(gender) {
    switch (gender) {
        case "male":
            return "Mr. "
        case "female":
            return "Miss. "

    }
}