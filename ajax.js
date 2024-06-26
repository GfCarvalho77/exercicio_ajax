
    document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const userNameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repositorio');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');
    
    fetch('https://api.github.com/users/GfCarvalho77')
        .then(function(res) {
            return res.json();
    })

    .then(function(json) {
        nameElement.innerText = json.name;
        userNameElement.innerHTML = json.login;
        avatarElement.src = json.avatar_url;
        reposElement.innerHTML = json.public_repos;
        followersElement.innerHTML = json.followers;
        followingElement.innerHTML = json.following;
        linkElement.href = json.html_url; 
    })  
})