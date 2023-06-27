

const url = "https://api.github.com/users"

const searchInputEl = document.getElementById('searchInput');
const searchButtonEl = document.getElementById('search-btn');
const profileContainerEl = document.getElementById('profileContainer');
const loadingEl = document.getElementById('loading');




const generatProfile = (profile) => {
    return (
        `<div class="profile-box">
        <div class="top-section">
            <div class="left">
                <div class="avatar">
                    <img src="${profile.avatar_url}" alt="avatar"></img>
                </div>
                <div class="self">
                    <h1>${profile.name}</h1>
                    <h1>${profile.login}</h1>
                </div>
            </div>
            <a href="${profile.repos_url}">
            <button class="primary-btn">check profile</button>
            </a>
        </div>
        <div class="about">
            <h2>About</h2>
            <p>${profile.bio}</p>
        </div>
        <div class="status">
            <div class="status-item">
                <h3>followers</h3>
                <p>${profile.followers}</p>
            </div>
            <div class="status-item">
                <h3>following</h3>
                <p>${profile.following}</p>
            </div><div class="status-item">
                <h3>Repos</h3>
                <p>${profile.public_repos}</p>
            </div>
        </div>
    </div>`
    )
}

const fetchprofile = async () => {

    const username = searchInputEl.value;


    try {
        const res = await fetch(`${url}/defunkt`);
        const data = await res.json();

        if (data.bio) {

            profileContainerEl.innerHTML = generatProfile(data);
        } else {
            loadingEl.innerHTML = data.message;
            loadingEl.style.color = "red";
        }

        console.log("data", data)
    } catch (error) {
        console.log({ error })
        

    }
}
fetchprofile();

searchButtonEl.addEventListener("click", fetchprofile)