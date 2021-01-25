const state = {
    profilePage:{
        posts: [
            { id: '1', post: 'Hi,people? Who want on my party?', likesCount: '3' },
            { id: '2', post: 'I bought a new TV!', likesCount: '6' },
            { id: '3', post: 'I wanna to the moon', likesCount: '3' },
            { id: '4', post: 'What do you think about  politic in your country?', likesCount: '3' },
            { id: '5', post: 'I have a birthday today! Congratulate me!', likesCount: '3' },
            { id: '6', post: 'I\'m using this network', likesCount: '3' },
        ]
    },
    dialogsPage:{
        messages:
    [
        { id: '1', message: "Call me!" },
        { id: '2', message: "How are you?" },
        { id: '3', message: "Buy a tea on back way,please" },
        { id: '4', message: "Do you have money?" }
    ],dialogs: [
        { id: '1', name: 'Irina' },
        { id: '2', name: 'Bogdan' },
        { id: '3', name: 'Dima' },
        { id: '4', name: 'Vlad' },
        { id: '5', name: 'Andrey' },
        { id: '6', name: 'Anton' }
    ],
    },
    sideBar:{
        friends:
        [
            {avatar:'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg', name: 'Sveta'},
            {avatar:'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg', name: 'Dima'},
            {avatar:'https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg', name: 'Irina'},
        ]
    }
    
}

export default state;