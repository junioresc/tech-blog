async function editFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split(`/`)[
        window.location.toString().split(`/`).length - 1
    ];

    const title = document.querySelector(`input[name="post-title"]`).value.trim();
    const post_description = document.querySelector(`textarea[name="post-description"]`).value.trim();

    const response = await fetch(`/api/posts/${id}`, {
        method: `PUT`,
        body: JSON.stringify({
            title,
            post_description
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.replace(`/dashboard`);
    } else {
        alert(response.statusText);
    }
}

document.querySelector(`.edit-post-form`).addEventListener(`submit`, editFormHandler);