const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
const targetImage = document.querySelector('.CV-image img');
let i = 1;


targetImage.addEventListener('click', () => {


    targetImage.style.opacity = '0';

    setTimeout(() => {
        if (i === images.length - 0) {
            i = 0
        }


        targetImage.src = 'images/' + images[i];
        i++;

        targetImage.style.opacity = '1';

    }, 500);

    //shift + alt = F (teeb skrpti korda)
    //transition: opacity 0.3s ease-in-out; et teha animatsioon 


})

fetch('profile.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load profile.json");
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById("profile");

        // Create the title
        const title = document.createElement("h2");
        title.className = "contact-list-title";
        title.textContent = data.name;
        container.appendChild(title);

        // Create the contact list
        const list = document.createElement("ul");
        list.className = "Contact-list";

        data.profile.forEach(profile => {
            const li = document.createElement("li");
            const span = document.createElement("span");

            const icon = document.createElement("i");
            icon.className = profile.icon;

            const heading = document.createElement("h4");
            heading.className = "Contacts-list-element-title";
            heading.textContent = profile.value;

            span.appendChild(icon);
            span.appendChild(heading);
            li.appendChild(span);
            list.appendChild(li);
        });

        const aboutContainer = document.getElementById("about-me");

// Create the heading
        const aboutTitle = document.createElement("h2");
        aboutTitle.className = "main-title";
        aboutTitle.textContent = data.aboutMe.title;

// Create the paragraph
        const aboutText = document.createElement("p");
        aboutText.className = "About-Me-text";
        aboutText.textContent = data.aboutMe.text;

// Add elements to the About Me section
       aboutContainer.appendChild(aboutTitle);
       aboutContainer.appendChild(aboutText);


        container.appendChild(list);


        const experienceContainer = document.getElementById("experience");

// Create the section title
        const experienceTitle = document.createElement("h2");
        experienceTitle.className = "main-title";
        experienceTitle.textContent = data.experience.title;
        experienceContainer.appendChild(experienceTitle);

// Create the experience wrapper
        const experienceWrapper = document.createElement("div");
        experienceWrapper.className = "Experience-list";

// Create the list
        const experienceList = document.createElement("ul");
        experienceList.className = "Experience-list";

// Create each experience category
        data.experience.categories.forEach(category => {
            const li = document.createElement("li");

    // Create category heading
            const categoryTitle = document.createElement("h4");
            categoryTitle.className = "Experience-list-element-overview";
            categoryTitle.textContent = category.title + ":";
            li.appendChild(categoryTitle);

    // Create each experience item
            category.items.forEach(item => {
            const itemTitle = document.createElement("h4");
            itemTitle.className = "Experience-list-element-title";
            itemTitle.textContent = item;
            li.appendChild(itemTitle);
            });

            experienceList.appendChild(li);
        });

// Add the list to the wrapper and section
        experienceWrapper.appendChild(experienceList);
        experienceContainer.appendChild(experienceWrapper);
    })


