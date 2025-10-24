
//declaration of the async function
async function fetchUserData() {
    
    // Definition of the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Selection of the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // Fetching Data Using try-catch
    try {
        
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Converting the response to JSON
        const users = await response.json();

        // Clear the loading Message
        dataContainer.innerHTML = '';

        // Create and Append the User List
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem =document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        
        // Error Handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }

}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);

