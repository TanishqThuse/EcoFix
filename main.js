// js/main.js
import { database, storage } from '../src/firebase-config.js';
import { ref as dbRef, push, set } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

document.getElementById('issue-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;
    const photo = document.getElementById('photo').files[0];

    if (photo) {
        const photoRef = storageRef(storage, 'issues/' + photo.name);
        
        try {
            // Upload the photo to Firebase Storage
            const snapshot = await uploadBytes(photoRef, photo);
            const photoURL = await getDownloadURL(snapshot.ref);

            // Add issue to Firebase Realtime Database
            const issuesRef = dbRef(database, 'issues');
            const newIssueRef = push(issuesRef);

            await set(newIssueRef, {
                username: username,
                description: description,
                location: location,
                photoURL: photoURL
            });

            alert('Issue submitted successfully!');
        } catch (error) {
            console.error('Error submitting issue:', error);
        }
    } else {
        alert('Please select a photo.');
    }
});

